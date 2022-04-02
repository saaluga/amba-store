import React from 'react';
import { useRouter } from 'next/router';
import  NextLink from 'next/link';
import {Link, Typography} from '@mui/material';
import useStyles from '../../utils/styles';
import data from '../../utils/data';
import Layout from '../../components/Layout';

const ProductScreen = () => {
  const classes = useStyles();
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find(a => a.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>
  }
  return (
    <Layout title={product.name}>
      <div className={classes.section}>
        <NextLink href='/' passHref>
          <Link>
            <Typography>Back To Product</Typography>
          </Link>
        </NextLink>
      </div>
    </Layout>
  );
}

export default ProductScreen;