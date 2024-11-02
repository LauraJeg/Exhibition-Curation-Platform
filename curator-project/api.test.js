const axios = require('axios');



jest.mock('axios');

describe('fetchData', () => {
  it('should fetch data successfully', async () => {
    const data = { data: 'some data' };
    
    axios.get.mockResolvedValueOnce({ data });

    const result = await fetchData();

    expect(result).toEqual(data); 
    expect(axios.get).toHaveBeenCalledWith('https://collectionapi.metmuseum.org/public/collection/v1/objects'); 
  });

  it('should handle errors', async () => {
    const errorMessage = 'Network Error';
    
    axios.get.mockRejectedValueOnce(new Error(errorMessage));

    await expect(fetchData()).rejects.toThrow(errorMessage);
  });
});