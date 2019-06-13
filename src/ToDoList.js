import React, { Component } from "react";
import ToDo from "./ToDo";
import NewToDoForm from "./NewToDoForm";

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDos: []
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }
  create(newToDo) {
    this.setState({
      toDos: [...this.state.toDos, newToDo]
    });
  }
  remove(id) {
    this.setState({
      toDos: this.state.toDos.filter(t => t.id !== id)
    });
  }
  update(id, updatedTask) {
    const updatedToDos = this.state.toDos.map(toDo => {
      if (toDo.id === id) {
        return { ...toDo, task: updatedTask };
      } else {
        return toDo;
      }
    });
    this.setState({
      toDos: updatedToDos
    });
  }
  toggleCompletion(id) {
    const updatedToDos = this.state.toDos.map(toDo => {
      if (toDo.id === id) {
        return { ...toDo, completed: !toDo.completed };
      } else {
        return toDo;
      }
    });
    this.setState({
      toDos: updatedToDos
    });
  }
  render() {
    const toDos = this.state.toDos.map(toDo => {
      return (
        <ToDo
          key={toDo.id}
          id={toDo.id}
          task={toDo.task}
          removeToDo={this.remove}
          updateToDo={this.update}
          completed={toDo.completed}
          toggleToDo={this.toggleCompletion}
        />
      );
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
