import React, { Component } from "react";

class InputToDo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Add a To-Do Item..."
          onChange={this.onChange}
          value={this.state.title}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default InputToDo;
