import { data } from '../../fakeData';
import { GET_PIZZA_DETAILS, ADD_TO_CART } from '@ActionTypes';

const initialState = {
  pizzaList: data,
  pizza: null,
  cartItems: [],
};

function shopReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const cartItems = [...state.cartItems, action.cartItem];
      return { ...state, cartItems };

    case GET_PIZZA_DETAILS:
      const pizza = [...state.pizzaList].find(
        (item) => item.id === action.pizzaID,
      );
      return { ...state, pizza };

    default:
      return state;
  }
}

export default shopReducer;
