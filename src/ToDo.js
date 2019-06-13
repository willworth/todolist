import React, { Component } from "react";
import "./ToDo.css";
export default class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleRemove() {
    this.props.removeToDo(this.props.id);
  }

  toggleForm() {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }
  handleUpdate(e) {
    e.preventDefault();
    this.props.updateToDo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleToggle(e) {
    this.props.toggleToDo(this.props.id);
  }

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleRemove}>X</button>
          <li
            className={this.props.completed ? "completed" : ""}
            onClick={this.handleToggle}
          >
            {this.props.task}
          </li>
        </div>
      );
    }
    return result;
  }
}
