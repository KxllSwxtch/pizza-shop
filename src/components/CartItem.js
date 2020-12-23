import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button/Button';
import Typography from '@material-ui/core/Typography/Typography';
import Tooltip from '@material-ui/core/Tooltip/Tooltip';
import TableCell from '@material-ui/core/TableCell/TableCell';
import TableRow from '@material-ui/core/TableRow/TableRow';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  DELETE_ITEM,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from '@ActionTypes';
import withAlert from '@Hocs/withAlert';

const useStyles = makeStyles(
  (theme) => ({
    deleteIcon: {
      cursor: 'pointer',
      '&:hover': {
        color: theme.palette.error.dark,
        transition: 'all 300ms ease-in-out',
      },
    },
    quantityRow: {
      display: 'flex',
      alignItems: 'center',
    },
    buttonLeft: {
      marginRight: 10,
    },
    buttonRight: {
      marginLeft: 10,
    },
    quantity: {},
  }),
  { name: 'CartItem' },
);

function CartItem({ name, price, quantity, index }) {
  const [currentQuantity, setQuantity] = React.useState(quantity);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleAmountChange = (e, type) => {
    setQuantity(e.target.value);
    if (type.match('inc'))
      dispatch({
        type: INCREASE_QUANTITY,
        itemIndex: index,
      });
    if (type.match('dec'))
      dispatch({
        type: DECREASE_QUANTITY,
        itemIndex: index,
      });
  };

  const handleDelete = () => dispatch({ type: DELETE_ITEM, itemID: index });

  return (
    <TableRow>
      <TableCell scope="row" className={classes.quantityRow}>
        <Button
          variant="text"
          className={classes.buttonLeft}
          onClick={(e) => handleAmountChange(e, 'inc')}
        >
          +
        </Button>
        <Typography className={classes.quantity} variant="body2">
          {currentQuantity}
        </Typography>
        <Button
          disabled={currentQuantity === 1}
          className={classes.buttonRight}
          variant="text"
          onClick={(e) => handleAmountChange(e, 'dec')}
        >
          -
        </Button>
      </TableCell>
      <TableCell scope="row">{name}</TableCell>
      <TableCell align="left">{(price * quantity).toFixed(2)}</TableCell>
      <TableCell align="right">
        <Tooltip title="Delete" placement="left">
          <DeleteIcon
            color="error"
            className={classes.deleteIcon}
            onClick={handleDelete}
          />
        </Tooltip>
      </TableCell>
    </TableRow>
  );
}

export default withAlert(CartItem);
