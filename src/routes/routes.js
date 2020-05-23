import React from "react";

import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Game from "../pages/Game";
import Home from "../pages/Home";
import NotFound from "../components/NotFound";

import HTMLBlock from "../pages/Blog/HTMLBlock";
import Javascript from "../pages/Blog/Javascript";
import JavascriptQuestion from "../pages/Blog/JavascriptQuestion";
import TodoList from "../pages/Blog/TodoList";
import MoneyExchange from "../pages/Blog/MoneyExchange";

const routes = [
  { path: "/", exact: true, main: () => <Home /> },
  { path: "/blog", exact: true, main: ({ match }) => <Blog match={match} /> }, // Mục đích truyền match để lấy match.url = '/blog'
  { path: "/about", exact: true, main: () => <About /> },
  { path: "/game", exact: true, main: () => <Game /> },
  { path: "/blog/money-exchange", exact: true, main: () => <MoneyExchange /> },
  { path: "/blog/todolist-by-react", exact: true, main: () => <TodoList /> },
  {
    path: "/blog/mot-so-bai-tap-hay-ve-javascript",
    exact: true,
    main: () => <JavascriptQuestion />,
  },
  { path: "/blog/javascript", exact: true, main: () => <Javascript /> },
  { path: "/blog/html-block", exact: true, main: () => <HTMLBlock /> },
  { path: "*", exact: true, main: () => <NotFound /> },
];
export default routes;
