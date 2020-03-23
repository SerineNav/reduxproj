import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, Button } from "react-bootstrap";
import { checkedTodo } from "./actions/index";
import React, { Component } from "react";
import TodoDetail from "./components/TodoDetail";

class App extends Component {
  renderList() {
    return this.props.todos.map((todo) => {
      return (
        <div
          key={todo.id}
          style={{
            width: "50rem",
            height: "3rem",
            margin: "5px"
          }}
        >
          {todo.text}{" "}
          <Button
            onClick={() => {
              console.log("checked todo");
              this.props.checkedTodo(todo);
            }}
            style={{ display: "inline-right" }}
            variant="outline-info"
          >
            Checked
          </Button>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        TO do list:
        <div>{this.renderList()}</div>
        <div>
          <TodoDetail />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { todos: state.todos };
};
export default connect(mapStateToProps, { checkedTodo })(App);
