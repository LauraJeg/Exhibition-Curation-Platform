import React from 'react';
import { Link } from 'react-router-dom'; 
import { AppBar, Toolbar, Typography, List, ListItem, ListItemButton, ListItemText, Box } from '@mui/material';

const TopMenu = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#D7CEC7' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
      
        <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
          <List sx={{ display: 'flex', flexDirection: 'row', padding: 0, margin: 0 }}>
          
            <ListItemButton key={'home'} sx={{ padding: '0 20px' }}>
              <Link to='/home' style={{ textDecoration: 'none', color: 'black' }}>
                <ListItemButton sx={{ fontSize: '5rem' }}>
                  <ListItemText primary='Home' />
                </ListItemButton>
              </Link>
            </ListItemButton>

         
            <ListItemButton key={'artworks'} sx={{ padding: '0 20px' }}>
              <Link to='/artworks' style={{ textDecoration: 'none', color: 'black' }}>
                <ListItemButton sx={{ fontSize: '5rem' }}>
                  <ListItemText primary='Artworks' />
                </ListItemButton>
              </Link>
            </ListItemButton>

       
            <ListItemButton key={'exhibition'} sx={{ padding: '0 20px' }}>
              <Link to='/exhibition' style={{ textDecoration: 'none', color: 'black' }}>
                <ListItemButton sx={{ fontSize: '5rem' }}>
                  <ListItemText primary='Your Exhibition' />
                </ListItemButton>
              </Link>
            </ListItemButton>
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopMenu;