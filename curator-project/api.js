import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects');
    console.log(response.data); 
  } catch (error) {
    console.error('Error fetching data:', error); 
  }
};
fetchData();
const fetchFirst10Artworks = async () => {
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

// Example usage
fetchFirst10Artworks()
  .then(artworks => {
    console.log('First 10 Artworks:', artworks);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });