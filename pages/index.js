import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@mui/material';
import NextLink from 'next/link';
import Layout from '../components/Layout';
import data from '../utils/data';

const Home = () => {
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={2}>
          {data.products.map((product) => (
            <Grid item md={2} key={product.name}>
              <Card>
                <NextLink href={`/product/${product.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      image={product.image}
                      title={product.name}
                    ></CardMedia>
                    <CardContent>
                      <Typography>{product.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
                  <CardActions>
                    <Typography>${product.price}</Typography>
                    <Button size='small'>add to cart</Button>
                  </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
};

export default Home;
