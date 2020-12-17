import { Container } from '@material-ui/core';
import { useSelector } from 'react-redux';
import CartItems from '@Components/CartItems';
import CartSummary from '@Components/CartSummary';

// 4. Delivery costs displayed
// 5. Continue shopping button
// 6. Checkout button

function Cart() {
  const cartItems = useSelector((state) => state.shop.cartItems);

  return (
    <Container>
      <CartItems cartItems={cartItems} />
      <CartSummary />
    </Container>
  );
}

export default Cart;
