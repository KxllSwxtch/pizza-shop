import React from 'react';
import Container from '@material-ui/core/Container/Container';
import Typography from '@material-ui/core/Typography/Typography';
import Delivery from '@Components/Delivery';
import CheckoutItems from '@Components/CheckoutItems';
import PlaceOrder from '@Components/PlaceOrder';
import { Grid, makeStyles } from '@material-ui/core';

// TODO: Add form validation

const useStyles = makeStyles(
  () => ({
    title: { fontWeight: 'bold', marginBottom: 20, marginTop: 20 },
    gridItem: {
      padding: 10,
    },
  }),
  { name: 'Checkout' },
);

function Checkout() {
  const [streetName, setStreetName] = React.useState('');
  const [houseNumber, setHouseNumber] = React.useState('');
  const [postalCode, setPostalCode] = React.useState('');

  const classes = useStyles();
  const fieldsFilled = streetName && houseNumber && postalCode;

  return (
    <Container>
      <Grid container justify="center">
        <Grid item className={classes.gridItem} md={6}>
          <Typography variant="h4" className={classes.title}>
            Checkout
          </Typography>
          <Delivery
            streetName={streetName}
            setStreetName={setStreetName}
            houseNumber={houseNumber}
            setHouseNumber={setHouseNumber}
            postalCode={postalCode}
            setPostalCode={setPostalCode}
          />
          <PlaceOrder fieldsFilled={fieldsFilled} />
        </Grid>

        <Grid
          container
          item
          md={6}
          alignItems="flex-end"
          direction="column"
          className={classes.gridItem}
        >
          <CheckoutItems />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Checkout;
