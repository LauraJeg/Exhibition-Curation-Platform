import React, { useState } from 'react';
import CommonArtCard from "../common/CommonArtCard";
import { textInvi } from "../Navigation/consts/sidebarItems";
import Typography from '@mui/material/Typography';
import { Box, FormControl, InputLabel, Select, MenuItem, Radio, RadioGroup, FormControlLabel, Button } from '@mui/material';

const Artworks = ({ selectedCategories, selectedMuseums }) => {
  const [sortBy, setSortBy] = useState('artist'); 
  const [sortOrder, setSortOrder] = useState('asc'); 
  const [selectedSortBy, setSelectedSortBy] = useState('artist'); // Temporary state
  const [selectedSortOrder, setSelectedSortOrder] = useState('asc'); // Temporary state

  console.log(selectedCategories, selectedMuseums, 'in the artworks');

  const handleSortByChange = (event) => {
    setSelectedSortBy(event.target.value); // Update temporary state
  };

  const handleSortOrderChange = (event) => {
    setSelectedSortOrder(event.target.value); // Update temporary state
  };

//implement api logic
  const handleSortApply = () => {
    setSortBy(selectedSortBy); 
    setSortOrder(selectedSortOrder); 
    console.log(`Sorting by ${selectedSortBy} in ${selectedSortOrder} order`);
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2, marginLeft: '300px', marginTop: '40px' }}>

        <FormControl sx={{ marginRight: 2 }}>
          <InputLabel>Sort By</InputLabel>
          <Select 
            value={selectedSortBy} 
            onChange={handleSortByChange} 
            label="Sort By">
            <MenuItem value="artist">Artist</MenuItem>
            <MenuItem value="date">Date</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ marginLeft: 2 }}>
          <RadioGroup
            row
            aria-labelledby="sort-order-group-label"
            name="sort-order-group"
            value={selectedSortOrder}
            onChange={handleSortOrderChange}
          >
            <FormControlLabel value="asc" control={<Radio />} label="Asc" />
            <FormControlLabel value="desc" control={<Radio />} label="Desc" />
          </RadioGroup>
        </FormControl>

        <Button
          variant="contained"
          color="#565656"
          onClick={handleSortApply}
          sx={{ marginLeft: 2 }}
        >
          Apply Sorting
        </Button>
      </Box>

      <CommonArtCard 
        terms={{ toggleCleveland: true, toggleVA: true }} 
        selectedCategories={selectedCategories} 
        selectedMuseums={selectedMuseums} 
        sortBy={sortBy} 
        sortOrder={sortOrder} 
      />
      
      <Typography color="white">{textInvi}</Typography>
    </>
  );
};

export default Artworks;
