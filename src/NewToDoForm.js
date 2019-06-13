import React, { Component } from "react";

export default class NewToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createToDo(this.state);
    this.setState({ task: "" });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="task">New To Do</label>
        <input
          type="text"
          id="task"
          name="task"
          placeholder="schedule non-urgent essentials"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Add task</button>
      </form>
    );
  }
}
