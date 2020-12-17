import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
}));

function CartSummary() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6">
        <span className={classes.bold}>Total</span>: 100$
      </Typography>
      <Typography variant="h6">
        <span className={classes.bold}>Total with delivery</span>: 113$
      </Typography>
    </div>
  );
}

export default CartSummary;
