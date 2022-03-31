import React from 'react';
import Head from 'next/head';
import useStyles from '../utils/styles';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';

const Layout = ({ children }) => {
  const date = new Date();
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>amba-store</title>
      </Head>
      <AppBar position='static' className={classes.navbar}>
        <Toolbar>
          <Typography>amba-store</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>
        {children}
      </Container>
      <footer className={classes.footer}>
        amba-store &copy; {date.getUTCFullYear()}. all rights reserved. 
      </footer>
    </div>
  );
}

export default Layout;