import { makeStyles, TableCell, TableRow } from '@material-ui/core';
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

function CartItem({ id, name, price, openAlert }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleDelete = () => dispatch({ type: DELETE_ITEM, itemID: id });

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="left">{price}</TableCell>
      <TableCell align="right">
        <DeleteIcon
          color="error"
          className={classes.deleteIcon}
          onClick={handleDelete}
        />
      </TableCell>
    </TableRow>
  );
}

export default withAlert(CartItem);
