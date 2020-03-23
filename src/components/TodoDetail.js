import React from "react";
import { connect } from "react-redux";

function TodoDetail({ todo }) {
  return (
    <div>
      <div>Todo Detail </div>
      {todo ? <p>My checked to do is: {todo.text}</p> : <p>Checked todo</p>}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { todo: state.checkedTodo };
};
export default connect(mapStateToProps)(TodoDetail);
