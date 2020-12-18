import { TableCell, TableRow } from '@material-ui/core';

function CartItem({ name, price }) {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="left">{price}</TableCell>
    </TableRow>
  );
}

export default CartItem;
