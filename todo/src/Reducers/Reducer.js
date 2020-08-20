import TodoList from "../components/TodoList";

export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589,
  },
];
// I did it this way because it needed so it showed as a array of objects

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { item: action.payload, completed: false, id: Date.now() },
      ];

    case "COMPLETED_TODO":
      return state.map((list) => {
        if (list.id === action.payload) {
          return { ...list, completed: !list.completed };
        }
        return list;
      });

    case "CLEAR_TODO":
      return state.filter((list) => !list.completed);
    default:
      return state;
  }
};
