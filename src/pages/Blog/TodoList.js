import React, { Component } from "react";

import empt from "../../images/empt.svg";

import Header from "../../components/Header";
import TodoItem from "./TodoItem";

import Slide from "react-reveal/Slide";

export default class HTMLBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      todoItems: [
        { title: "go swimming", isComplete: false },
        { title: "playing football", isComplete: false },
        { title: "go to work", isComplete: false },
        { title: "playing game", isComplete: true },
        { title: "playing tennis", isComplete: true },
      ],
    };
  }

  onClick = (item) => {
    return () => {
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          { ...item, isComplete: !item.isComplete },
          ...todoItems.slice(index + 1),
        ],
      });
    };
  };

  onCickX = (item) => {
    return () => {
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      todoItems.splice(index, 1);
      this.setState({
        todoItems: todoItems,
      });
    };
  };

  onChange = (event) => {
    let value = event.target.value;
    this.setState({
      newItem: value,
    });
  };
  onAdd = (newItem) => {
    return () => {
      // Đặt điều kiện để trống hoặc có space thì ko được
      if (newItem === "") {
        return;
      }
      newItem = newItem.trim();
      if (newItem === "") {
        return;
      }

      this.setState({
        newItem: "",
        todoItems: [
          { title: newItem, isComplete: false },
          ...this.state.todoItems,
        ],
      });
    };
  };

  onUncheck = () => {
    const { todoItems } = this.state;
    todoItems.map((item) => (item.isComplete = false));
    this.setState({
      todoItems: todoItems,
    });
  };

  render() {
    const { todoItems, newItem } = this.state;
    return (
      <div>
        <Header />
        <br />
        <Slide left big delay={1000}>
          <div className="container">
            <div className="p-3 bg-TodoList rounded shadow">
              <h4 className="text-white">DAILIST</h4>
              <br />
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add A New Item"
                  value={newItem}
                  onChange={this.onChange}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={this.onAdd(newItem)}
                  >
                    Add
                  </button>
                </div>
              </div>

              <div className="mt-3">
                <p className="text-left" style={{ marginBottom: 0 }}>
                  UPCOMING
                </p>
                {todoItems.length > 0 &&
                  todoItems
                    .filter((item) => !item.isComplete)
                    .map((item, index) => (
                      <div className="d-flex border-bottom" key={index}>
                        <TodoItem item={item} onClick={this.onClick(item)} />
                        <button
                          type="button"
                          className="close ml-auto"
                          onClick={this.onCickX(item)}
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                {todoItems.filter((item) => !item.isComplete).length === 0 && (
                  <div>
                    <img
                      src={empt}
                      style={{ width: 200, height: 200 }}
                      alt=""
                    ></img>
                  </div>
                )}
              </div>

              <div className="mt-3">
                <p className="text-left" style={{ marginBottom: 0 }}>
                  FINISHED
                </p>
                {todoItems.length > 0 &&
                  todoItems
                    .filter((item) => item.isComplete)
                    .map((item, index) => (
                      <div className="d-flex border-bottom" key={index}>
                        <TodoItem item={item} onClick={this.onClick(item)} />
                        <button
                          type="button"
                          className="close ml-auto"
                          onClick={this.onCickX(item)}
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                {todoItems.filter((item) => item.isComplete).length === 0 && (
                  <div>
                    <img
                      src={empt}
                      style={{ width: 200, height: 200 }}
                      alt=""
                    ></img>
                  </div>
                )}
              </div>

              <small className="d-block text-right mt-3">
                <button className="btn btn-light" onClick={this.onUncheck}>
                  All Uncheck
                </button>
              </small>
            </div>
          </div>
        </Slide>
        <br />
      </div>
    );
  }
}
