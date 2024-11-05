import React, { useState, useEffect } from 'react';
import { Grid2, Typography, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ImageGallery = () => {
  const [storedData, setStoredData] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('artworks');
    if (data) {
      setStoredData(JSON.parse(data));
    }
  }, []);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (storedData.length === 0) {
    return (
      <Typography variant="h6" sx={{ textAlign: 'center', marginTop: '20px' }}>
        No artworks saved in localStorage.
      </Typography>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px' }}>
        Artworks Gallery
      </Typography>
      <Grid2 container spacing={2} sx={{ marginLeft: '150px', overflowX: 'auto', paddingBottom: '20px' }}>
        {storedData.map((art, index) => (
          <Grid2 item key={art.key} sx={{ minWidth: '300px' }}>
            <div
              style={{
                background: '#f0f0f0',
                padding: '10px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <img
                src={art.image}
                alt={art.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
                onClick={() => handleImageClick(art.image)}
              />
              <Typography sx={{ textAlign: 'center', marginTop: '10px', fontWeight: 'bold' }}>
                {art.title || 'Untitled'}
              </Typography>
              <Typography sx={{ textAlign: 'center', fontStyle: 'italic' }}>
                {art.creator || 'Unknown'}
              </Typography>
            </div>
          </Grid2>
        ))}
      </Grid2>

      {/* Dialog for full-screen view */}
      <Dialog open={open} onClose={handleClose} maxWidth="xl">
        <DialogTitle>
          <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <img
            src={selectedImage}
            alt="Large Artwork"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose} style={{ margin: '10px' }}>Close</button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ImageGallery;
