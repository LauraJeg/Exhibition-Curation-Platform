import React from 'react';
import { Grid2, Box, Typography, Button, Container, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { textInvi } from '../Navigation/consts/sidebarItems';


const Home = () => {
  return (
    <Grid2 sx = {{marginLeft:'150px'}}>
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>

      <Box sx={{ backgroundColor: '#D7CEC7', padding: '20px 0', boxShadow: 3 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" color="text.primary">
            Welcome to the Exhibition Curation Platform
          </Typography>
          <Typography variant="h5" align="center" sx={{ marginTop: 2, color: '#555' }}>
            Discover and curate artwork from renowned museums across the world.
          </Typography>
        </Container>
      </Box>


      <Box sx={{ flexGrow: 1, padding: '40px 0', backgroundColor: '#F5F5F5' }}>
        <Container maxWidth="lg">
          <Grid2 container spacing={4} justifyContent="center">
            <Grid2 item xs={12} sm={4}>
              <Paper sx={{ padding: 2, backgroundColor: '#fff', boxShadow: 3 }}>
                <Typography variant="h6" align="center" color="text.primary">
                  Artworks
                </Typography>
                <Typography variant="body2" align="center" color="text.secondary" sx={{ marginBottom: 2 }}>
                  Explore a wide range of artwork from various collections.
                </Typography>
                <Button
                  variant="contained"
                  color="#76323F"
                  fullWidth
                  component={Link}
                  to="/artworks"
                >
                  Browse Artworks
                </Button>
              </Paper>
            </Grid2>
            <Grid2 item xs={12} sm={4}>
              <Paper sx={{ padding: 2, backgroundColor: '#fff', boxShadow: 3 }}>
                <Typography variant="h6" align="center" color="text.primary">
                  Exhibitions
                </Typography>
                <Typography variant="body2" align="center" color="text.secondary" sx={{ marginBottom: 2 }}>
                  Curate your own exhibitions by selecting your favorite artworks.
                </Typography>
                <Button
                  variant="contained"
                  color="#76323F"
                  fullWidth
                  component={Link}
                  to="/exhibition"
                >
                  Create Exhibition
                </Button>
              </Paper>
            </Grid2>
          </Grid2>

        </Container>
      </Box>
      <Typography color="#fff">
    {textInvi}
</Typography>


      <Box sx={{ backgroundColor: '#D7CEC7', padding: '20px 0' }}>
        <Container maxWidth="lg">
          <Typography variant="body2" align="center" color="text.secondary">
            &copy; {new Date().getFullYear()}
          </Typography>
        </Container>
      </Box>
    </Box>

    </Grid2>
  );
};

export default Home;
