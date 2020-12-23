import React from 'react';
import { makeStyles } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip/Tooltip';
import TextField from '@material-ui/core/TextField/TextField';
import TableCell from '@material-ui/core/TableCell/TableCell';
import TableRow from '@material-ui/core/TableRow/TableRow';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import { DELETE_ITEM } from '@ActionTypes';
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
  }),
  { name: 'CartItem' },
);

function CartItem({ id, name, price }) {
  const [currentAmount, setAmount] = React.useState(1);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };
  const handleDelete = () => dispatch({ type: DELETE_ITEM, itemID: id });

  return (
    <TableRow>
      <TableCell scope="row">
        <TextField
          defaultValue={currentAmount}
          type="number"
          onChange={handleAmountChange}
        />
      </TableCell>
      <TableCell scope="row">{name}</TableCell>
      <TableCell align="left">{price}</TableCell>
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
