import Button from '@material-ui/core/Button/Button';

function PlaceOrder({ fieldsFilled }) {
  return (
    <Button variant="contained" color="primary" disabled={!fieldsFilled}>
      Place order
    </Button>
  );
}

export default PlaceOrder;
