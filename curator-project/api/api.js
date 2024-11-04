import axios from 'axios';

const VAAPI = axios.create({
  baseURL: `https://api.vam.ac.uk/v2/objects/search?`
});
const clevAPI = axios.create({
  baseURL: `https://openaccess-api.clevelandart.org/api/artworks/`
});


export const getOneClevArt = (id) => {

  return clevAPI.get(`q=${id}`)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
        console.error('Error fetching artworks:', error);
        throw error; 
    });
};

export const getOneVAArt = (id) => {

  return VAAPI.get(`${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error('Error fetching artworks:', error);
      throw error; 
  });
};




export const VAArtworkCollection =(terms) => {

//VA search query 
  let VAQuery = `?page_size=100&images_exist=true`;
  terms.query ? (VAQuery += `&q=${terms.query}`) : (vamQuery += `&q=*`);
  terms.type ? (VAQuery += `&q_object_type=${terms.type}`) : null;
  terms.page && terms.page % 25 === 0 ? (VAQuery += `&page=${page / 25 + 1}`) : null;

  return VAAPI.get(VAQuery)
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.error('Error fetching artworks:', error);
    throw error; 
});
}

  // technique ? (vamQuery += `&q_material_technique=${technique}`) : null;