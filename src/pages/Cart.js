import { Container } from '@material-ui/core';
import { useSelector } from 'react-redux';
import CartItems from '@Components/CartItems';
import CartSummary from '@Components/CartSummary';
import CartControls from '@Components/CartControls';

function Cart() {
  const cartItems = useSelector((state) => state.shop.cartItems);

  return (
    <Container>
      <CartItems cartItems={cartItems} />
      <CartSummary />
      <CartControls />
    </Container>
  );
}

export default Cart;
