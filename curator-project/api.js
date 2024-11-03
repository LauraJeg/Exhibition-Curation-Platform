import axios from 'axios';

export const fetchDataMet = async () => {
  try {
    const response = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects');
    console.log(response.data); 
  } catch (error) {
    console.error('Error fetching data:', error); 
  }
};
export const metSearchByObjectID = (objectID) => {
  return axios 
    .get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.error('Error fetching artworks:', error);
      throw error; 
    });
}

export const MetAddDataToObj = (artObjIDArr) => {
    const artObj = [];
    artObjIDArr.forEach((objectID)=> {
      metSearchByObjectID(objectID).then((art)=> artObj.push(art))
    })
    return artObj
}

export const testMetQueryAPI = () => {
  return axios
    .get('https://collectionapi.metmuseum.org/public/collection/v1/search?q=Longacre')
    .then(( {data} ) => {   
      return MetAddDataToObj(data.objectIDs);
    })
    .catch((error) => {
      console.error('Error fetching artworks:', error);
      throw error; 
    });
};

export const clevApiTest = () => {
  return axios
  .get(`https://openaccess-api.clevelandart.org/api/artworks/?q=song%20xu&skip=2&limit=1&indent=1`)
  .then (({data})=> {
    console.log(data.data)
    return data.data
  })
  .catch((error) => {
    console.error('Error fetching artworks:', error);
    throw error; 
  });
  
}