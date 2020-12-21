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
  streetName,
  setStreetName,
  houseNumber,
  setHouseNumber,
  postalCode,
  setPostalCode,
}) {
  const classes = useStyles();

  return (
    <form autoComplete="off" className={classes.root}>
      <TextField
        required
        className={classes.input}
        type="text"
        placeholder="Street name"
        value={streetName}
        onChange={(e) => setStreetName(e.target.value)}
      />
      <TextField
        required
        className={classes.input}
        type="text"
        placeholder="House number"
        value={houseNumber}
        onChange={(e) => setHouseNumber(e.target.value)}
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
