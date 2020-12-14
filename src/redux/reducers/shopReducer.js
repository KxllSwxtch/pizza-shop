import { data } from "../../fakeData";

const initialState = {
  pizzaList: data,
};

function shopReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default shopReducer;
