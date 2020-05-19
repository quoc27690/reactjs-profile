import React, { Component } from "react";

import classNames from "classnames";

import checkmark from "../../images/checkmark.svg";
import checkmarkdone from "../../images/checkmarkdone.svg";

export default class TodoItem extends Component {
  render() {
    const { item, onClick } = this.props;
    let url = checkmark;
    if (item.isComplete) {
      url = checkmarkdone;
    }
    return (
      <div
        onClick={onClick}
        className={classNames("TodoItem", {
          "TodoItem-complete": item.isComplete,
        })}
        style={{ paddingTop: 10, paddingBottom: 10, cursor: "pointer" }}
      >
        <img src={url} style={{ width: 20 }} alt="" className="mr-2" />
        {item.title}
      </div>
    );
  }
}
