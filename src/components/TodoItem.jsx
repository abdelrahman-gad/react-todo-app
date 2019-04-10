import React, { Component } from "react";
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item   d-flex-justify-content-between my-2">
        <h6 width="80% " className="pull-left">
          {title}
        </h6>
        <div
          style={{ display: "block", float: "right", width: "15%" }}
          className="todo-icon pull-right"
        >
          <span className="text-success mx-2" onClick={handleEdit}>
            <i className="fas fa-pen" />
          </span>
          <span className="text-danger mx-2" onClick={handleDelete}>
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}

export default TodoItem;
