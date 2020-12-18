import { makeStyles, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: 20,
    textAlign: 'right',
  },
  bold: {
    fontWeight: 'bold',
  },
}));

function CartSummary() {
  const classes = useStyles();
  const cartItems = useSelector((state) => state.shop.cartItems);

  let total = 0;
  cartItems.map((item) => (total += item.price));

  return (
    <div className={classes.root}>
      <Typography variant="h6">
        <span className={classes.bold}>Total</span>: ${total}
      </Typography>
      <Typography variant="h6">
        <span className={classes.bold}>Total (with delivery)</span>: $
        {total + 13}
      </Typography>
    </div>
  );
}

export default CartSummary;
