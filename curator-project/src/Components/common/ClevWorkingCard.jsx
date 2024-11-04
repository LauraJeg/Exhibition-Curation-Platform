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
import { getOneClevArt, getOneVAArt } from '../../../api/api';
import { parsingClevData , parsingVAData} from '../../Utils/api_util';
import Loading from './Loading';

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

    


const ClevWorkingCard = () => {
    const [results, setResults] = useState();
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
      }
    //testing with one artwork
    useEffect(() => {
 
    getOneVAArt('O205446').then((res)=> {
            setResults(parsingVAData(res));
            setIsLoading(false);
        });
    }, []);
    isLoading===false?console.log(results):console.log('no')

    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
      const storedData = localStorage.getItem("artworks");
      console.log(storedData)
      return (
          <>
  
          {isLoading === false? (
          <Card key = {results.key} 
              sx={{ maxWidth: 345 , m:4, backgroundcolor:'primary',
                  backgroundColor: '#ebe6e3'}}>
          <CardHeader
            avatar={
              <Avatar alt="V&A" src={results.avatar} aria-label="museumIcon"/>
            }
            title={results.title}
            subheader={`Made by: Unknown`}
            />
            <CardMedia
              component="img"
              height="194"
              image={results.image}
              alt="Paella dish"
            />
                      <CardContent>
            <Typography variant="body2" align='right' sx={{ color: 'text.secondary' , margin: 1, fontWeight:'bold'}}>
            {`Dated: ${results.creationDate}`}
            </Typography>
            <Typography sx={{ marginBottom: 2, color: 'text.secondary'  }}>
                 {`Type: ${results.type}`}
            </Typography>
              <Typography sx={{ marginBottom: 2 , color: 'text.secondary' }}>
                {results.onDisplay}
              </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton onClick={() => handleFavourite(results)} aria-label="add to favorites">
            {toggledFavourites.some((item) => item.key === results.key) ? (
                    <FavoriteIcon />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
            </IconButton>
{/* expand */}
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>

          {/* Description */}
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
            <Typography sx={{ color: 'text.secondary' }}>
              {results.description}
            </Typography>
            </CardContent>
          </Collapse>
        </Card>
        ):
        <Loading/>
        }
        </>
      );

};

export default ClevWorkingCard;