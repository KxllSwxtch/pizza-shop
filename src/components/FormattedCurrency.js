import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography/Typography';
import CurrencyConverter from 'react-currency-conv';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(
  () => ({
    root: {
      display: 'inline-block',
    },
    currency: {
      display: 'inline-block',
    },
  }),
  { name: 'FormattedCurrency' },
);

const FormattedCurrency = React.memo(({ value }) => {
  const currentCurrency = useSelector((state) => state.shop.currentCurrency);
  const classes = useStyles();

  let sign = '$';
  if (currentCurrency.match('CAD')) sign = '$';
  if (currentCurrency.match('RUB')) sign = '₽';
  if (currentCurrency.match('INR')) sign = '₹';

  return (
    <div className={classes.root}>
      {sign}
      <Typography component="span" className={classes.currency}>
        <CurrencyConverter from="USD" to={currentCurrency} value={value} />
      </Typography>
    </div>
  );
}, []);

export default FormattedCurrency;
