import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from 'react'
import { VAArtworkCollection, getOneVAArt } from '../../../api/api';
import Grid from '@mui/material/Grid2';
import Loading from './Loading';
import { parsingClevData, parsingVAData } from '../../Utils/api_util';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));
  
    
const CommonArtCard = ({terms}) => {

    const [results, setResults] = useState();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [toggledFavourites, isToggledFavourites] = useState(fetchStoredData);

    function fetchStoredData() {
      const storedData = localStorage.getItem("artworks");
      return storedData ? JSON.parse(storedData) : [];
    }
    function handleFavourite(art) {
      let updatedFavourites = [...toggledFavourites];
      const found = updatedFavourites.some((item) => item.key === art.key);
      if (!found) {
        updatedFavourites = [...updatedFavourites, art];
      } else {
        updatedFavourites = updatedFavourites.filter(
          (item) => item.key !== art.key
        );
      }
      isToggledFavourites(updatedFavourites);
      localStorage.setItem("artworks", JSON.stringify(updatedFavourites));
      console.log(localStorage.artworks)
    }

    //multiple artworks
    useEffect(() => {
    VAArtworkCollection(terms).then((res)=> {
      const parsedData = res.records.map((art)=> {return parsingVAData(art)})
            setResults(parsedData);
            setIsLoading(false);
        }).catch((err)=>{
            setError('Failed to load artwork data.');
            setIsLoading(false);
        });
    }, []);

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    const storedData = localStorage.getItem("artworks");

    return (
        <>
      {isLoading === false? (
        <Grid container spacing={2} sx={{ marginLeft: '150px' }}>
          {results.map((result) => {

  return ( 
    <Card key={result.key} 
          sx={{ maxWidth: 345, m: 4, backgroundColor: '#ebe6e3' }}>
      <CardHeader
        avatar={
          <Avatar alt="V&A" src={result.avatar} aria-label="museumIcon" />
        }
        title={result.title}
        subheader={`Made by: ${result.creator}`}
      />
      <CardMedia
        component="img"
        height="194"
        image={result.image}
        alt={`No image of '${result.title}' was provided`}
      />
      <CardContent>
        <Typography variant="body2" align='right' sx={{ color: 'text.secondary', margin: 1, fontWeight: 'bold' }}>
          {`Dated: ${result.creationDate}`}
        </Typography>
        <Typography sx={{ marginBottom: 2, color: 'text.secondary' }}>
            {`Type: ${result.type}`}
          </Typography>
          <Typography sx={{ marginBottom: 2, color: 'text.secondary' }}>
          {result.onDisplay}
          </Typography>

      </CardContent>
      <CardActions disableSpacing>
      <IconButton onClick={() => handleFavourite(result)} aria-label="add to favorites">
            {toggledFavourites.some((item) => item.key === result.key) ? (
                    <FavoriteIcon />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
            </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography sx={{ color: 'text.secondary' }}>
          {result.description}
        </Typography>
        </CardContent>
      </Collapse>
    </Card>
    
  );
})}

            </Grid>
        ):
        <Loading/>
        }
        </>
      );
};

export default CommonArtCard;