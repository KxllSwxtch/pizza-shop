import Button from '@material-ui/core/Button/Button';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PLACE_ORDER, PLACE_ORDER_LOADING, CLEAR_CART } from '@ActionTypes';

function PlaceOrder({ fieldsFilled }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handlePlaceOrder = () => {
    dispatch({ type: PLACE_ORDER_LOADING });
    setTimeout(() => {
      dispatch({ type: PLACE_ORDER });
      dispatch({ type: CLEAR_CART });
      history.push('/');
    }, 5000);
  };

  return (
    <Button
      variant="contained"
      color="primary"
      disabled={!fieldsFilled}
      onClick={handlePlaceOrder}
    >
      Place order
    </Button>
  );
}

export default PlaceOrder;
