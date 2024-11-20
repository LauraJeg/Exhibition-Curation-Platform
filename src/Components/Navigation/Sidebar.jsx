import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { categories, museums } from './consts/sidebarItems';

const Sidebar = ({ setSelectedCategories, selectedCategories, setSelectedMuseums, selectedMuseums }) => {
  const [tempSelectedMuseums, setTempSelectedMuseums] = useState([]);
  const [tempSelectedCategory, setTempSelectedCategory] = useState(selectedCategories[0] || '');

  useEffect(() => {
   
    setTempSelectedMuseums(museums); 
    setTempSelectedCategory(selectedCategories[0] || ''); 
  }, [selectedCategories]);

  const handleSubmit = () => {
    setSelectedMuseums(tempSelectedMuseums);
    setSelectedCategories([tempSelectedCategory]);
    alert('Selected categories and museums have been submitted!');
  };

  const handleCheckboxChangeMus = (museum) => {
    setTempSelectedMuseums((prevSelected) => {
      if (prevSelected.includes(museum)) {
        return prevSelected.filter((item) => item !== museum); 
      } else {
        return [...prevSelected, museum];
      }
    });
  };

  const handleCheckboxChangeCat = (category) => {
  
    setTempSelectedCategory(category); 
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
          color: '565656',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />

      <List>
        <ListItem key="museums">
          <ListItemButton>
            <ListItemText primary="Museums" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        {museums.map((museum) => (
          <ListItem key={museum}>
            <ListItemButton onClick={() => handleCheckboxChangeMus(museum)}>
              <Checkbox
                size="small"
                sx={{ marginLeft: -3 }}
                checked={tempSelectedMuseums.includes(museum)} 
                inputProps={{ 'aria-label': `${museum} checkbox` }}
              />
              <ListItemText primary={museum} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        <ListItem button key="categories">
          <ListItemButton>
            <ListItemText primary="Categories" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        {categories.map((category) => (
          <ListItem key={category}>
            <ListItemButton onClick={() => handleCheckboxChangeCat(category)}> 
              <Checkbox
                size="small"
                sx={{ marginLeft: -3 }}
                checked={tempSelectedCategory === category} 
                inputProps={{ 'aria-label': `${category} checkbox` }}
              />
              <ListItemText primary={category} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <Box sx={{ marginTop: 3 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit} 
          disabled={tempSelectedMuseums.length === 0 && !tempSelectedCategory} 
        >
          Submit Selection
        </Button>
      </Box>
    </Drawer>
  );
};

export default Sidebar;

