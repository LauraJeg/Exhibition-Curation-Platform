import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing
import { AppBar, Toolbar, Typography, List, ListItem, ListItemButton, ListItemText, Box } from '@mui/material';

const TopMenu = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#D7CEC7' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Centered menu items container */}
        <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
          <List sx={{ display: 'flex', flexDirection: 'row', padding: 0, margin: 0 }}>
            {/* Home Menu Item */}
            <ListItem button key={'home'} sx={{ padding: '0 20px' }}>
              <Link to='/home' style={{ textDecoration: 'none', color: 'black' }}>
                <ListItemButton sx={{ fontSize: '5rem' }}>
                  <ListItemText primary='Home' />
                </ListItemButton>
              </Link>
            </ListItem>

            {/* Artworks Menu Item */}
            <ListItem button key={'artworks'} sx={{ padding: '0 20px' }}>
              <Link to='/artworks' style={{ textDecoration: 'none', color: 'black' }}>
                <ListItemButton sx={{ fontSize: '5rem' }}>
                  <ListItemText primary='Artworks' />
                </ListItemButton>
              </Link>
            </ListItem>

            {/* Your Exhibition Menu Item */}
            <ListItem button key={'exhibition'} sx={{ padding: '0 20px' }}>
              <Link to='/exhibition' style={{ textDecoration: 'none', color: 'black' }}>
                <ListItemButton sx={{ fontSize: '5rem' }}>
                  <ListItemText primary='Your Exhibition' />
                </ListItemButton>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopMenu;