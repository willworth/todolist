import React, { Component } from "react";
import ToDo from "./ToDo";
import NewToDoForm from "./NewToDoForm";

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDos: [{ task: "walk dog" }, { task: "buy milk" }]
    };
    this.create = this.create.bind(this);
  }
  create(newToDo) {
    this.setState({
      toDos: [...this.state.toDos, newToDo]
    });
  }
  render() {
    const toDos = this.state.toDos.map(toDo => {
      return <ToDo task={toDo.task} />;
    });
    return (
      <div>
        <h1>To do list</h1>
        <NewToDoForm createToDo={this.create} />
        <ul>{toDos}</ul>
      </div>
    );
  }
}
