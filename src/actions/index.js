export const CHECKED_TODO = "CHECKED_TODO";
export const checkedTodo = (text) => {
  return {
    type: "CHECKED_TODO",
    payload: text
  };
};
