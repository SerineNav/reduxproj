import { combineReducers } from "redux";
const initialState = {
  todos: []
};

const todoReducer = () => {
  return [
    { id: 1, text: "drink coffee" },
    { id: 2, text: "read book" },
    { id: 3, text: "coding" }
  ];
};

function checkedTodoReducer(state = initialState, action) {
  if (action.type === "CHECKED_TODO") {
    return action.payload;
    // {

    //   todos: [...state.todos, action.payload]
    // };
  }
  return state;
}

export default combineReducers({
  todos: todoReducer,
  checkedTodo: checkedTodoReducer
});
