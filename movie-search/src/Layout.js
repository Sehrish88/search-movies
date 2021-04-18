import React from 'react';
import { Typography, AppBar, Toolbar, Container } from '@material-ui/core';
import MovieIcon from '@material-ui/icons/Movie';
export const Layout = ({ children }) => {
  return (
    <>
      <AppBar position="relative">
        <Container maxWidth="md">
          <Toolbar>
            <MovieIcon fontSize="large" />
            <Typography variant="h5">Search Movies</Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <Container maxWidth="md">{children}</Container>
      </main>
    </>
  );
};
