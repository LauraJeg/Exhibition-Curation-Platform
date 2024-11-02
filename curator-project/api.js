import axios from 'axios';

export const fetchData = async () => {
  try {
    const response = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects');
    console.log(response.data); 
  } catch (error) {
    console.error('Error fetching data:', error); 
  }
};

 export const fetchFirst10Artworks = async () => {
  try {
    const response = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects');
    
    const totalArtworks = response.data.total;
    
    const objectIDs = response.data.objectIDs.slice(0, Math.min(10, totalArtworks));

    const artworks = await Promise.all(
      objectIDs.map(async (id) => {
        const artworkResponse = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
        return artworkResponse.data;
      })
    );

    return artworks;
  } catch (error) {
    console.error('Error fetching artworks:', error);
    throw error; 
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

export const testMetQueryAPI = () => {
  return axios
    .get('https://collectionapi.metmuseum.org/public/collection/v1/search?q=Longacre')
    .then(({ artObjArr }) => {
      artObjArr.forEach((art)=> {
        //for each ID put into function to grab whole obj
        //then add to a new arr
      })
      return data;
    })
    .catch((error) => {
      console.error('Error fetching artworks:', error);
      throw error; 
    });
};