import { useState, useEffect } from 'react';
import {
  Typography,
  Box,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
} from '@material-ui/core';
import axios from 'axios';

import { SearchBar } from '../../SearchBar';
import { getYouMightLikeMoviesUrl } from '../../api';

export const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [youMightLikeMovies, setYouMightLikeMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(getYouMightLikeMoviesUrl());

        setYouMightLikeMovies(data.Search);
      } catch (e) {
        setIsError(true);
        console.error('WOOPS: ', e);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []); // this will run only once after initial render

  console.log('Search Term: ', searchTerm);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something bad happened...</div>;
  }

  console.log('Movies: ', youMightLikeMovies);

  return (
    <Box ml={3} mt={5}>
      <Box mb={1}>
        <SearchBar value={searchTerm} onChange={handleChange} />
      </Box>
      <Typography variant="body1" component="h1" acolor="textPrimary" paragraph>
        YOU MIGHT LIKE
      </Typography>
      <Grid container spacing={3}>
        {youMightLikeMovies.map(({ Title, Poster, Year, Plot }) => (
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardHeader title={Title} />
              <img alt={Title} src={Poster} />
              <CardContent>
                <div>{Plot}</div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
