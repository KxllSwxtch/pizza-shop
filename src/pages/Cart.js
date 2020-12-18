import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import CartItems from '@Components/CartItems';
import CartSummary from '@Components/CartSummary';
import CartControls from '@Components/CartControls';

const useStyles = makeStyles(() => ({
  title: {
    marginTop: 20,
    fontWeight: 'bolder',
  },
}));

function Cart() {
  const classes = useStyles();
  const cartItems = useSelector((state) => state.shop.cartItems);

  return (
    <Container>
      {cartItems.length > 0 ? (
        <React.Fragment>
          <CartItems cartItems={cartItems} />
          <CartSummary />
          <CartControls />
        </React.Fragment>
      ) : (
        <Typography variant="h4" className={classes.title}>
          No items
        </Typography>
      )}
    </Container>
  );
}

export default Cart;
