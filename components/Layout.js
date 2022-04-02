import React from 'react';

import Head from 'next/head';
import NextLink from 'next/link';

import useStyles from '../utils/styles';

import { 
  AppBar, 
  Container, 
  Toolbar, 
  Typography, 
  Link, 
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
} from '@mui/material';

const Layout = ({ title, description, children }) => {
  const theme = createMuiTheme({
    Typography: {
      h1: {
        fontSize:'1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize:'1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      body1: {
        fontWeight: 'normal',
      },
    },
    palette: {
      type: 'light',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
    },
  });

  const date = new Date();
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title ? `${title} - amba-store`:'amba-store'}</title>
        {description && <meta name='description' content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline /> 
        <AppBar position='static' className={classes.navbar}>
          <Toolbar>
            <NextLink href='/' passHref>
              <Link>
                <Typography className={classes.brand}>amba-store</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <NextLink href='/cart' passHref>
              <Link>
                <Typography>Cart</Typography>
              </Link>
            </NextLink>
            <NextLink href='/login' passHref>
              <Link>
                <Typography>Login</Typography>
              </Link>
            </NextLink>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          amba-store &copy; {date.getUTCFullYear()}. all rights reserved.
        </footer>
      </ThemeProvider>

    </div>
  );
}

export default Layout;