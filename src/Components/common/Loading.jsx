import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { textInvi } from '../Navigation/consts/sidebarItems';

const Loading = () => {
  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', 
        flexDirection: 'column', 
      }}
    >
      <CircularProgress sx={{ color: '#76323F' }} /> 
      
      <Typography sx={{ color: 'white', marginTop: 2 }}>
        {textInvi}
      </Typography>
    </Box>
  );
};

export default Loading;
