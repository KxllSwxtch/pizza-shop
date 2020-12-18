import { TableCell, TableRow } from '@material-ui/core';

function CartItem({ name, quantity, price, size }) {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="left">{size}</TableCell>
      <TableCell align="left">{price}</TableCell>
      <TableCell align="right">{quantity}</TableCell>
    </TableRow>
  );
}

export default CartItem;
