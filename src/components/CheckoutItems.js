import React from 'react';
import Typography from '@material-ui/core/Typography/Typography';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import Divider from '@material-ui/core/Divider/Divider';
import CheckoutItem from './Checkoutitem';

const useStyles = makeStyles(
  (theme) => ({
    title: {
      fontWeight: 'bolder',
    },
    list: {
      backgroundColor: theme.palette.grey[300],
      width: '100%',
      textAlign: 'right',
      padding: 15,
      borderRadius: 3,
      marginTop: 10,
    },
  }),
  { name: 'CheckoutItems' },
);

function CheckoutItems() {
  const checkoutItems = useSelector((state) => state.shop.cartItems);
  const classes = useStyles();

  let total = 0;
  for (const item of checkoutItems) total += item.price * item.quantity;

  return (
    <React.Fragment>
      <Typography variant="h4" className={classes.title}>
        Items
      </Typography>
      <ul className={classes.list}>
        {checkoutItems.map((item, index) => (
          <CheckoutItem key={index} {...item} />
        ))}
      </ul>
      <Divider light variant="fullWidth" />
      <Typography variant="h5">Total: ${(total + 13).toFixed(2)}</Typography>
    </React.Fragment>
  );
}

export default CheckoutItems;
