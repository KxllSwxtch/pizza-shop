import Container from '@material-ui/core/Container/Container';
import Typography from '@material-ui/core/Typography/Typography';
import Delivery from '@Components/Delivery';
import CheckoutItems from '@Components/CheckoutItems';
import { makeStyles } from '@material-ui/core';

// Components of checkout page:
//  1. Delivery address
//    - We may need a state to check if the address is correct
//    - We may need a state to check if the address is being entered and enable place order button
//  2. A list of cart items
//  3. Final cost

const useStyles = makeStyles(
  () => ({
    title: { fontWeight: 'bold', marginBottom: 20, marginTop: 20 },
  }),
  { name: 'Checkout' },
);

function Checkout() {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h4" className={classes.title}>
        Checkout
      </Typography>
      <Delivery />
      <CheckoutItems />
    </Container>
  );
}

export default Checkout;
