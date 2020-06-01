import React, { Component } from "react";
import "animate.css";

import Header from "../../components/Header";

import facebook from "../../images/facebook.svg";
import github from "../../images/github.svg";
import gmail from "../../images/gmail.svg";

import { Link } from "react-router-dom";

export default class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 1,
          slug: "html-block",
          title: "HTML Block",
          date: "Oct 10 2019",
        },
        {
          id: 2,
          slug: "javaScript",
          title: "JavaScript thật sự là gì?",
          date: "Oct 10 2019",
        },
        {
          id: 3,
          slug: "mot-so-bai-tap-hay-ve-javascript",
          title: "Một số bài tập hay về Javascript",
          date: "Oct 14 2019",
        },
        {
          id: 4,
          slug: "todolist-by-react",
          title: "TodoList by React",
          date: "Oct 14 2019",
        },
        {
          id: 5,
          slug: "money-exchange",
          title: "Money Exchange",
          date: "Nov 14 2019",
        },
        {
          id: 6,
          slug: "tutorial-how-to-deploy-a-production-react-app-to-heroku",
          title: "Tutorial: how to deploy a production React app to Heroku",
          date: "Jan 27 2020",
        },
      ],
    };
  }

  render() {
    const { data } = this.state;
    const { match } = this.props;
    var url = match.url;

    return (
      <div>
        <Header />

        <div className="animate__animated animate__zoomIn">
          <div className="container text-center ">
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
                  to={`${url}/${item.slug}`}
                  style={{ textDecoration: "none" }}
                  key={index}
                >
                  <div className="row">
                    <div className="col-8 text-left">
                      <p>{item.title}</p>
                    </div>
                    <div className="col-4 text-right">
                      <p>{item.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    );
  }
}
