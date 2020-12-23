import React from 'react';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container/Container';
import Typography from '@material-ui/core/Typography/Typography';
import Loader from '@Components/Loader';
import Delivery from '@Components/Delivery';
import CheckoutItems from '@Components/CheckoutItems';
import PlaceOrder from '@Components/PlaceOrder';
import Portal from '@Components/Portal';
import { Grid, makeStyles } from '@material-ui/core';

// TODO: Add form validation

const useStyles = makeStyles(
  () => ({
    title: { fontWeight: 'bold', marginBottom: 20, marginTop: 20 },
    gridItem: {
      padding: 10,
    },
    loaderRoot: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loaderBackground: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      background: '#000000',
      opacity: 0.5,
    },
  }),
  { name: 'Checkout' },
);

function Checkout() {
  const isLoading = useSelector((state) => state.shop.isLoading);

  const [streetAddress, setStreetAddress] = React.useState('');
  const [postalCode, setPostalCode] = React.useState('');

  const classes = useStyles();
  const fieldsFilled = streetAddress && postalCode;

  return (
    <Container>
      <Grid container justify="center">
        <Grid item className={classes.gridItem} md={4} sm={4}>
          <Typography variant="h4" className={classes.title}>
            Checkout
          </Typography>
          <Delivery
            streetName={streetAddress}
            setStreetAddress={setStreetAddress}
            postalCode={postalCode}
            setPostalCode={setPostalCode}
          />
          <PlaceOrder fieldsFilled={fieldsFilled} />
        </Grid>

        <Grid
          container
          item
          md={8}
          sm={8}
          alignItems="flex-end"
          direction="column"
          className={classes.gridItem}
        >
          <CheckoutItems />
        </Grid>
      </Grid>

      {isLoading && (
        <Portal>
          <div className={classes.loaderRoot}>
            <div className={classes.loaderBackground} />
            <Loader />
          </div>
        </Portal>
      )}
    </Container>
  );
}

export default Checkout;
