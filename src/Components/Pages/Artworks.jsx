import CommonArtCard from "../common/CommonArtCard"
import { textInvi } from "../Navigation/consts/sidebarItems";
import Typography from '@mui/material/Typography';
const terms = {toggleCleveland: true, toggleVA: true}
import { useState } from 'react';
import { Checkbox, FormControl, InputLabel, Select, MenuItem, Box, FormControlLabel , Button} from '@mui/material';



const Artworks = ({selectedCategories, selectedMuseums}) => {
    const [sortBy, setSortBy] = useState('artist'); 
    const [sortOrder, setSortOrder] = useState('asc'); 
console.log(selectedCategories, selectedMuseums, 'in the artworks')
  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleSortOrderChange = (order) => {
    setSortOrder(order);
  };

//sort this out! put into api
  const handleSortApply = () => {
    console.log(`Sorting by ${sortBy} in ${sortOrder} order`);
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 , marginLeft:'160px', marginTop: '20px'}}>

        <FormControl sx={{ marginRight: 2 }}>
          <InputLabel>Sort By</InputLabel>
          <Select value={sortBy} onChange={handleSortByChange} label="Sort By">
            <MenuItem value="artist">Artist</MenuItem>
            <MenuItem value="date">Date</MenuItem>
          </Select>
        </FormControl>


          <FormControlLabel
          control={
            <Checkbox
              checked={sortOrder === 'asc'}
              onChange={() => handleSortOrderChange('asc')}
              name="asc"
              color="primary"
              sx={{
                '&.Mui-checked': {
                  color: '#565656',
                },
                borderRadius: '50%',
                width: 24,
                height: 24,
                border: '1px solid #ddd',
              }}
            />
          }
          label="Asc"
        />
        
        <FormControlLabel
          control={
            <Checkbox
              checked={sortOrder === 'desc'}
              onChange={() => handleSortOrderChange('desc')}
              name="desc"
              color="primary"
              sx={{
                '&.Mui-checked': {
                  color: '#565656',
                },
                borderRadius: '50%',
                width: 24,
                height: 24,
                border: '1px solid #ddd',
              }}
            />
          }
          label="Desc"
        />


 
        <Button
          variant="contained"
          color="#76323F"
          onClick={handleSortApply}
          sx={{ marginLeft: 2 }}
        >
          Apply Sorting
        </Button>
      </Box>
    <CommonArtCard terms = {terms} selectedCategories={selectedCategories} selectedMuseums={selectedMuseums}/>
    <Typography color="white">
    {textInvi}
</Typography>
    </>
    );
};

export default Artworks;