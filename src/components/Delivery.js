import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField/TextField';

const useStyles = makeStyles(
  () => ({
    root: {
      marginBottom: 40,
    },
    input: {
      display: 'block',
      marginBottom: 20,
    },
  }),
  { name: 'Delivery' },
);

function Delivery({
  streetAddress,
  setStreetAddress,
  postalCode,
  setPostalCode,
}) {
  const classes = useStyles();

  return (
    <form autoComplete="off" className={classes.root}>
      <TextField
        autoFocus
        required
        className={classes.input}
        type="text"
        placeholder="Shipping Address"
        value={streetAddress}
        onChange={(e) => setStreetAddress(e.target.value)}
      />
      <TextField
        required
        className={classes.input}
        type="text"
        placeholder="Postal Code"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
      />
    </form>
  );
}

export default Delivery;
