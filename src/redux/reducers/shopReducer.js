import { data } from "../../fakeData";
import { GET_PIZZA_DETAILS } from "@ActionTypes";

const initialState = {
  pizzaList: data,
  pizza: null,
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
