import React, { Component } from "react";
import Todo from "./Todo";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ task: "walk dog" }, { task: "buy milk" }]
    };
  }
  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo task={todo.task} />;
    });
    return (
      <div>
        <h1>To do list</h1>
        <ul>{todos}</ul>
      </div>
    );
  }
}
