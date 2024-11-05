import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, List, ListItem, ListItemButton, ListItemText, Box } from '@mui/material';

const TopMenu = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#D7CEC7', width: '100%', zIndex: 1300 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <List sx={{ display: 'flex', flexDirection: 'row', padding: 0, margin: 0 }}>
            
            {/* Home Link */}
            <ListItem sx={{ padding: '0 20px' }}>
              <Link to='/home' style={linkStyle}>
                <ListItemButton sx={{ fontSize: '2rem' }}>
                  <ListItemText primary='Home' />
                </ListItemButton>
              </Link>
            </ListItem>

            {/* Artworks Link */}
            <ListItem sx={{ padding: '0 20px' }}>
              <Link to='/artworks' style={linkStyle}>
                <ListItemButton sx={{ fontSize: '2rem' }}>
                  <ListItemText primary='Artworks' />
                </ListItemButton>
              </Link>
            </ListItem>

            {/* Exhibition Link */}
            <ListItem sx={{ padding: '0 20px' }}>
              <Link to='/exhibition' style={linkStyle}>
                <ListItemButton sx={{ fontSize: '2rem' }}>
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