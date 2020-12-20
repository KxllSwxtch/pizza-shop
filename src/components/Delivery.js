import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField/TextField';
import Button from '@material-ui/core/Button/Button';

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

function Delivery() {
  const classes = useStyles();

  return (
    <form autoComplete="off" className={classes.root}>
      <TextField
        required
        className={classes.input}
        type="text"
        placeholder="Street name"
      />
      <TextField
        required
        className={classes.input}
        type="text"
        placeholder="House number"
      />
      <Button variant="contained" color="primary">
        Place order
      </Button>
    </form>
  );
}

export default Delivery;
