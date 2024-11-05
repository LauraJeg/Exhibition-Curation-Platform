import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Sidebar = () => {
  const [selectedCategories, setSelectedCategories] = useState([]); 
  const [selectedMuseums, setSelectedMuseums] = useState([]); 
  const categories = [
    "Paintings",
    "Sculptures",
    "Prints",
    "Textiles",
    "Ceramics",
    "Photography",
    "Drawings"
  ];
  const museums = [
    'V&A',
    'Cleveland'
  ]
  const handleSubmit = () => {
    alert('Selected categories have been submitted!');
  };

  const handleCheckboxChangeCat = (category) => {
    setSelectedCategories((prevSelected) => {
      if (prevSelected.includes(category)) {
        return prevSelected.filter((item) => item !== category);
      } else {
        return [...prevSelected, category];
      }
    });
  };
  const handleCheckboxChangeMus = (museum) => {
    setSelectedMuseums((prevSelected) => {
      if (prevSelected.includes(museum)) {
        return prevSelected.filter((item) => item !== museum);
      } else {
        return [...prevSelected, museum];
      }
    });
  };
    const drawerWidth = 150;
    return ( 
      <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#D7CEC7',
          color: '565656'
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
          <ListItem button="true" key='cats' >
            <ListItemButton>
              <ListItemText primary='No Categories' />
            </ListItemButton>
          </ListItem>
      </List>
      <List>
        {categories.map((category) => (
          <ListItem key={category}>
            <ListItemButton>
              <Checkbox size='small' sx={{ marginLeft: -3 }}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCheckboxChangeCat(category)}
                inputProps={{ 'aria-label': `${category} checkbox` }}
              />
              <ListItemText primary={category} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
          <ListItem key='cats' >
            <ListItemButton>
              <ListItemText primary='Museums' />
            </ListItemButton>
          </ListItem>
      </List>
      <List>
        {museums.map((museum) => (
          <ListItem key={museum}>
            <ListItemButton>
              <Checkbox size='small' sx={{ marginLeft: -3 }}
                checked={selectedMuseums.includes(museum)}
                onChange={() => handleCheckboxChangeMus(museum)}
                inputProps={{ 'aria-label': `${museum} checkbox` }}
              />
              <ListItemText primary={museum} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ marginTop: 3 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={selectedMuseums.length===0}  // Disable if no categories are selected
        >
          Submit Selection
        </Button>
      </Box>
    </Drawer>
    );
};

export default Sidebar;