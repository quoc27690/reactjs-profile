import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./pages/About";
import Blog from "./pages/Blog";
import Game from "./pages/Game";
import Home from "./pages/Home";

import HTMLBlock from "./pages/Blog/HTMLBlock";
import Javascript from "./pages/Blog/Javascript";
import JavascriptQuestion from "./pages/Blog/JavascriptQuestion";
import TodoList from "./pages/Blog/TodoList";
import MoneyExchange from "./components/Blog/MoneyExchange";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/blog/money-exchange">
            <MoneyExchange />
          </Route>
          <Route path="/blog/todolist-by-react">
            <TodoList />
          </Route>
          <Route path="/blog/mot-so-bai-tap-hay-ve-javascript">
            <JavascriptQuestion />
          </Route>
          <Route path="/blog/Javascript">
            <Javascript />
          </Route>
          <Route path="/blog/HTML-Block">
            <HTMLBlock />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
