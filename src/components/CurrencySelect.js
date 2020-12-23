import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormControl from '@material-ui/core/FormControl/FormControl';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import Select from '@material-ui/core/Select/Select';
import { makeStyles } from '@material-ui/core';
import { SWITCH_CURRENCY } from '@ActionTypes';

const useStyles = makeStyles(
  (theme) => ({
    root: {},
    menuItem: {
      '& .MuiSelect-nativeInput': {
        color: theme.palette.primary.contrastText,
      },
    },
  }),
  { name: 'CurrencySelect' },
);

function CurrencySelect() {
  const dispatch = useDispatch();
  const currentCurrency = useSelector((state) => state.shop.currentCurrency);
  const classes = useStyles();

  const handleCurrencyChange = (e) =>
    dispatch({ type: SWITCH_CURRENCY, currentCurrency: e.target.value });

  return (
    <FormControl className={classes.root}>
      <Select value={currentCurrency} onChange={handleCurrencyChange}>
        <MenuItem className={classes.menuItem} value="USD">
          USD
        </MenuItem>
        <MenuItem className={classes.menuItem} value="RUB">
          RUB
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default CurrencySelect;
