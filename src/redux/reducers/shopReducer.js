import { data } from '../../fakeData';
import { GET_PIZZA_DETAILS, ADD_TO_CART, DELETE_ITEM } from '@ActionTypes';

const initialState = {
  pizzaList: data,
  pizza: null,
  cartItems: [],
};

function shopReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_ITEM:
      const cartItems = [...state.cartItems].filter(
        (item) => item.id !== action.itemID,
      );
      return { ...state, cartItems };

    case ADD_TO_CART:
      return { ...state, cartItems: [...state.cartItems, action.cartItem] };

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
