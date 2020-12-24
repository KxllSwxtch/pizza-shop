import { makeStyles, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import FormattedCurrency from './FormattedCurrency';

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
  cartItems.map((item) => (total += item.price * item.quantity));

  return (
    <div className={classes.root}>
      <Typography variant="h6">
        <Typography component="span" className={classes.bold}>
          Total
        </Typography>
        :{' '}
        <Typography component="span">
          <FormattedCurrency value={total} />
        </Typography>
      </Typography>
      <Typography variant="h6">
        <Typography component="span" className={classes.bold}>
          Total (with delivery)
        </Typography>
        :{' '}
        <Typography component="span">
          <FormattedCurrency value={total + 13} />
        </Typography>
      </Typography>
    </div>
  );
}

export default CartSummary;
