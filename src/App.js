import React, { Component } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";
class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };
// it will be passed to the input component via the props
  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };
// it will be passed to the input component via the props
  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    };

    const updatedItems = [...this.state.items, newItem];
    this.setState({  //useing setState to make shallow merge
      items: updatedItems,
      id: uuid(),
      item: "",
      editItem: false
    });
    // e.targe.value=""
    //console.log(updatedItems);
  };

// it will be passed to the TodoList component via the props

  clearList = () => {
    this.setState({
      items: []
    });
  };
// it will be passed to the TodoList component via the props

  handleDelete = id => {
    const filterdItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filterdItems
    });
  };
// it will be passed to the TodoList component via the props
  
  handleEdit = id => {
    const filterdItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filterdItems
    });
    const selectedItem = this.state.items.find(item => item.id === id);

    this.setState({
      items: filterdItems,
      item: selectedItem.title,
      editItem:true,
      id:id
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <div className="App">
              <h3 className="text-capitalize text-center"> To Do List App </h3>
              <TodoInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
              <TodoList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
