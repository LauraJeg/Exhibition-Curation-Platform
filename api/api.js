import axios from 'axios';
import { parsingClevData, parsingVAData, sortByArtist, sortByDate } from '../src/Utils/api_util';

const VAAPI = axios.create({
  baseURL: `https://api.vam.ac.uk/v2/objects/search?`
});
const clevAPI = axios.create({
  baseURL: `https://openaccess-api.clevelandart.org/api/artworks/`
});


export const getOneClevArt = (id) => {

  return clevAPI.get(`${id}`)
    .then((response) => {
      console.log(response.data.data)
      return response.data.data;
    })
    .catch((error) => {
        console.error('Error fetching artworks:', error);
        throw error; 
    });
};

export const getOneVAArt = (id) => {

  return VAAPI.get(`q=${id}&images_exist=true`)
    .then((response) => {
      return response.data.records[0];
    })
    .catch((error) => {
      console.error('Error fetching artworks:', error);
      throw error; 
  });
};




export const VAArtworkCollection =(terms) => {

  let VAQuery = `?page_size=100&images_exist=true&q=*`;
  terms.type ? (VAQuery += `&q_object_type=${terms.type}`) : null;
  terms.page && terms.page % 25 === 0 ? (VAQuery += `&page=${page / 25 + 1}`) : null;

  return VAAPI.get(VAQuery)
  .then((response) => {
    return response.data.records.map((item)=> {return parsingVAData(item)});
  })
  .catch((error) => {
    console.error('Error fetching artworks:', error);
    throw error; 
});
}

export const clevelandArtworkCollection =(terms) => {

  let clevelandQuery = "?q=1&has_image=1&limit=100"
  terms.type ? (clevelandQuery += `&classification_type=${terms.type}`) : null;
    console.log(clevelandQuery)
    return clevAPI.get(clevelandQuery)
    .then((response) => {
      return response.data.data.map((item)=> {return parsingClevData(item)});
    })
    .catch((error) => {
      console.error('Error fetching artworks:', error);
      throw error; 
  });
}

export const combinedArtwork = (terms, selectedCategories, selectedMuseums, sortBy, sortOrder) => {
console.log(terms, selectedCategories, selectedMuseums, sortBy, sortOrder, 'in the api')
  const parsedData = [];
  let clevelandPromise = Promise.resolve({ data: { data: [] } }); 
  if (selectedMuseums.indexOf('Cleveland') >= 0) {
    let clevelandQuery = "?q=1&has_image=1&limit=100";
    if (selectedCategories.length !== 0) clevelandQuery += `&classification_type=${selectedCategories[0]}`;
    clevelandPromise = clevAPI.get(clevelandQuery).catch(error => {
      console.error("Cleveland API Error:", error);
      return { data: { data: [] } }; 
    });
  }

  
  let VAPromise = Promise.resolve({ data: { records: [] } });
  if (selectedMuseums.indexOf('V&A') >= 0) {
    let VAQuery = `?page_size=100&images_exist=true&order_by=${sortBy}&order_sort=${sortOrder}`;
    if (selectedCategories[0]) VAQuery += `&q_object_type=${selectedCategories[0]}`;
    VAPromise = VAAPI.get(VAQuery).catch(error => {
      console.error("VA API Error:", error);
      return { data: { records: [] } }; 
    });
  }

 
  return Promise.all([clevelandPromise, VAPromise]).then((res) => {
  console.log(res[1].data.records, '<<Cleveland')
    if (selectedMuseums.indexOf('Cleveland') >= 0) {
      res[0].data.data.forEach(element => {
        parsedData.push(parsingClevData(element));
      });
    }

console.log(res[0].data.data)
    if (selectedMuseums.indexOf('V&A') >= 0) {
      res[1].data.records.forEach(element => {
        parsedData.push(parsingVAData(element));
      });
    }

    return parsedData;
  })
  .then((data)=> {
    console.log(data)
    const sortedData = []
    if (sortBy==='artist'){
      sortedData.push([...sortByArtist(data, sortOrder)])
    } else {
      sortedData.push([...sortByDate(data, sortOrder)])
    }
    return data
  });
 
};