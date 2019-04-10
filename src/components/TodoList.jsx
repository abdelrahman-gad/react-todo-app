import React, { Component } from "react";
import TodoItem from "./TodoItem";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center"> ToDo list </h3>
        {items.map(item => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}

        <button
          type="button"
          onClick={clearList}
          className="btn btn-block btn-danger mt-5"
        >
          Clear All List Items
        </button>
      </ul>
    );
  }
}

export default TodoList;
