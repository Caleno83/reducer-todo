export const initialState = {
  item: "Learn about reducers",
  completed: false,
  id: 3892987589,
};

export const Reducer = (state, action) => {
    switch (action.type) {
      case ADD_TODO:
        return state;
      case COMPLETED_TODO:
        return state;
        case CLEAR_TODO:
            return state;
      default:
        return state; // do nothing, just return previous state unchanged
    }
  };