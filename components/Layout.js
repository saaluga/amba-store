import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import useStyles from '../utils/styles';
import { AppBar, Container, Toolbar, Typography, Link } from '@mui/material';

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
          <NextLink href='/' passHref>
            <Link>
              <Typography className={classes.brand}>amba-store</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <NextLink href='/cart' passHref>
            <Link>Cart</Link>
          </NextLink>
          <NextLink href='/login' passHref>
            <Link>Login</Link>
          </NextLink>
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