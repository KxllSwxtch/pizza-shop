import { data } from '../../fakeData';
import {
  GET_PIZZA_DETAILS,
  ADD_TO_CART,
  DELETE_ITEM,
  PLACE_ORDER,
  PLACE_ORDER_LOADING,
  CLEAR_CART,
  SWITCH_CURRENCY,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CHANGE_SEARCH_VALUE,
} from '@ActionTypes';

const initialState = {
  pizzaList: data,
  pizza: null,
  cartItems: [],
  isLoading: false,
  currentCurrency: 'USD',
  searchValue: '',
};

function shopReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SEARCH_VALUE:
      const { searchValue } = action;
      return { ...state, searchValue };

    case DECREASE_QUANTITY:
      var { itemIndex } = action;
      var cartItems = [...state.cartItems];
      if (cartItems[itemIndex].quantity > 1) cartItems[itemIndex].quantity -= 1;
      return { ...state, cartItems };

    case INCREASE_QUANTITY:
      var { itemIndex } = action;
      var cartItems = [...state.cartItems];
      cartItems[itemIndex].quantity += 1;
      return { ...state, cartItems };

    case CLEAR_CART:
      return { ...state, cartItems: [] };

    case PLACE_ORDER_LOADING:
      return { ...state, isLoading: true };

    case PLACE_ORDER:
      return { ...state, isLoading: false };

    case SWITCH_CURRENCY:
      const { currentCurrency } = action;
      return { ...state, currentCurrency };

    case DELETE_ITEM:
      const { itemID } = action;
      cartItems = [...state.cartItems];
      cartItems.splice(itemID, 1);
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
