import React, { useState, useEffect } from 'react';
import { Grid2, Typography, IconButton, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Slideshow = () => {
  const [storedData, setStoredData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('artworks');
    if (data) {
      setStoredData(JSON.parse(data));
    }

    const id = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % storedData.length);
    }, 5000);  
    setIntervalId(id);

    return () => clearInterval(id);
  }, [storedData]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % storedData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + storedData.length) % storedData.length);
  };

  if (storedData.length === 0) {
    return (
      <Typography variant="h6" sx={{ textAlign: 'center', marginTop: '20px' }}>
        No artworks saved in localStorage.
      </Typography>
    );
  }

  const currentArtwork = storedData[currentIndex];

  return (
    <div style={{ padding: '20px' }}>
        <Grid2  sx={{ marginLeft: '150px' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px' }}>
        Artworks Exhibiton
      </Typography>

      <Box sx={{ position: 'relative', textAlign: 'center', maxWidth: '90%', margin: '0 auto' }}>
        {/* Image */}
        <img
          src={currentArtwork.image}
          alt={currentArtwork.title}
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        />

        <Typography sx={{ textAlign: 'center', marginTop: '10px', fontWeight: 'bold' }}>
          {currentArtwork.title || 'Untitled'}
        </Typography>
        <Typography sx={{ textAlign: 'center', fontStyle: 'italic' }}>
          {currentArtwork.creator || 'Unknown'}
        </Typography>

        <IconButton
          onClick={handlePrev}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
          }}
        >
          <ArrowBackIcon />
        </IconButton>

        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
          }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Box>

      <Box sx={{ textAlign: 'center', marginTop: '10px' }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {`${currentIndex + 1} of ${storedData.length}`}
        </Typography>
      </Box>
      </Grid2>
    </div>
  );
};

export default Slideshow;
