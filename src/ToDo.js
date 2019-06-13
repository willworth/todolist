import React, { Component } from "react";
import "./ToDo.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class ToDo extends Component {
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
        <CSSTransition key="editing" timeout={500} classNames="form">
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </CSSTransition>
      );
    } else {
      result = (
        <CSSTransition key="normal" timeout={500} classNames="task-text">
          <li className="Todo-task" onClick={this.handleToggle}>
            {this.props.task}
          </li>
        </CSSTransition>
      );
    }
    return (
      <TransitionGroup
        className={this.props.completed ? "Todo completed" : "Todo"}
      >
        {result}
        <div className="Todo-buttons">
          <button onClick={this.toggleForm}>
            <i class="fas fa-pen" />
          </button>
          <button onClick={this.handleRemove}>
            <i class="fas fa-trash" />
          </button>
        </div>
      </TransitionGroup>
    );
  }
}
export default ToDo;
