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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from 'react'
import { VAArtworkCollection, getOneVAArt } from '../../../api/api';
import Grid from '@mui/material/Grid2';

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
    const [isLoading, setIsLoading] = useState(true);

    //testing with one artwork
    useEffect(() => {
    VAArtworkCollection(terms).then((res)=> {
      const arr = []
            setResults(res.records);
            setIsLoading(false);
        });
    }, []);
    isLoading===false?console.log(results):console.log('no')
    isLoading===false?console.log(''):console.log('noimg')

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    return (
        <>
      {isLoading === false? (
        <Grid container>
          {results.map((result) => {
  console.log(result); // Keep your log if needed

  return ( // Use 'return' here
    <Card key={result.systemNumber} 
          sx={{ maxWidth: 345, m: 4, backgroundColor: '#ebe6e3' }}>
      <CardHeader
        avatar={
          <Avatar alt="V&A" src="../../../assets/V&Asymbol.jpg" aria-label="museumIcon" />
        }
        title={result._primaryTitle}
        subheader={`Made by: ${result._primaryMaker.name}`}
      />
      <CardMedia
        component="img"
        height="194"
        image={`https://framemark.vam.ac.uk/collections/${result._primaryImageId}/full/600,400/0/default.jpg`}
        alt={`No image of ${result._primaryTitle} was provided`}
      />
      <CardContent>
        <Typography variant="body2" align='right' sx={{ color: 'text.secondary', margin: 1, fontWeight: 'bold' }}>
          {`Dated: ${result.accessionNumber}`}
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          No description was provided for this piece.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
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
          <Typography sx={{ marginBottom: 2, color: 'text.secondary' }}>
            {`Type: ${result.objectType}`}
          </Typography>
          <Typography sx={{ marginBottom: 2, color: 'text.secondary' }}>
            {result._currentLocation.onDisplay ? 'This piece is currently being displayed in the V&A' : 'This piece is in storage'}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
})}

            </Grid>
        ):
        <p>nothing</p>
        }
        </>
      );
};

export default CommonArtCard;