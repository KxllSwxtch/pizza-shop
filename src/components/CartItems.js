import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CartItem from './CartItem';

const useStyles = makeStyles({
  root: {
    marginTop: 50,
    marginBottom: 20,
  },
  table: {
    minWidth: 650,
  },
});

function CartItems({ cartItems }) {
  const classes = useStyles();

  return (
    <TableContainer className={classes.root} component={Paper} elevation={4}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((row) => (
            <CartItem key={row.id} {...row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CartItems;
