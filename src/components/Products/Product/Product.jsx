import React from 'react'
import { Card, CardMedia, Cardcontent, CardActions, Typography, IconBotton, CardContent } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';


const Product = ({ product }) => {
  const classes = useStyles();
  

  return (
    <div>
        <Card className={classes.root}>
            <CardMedia className={classes.CardMedia} image='' title={Product.name} />
            <CardContent>
                <div className={calsses.cardContent}>
                  <Tipography variant="h5" gutterBottom>
                      {Product.name}
                  </Tipography>
                  <Tipography variant="h5" gutterBottom>
                      {Product.price}
                  </Tipography>

                </div>
                <Typography variant="h2" color="tectSecondary">{product.descriptions}</Typography>
            </CardContent>
            <CardActions>
              <IconButton arial-label='Agragar al carrito'>
                <AddShoppingCart/>
              </IconButton>

            </CardActions>

        </Card>

    </div>
  )
}

export default Product