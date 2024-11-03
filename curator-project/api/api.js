import axios from 'axios';

const VAAPI = axios.create({
  baseURL: `https://api.vam.ac.uk/v2/objects/search`
});
const clevAPI = axios.create({
  baseURL: `https://openaccess-api.clevelandart.org/api/artworks/`
});


export const getOneClevArt = (id) => {

  return clevAPI.get(`${id}`)
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