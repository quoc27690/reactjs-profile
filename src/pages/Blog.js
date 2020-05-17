import React, { Component } from "react";

import Header from "../components/Header";

import facebook from "../images/facebook.svg";
import github from "../images/github.svg";
import gmail from "../images/gmail.svg";

import Zoom from "react-reveal/Zoom";

import { Link } from "react-router-dom";

export default class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 1,
          link: "/blog/HTML-Block",
          title: "HTML Block",
          date: "Oct 10 2019",
        },
        {
          id: 2,
          link: "/blog/JavaScript",
          title: "JavaScript thật sự là gì?",
          date: "Oct 10 2019",
        },
        {
          id: 3,
          link: "/blog/mot-so-bai-tap-hay-ve-javascript",
          title: "Một số bài tập hay về Javascript",
          date: "Oct 14 2019",
        },
        {
          id: 4,
          link: "/blog/todolist-by-react",
          title: "TodoList by React",
          date: "Oct 14 2019",
        },
      ],
    };
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Header />
        <Zoom delay={1000}>
          <div className="container text-center">
            <img
              src="https://res.cloudinary.com/depdygupn/image/upload/v1589533866/avatar_insta_yuvpvv.png"
              width="90"
              height="90"
              className="mt-2"
              alt=""
            />

            <div>
              <h5>ANH QUOC</h5>
              <p className="text-black-50">A Full Stack Web Developer</p>
            </div>

            <div>
              <a
                href="https://www.facebook.com/anhquoc276"
                target="blank"
                className="mr-3"
              >
                <img src={facebook} style={{ width: 20 }} alt="" />
              </a>
              <a
                href="https://github.com/quoc27690"
                target="blank"
                className="mr-3"
              >
                <img src={github} style={{ width: 20 }} alt="" />
              </a>
              <a
                href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=quoc27690@gmail.com"
                target="blank"
              >
                <img src={gmail} style={{ width: 20 }} alt="" />
              </a>
            </div>
            <hr />
          </div>
          <div className="container">
            {data
              .sort(function (a, b) {
                return b.id - a.id;
              })
              .map((item, index) => (
                <Link
                  to={item.link}
                  style={{ textDecoration: "none" }}
                  key={index}
                >
                  <div className="d-flex justify-content-left">
                    <p style={{ marginLeft: 200 }}>{item.title}</p>
                    <p className="ml-auto" style={{ marginRight: 200 }}>
                      {item.date}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </Zoom>
      </div>
    );
  }
}
