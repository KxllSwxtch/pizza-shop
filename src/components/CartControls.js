import { Grid, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 40,
  },
  continueButton: {
    marginRight: 20,
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
  },
}));

// TODO: Check if the cart is not empty
//  if so then enable the Checkout button
//  else keep it disabled
function CartControls() {
  const classes = useStyles();

  return (
    <Grid container justify="flex-end" className={classes.root}>
      <Link to="/" className={classes.link}>
        <Button
          className={classes.continueButton}
          variant="outlined"
          color="secondary"
        >
          Continue Shopping
        </Button>
      </Link>
      <Button variant="contained" color="primary">
        <Link to="/checkout" className={classes.link}>
          Checkout
        </Link>
      </Button>
    </Grid>
  );
}

export default CartControls;
