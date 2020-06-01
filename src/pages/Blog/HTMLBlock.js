import React, { Component } from "react";
import "animate.css";

import Header from "../../components/Header";

export default class HTMLBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      block: [
        "address",
        "article",
        "aside",
        "blockquote",
        "canvas",
        "dd",
        "div",
        "dl",
        "dt",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1-h6",
        "header",
        "hr",
        "li",
        "main",
        "nav",
        "noscript",
        "ol",
        "p",
        "pre",
        "section",
        "table",
        "tfoot",
        "ul",
        "video",
      ],
      inline: [
        "a",
        "abbr",
        "acronym",
        "b",
        "bdo",
        "big",
        "br",
        "button",
        "cite",
        "code",
        "dfn",
        "em",
        "i",
        "img",
        "input",
        "kbd",
        "label",
        "map",
        "object",
        "output",
        "q",
        "samp",
        "script",
        "select",
        "small",
        "span",
        "strong",
        "sub",
        "sup",
        "textarea",
        "time",
        "tt",
        "var",
      ],
    };
  }

  render() {
    const { block, inline } = this.state;
    return (
      <div>
        <Header />

        <div className="container animate__animated animate__slideInLeft">
          <h3>HTML Block and Inline Elements</h3>
          <hr />
          <p>
            Every HTML element has a default display value, depending on what
            type of element it is. The two display values are: block and inline.
          </p>
          <hr />
          <h5>Block-level Elements</h5>
          <p>
            A block-level element always starts on a new line and takes up the
            full width available (stretches out to the left and right as far as
            it can).
          </p>
          <p>Block level elements in HTML:</p>
          <div>
            {block.map((item, index) => (
              <a href="/blog/HTML-Block" key={index}>
                <span className="tagnamecolor">
                  <span className="tagcolor">&lt;</span>
                  {item}
                  <span className="tagcolor">&gt;</span>
                </span>
              </a>
            ))}
          </div>
          <h5>Inline Elements</h5>
          <p>
            An inline element does not start on a new line and only takes up as
            much width as necessary.
          </p>
          <p>Inline elements in HTML:</p>
          <div>
            {inline.map((item, index) => (
              <a href="/blog/HTML-Block" key={index}>
                <span className="tagnamecolor">
                  <span className="tagcolor">&lt;</span>
                  {item}
                  <span className="tagcolor">&gt;</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
