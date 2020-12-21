import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography/Typography';

const useStyles = makeStyles(
  () => ({
    root: {
      marginBottom: 20,
    },
  }),
  { name: 'CheckoutItem' },
);

function CheckoutItem({ name, price }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body1">{name}</Typography>
      <Typography variant="body2">{price}</Typography>
    </div>
  );
}

export default CheckoutItem;
