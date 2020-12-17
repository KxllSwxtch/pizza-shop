import { data } from '../../fakeData';
import { GET_PIZZA_DETAILS } from '@ActionTypes';

const initialState = {
  pizzaList: data,
  pizza: null,
  cartItems: [
    { id: 1, name: 'Ortolana', quantity: 1, size: 'sm', price: 8.99 },
    { id: 2, name: 'Margherita', quantity: 2, size: 'md', price: 12.99 },
  ],
};

function shopReducer(state = initialState, action) {
  switch (action.type) {
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
