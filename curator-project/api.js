import axios from 'axios';

const VAAPI = axios.create({
  baseURL: `https://api.vam.ac.uk/v2/objects/search`
});
const clevAPI = axios.create({
  baseURL: `https://openaccess-api.clevelandart.org/api/artworks/`
});

export const VAApiTest2 = () => {
  return VAAPI.get(`?q_actor=gogh`)
  .then (({data})=> {

    return data.data
  })
  .catch((error) => {
    console.error('Error fetching artworks:', error);
    throw error; 
  });
  
}


export const clev2ApiTest = () => {
  return clevAPI.get(`?artists=picasso`)
  .then (({data})=> {

    return data.data
  })
  .catch((error) => {
    console.error('Error fetching artworks:', error);
    throw error; 
  });
  
}





export const testBothAPI = (params) => {
  const clevFormatting = params.split(" ").join("+");
  const clevPromise = clevAPI.get(`?artists=${clevFormatting}&limit=10`);


  const VAPromise = VAAPI.get(`?q_actor=${params}`);
  
  return Promise.all([clevPromise, VAPromise]).then((results) => {
    const data = {
      clevData: results[0].data.data,
      VAData: results[1].data.records,
    };
    return data;
  });
}

