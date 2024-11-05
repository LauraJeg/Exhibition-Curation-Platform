import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText,ListItemButton, Collapse, Divider, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Sidebar = ({ open, onClose }) => {
  
  const [openCategory, setOpenCategory] = useState(null); 
  const [openMuseum, setOpenMuseum] = useState(false); 

  const handleCategoryToggle = (category) => {
    setOpenCategory((prevState) => (prevState === category ? null : category));
  };

  // Toggle museums collapse
  const handleMuseumToggle = () => {
    setOpenMuseum(!openMuseum);
  };

  // Sample categories
  const categories = ["Paintings", "Sculptures", "Prints", "Textiles", "Ceramics"];

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <div style={{ width: 250 }}>
        {/* Drawer Header */}
        <Typography variant="h6" sx={{ padding: '16px' }}>
          Filter Options
        </Typography>

        <Divider />

        {/* Categories List */}
        <List>
          <ListItemButton onClick={() => handleCategoryToggle('categories')}>
            <ListItemText primary="Categories" />
            {openCategory === 'categories' ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
          <Collapse in={openCategory === 'categories'} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {categories.map((category) => (
                <ListItemButton key={category} sx={{ paddingLeft: '32px' }}>
                  <ListItemText primary={category} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </List>

        <Divider />

        {/* Museums List */}
        <List>
          <ListItemButton onClick={handleMuseumToggle}>
            <ListItemText primary="Museums" />
            {openMuseum ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
          <Collapse in={openMuseum} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ paddingLeft: '32px' }}>
                <ListItemText primary="V&A Museum" />
              </ListItemButton>
              <ListItemButton sx={{ paddingLeft: '32px' }}>
                <ListItemText primary="Cleveland Museum of Art" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>

        <Divider />
      </div>
    </Drawer>
  );
};


export default Sidebar;