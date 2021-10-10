import React, { Component } from "react";
import "./Style2.css";

class Page2 extends Component {
  render() {
    return (
      <>
        <section id="sec-1">
          <div class="container">
            <h1>New Portfolio Designs Testing</h1>
            <div class="perspective-text">
              <div class="perspective-line">
                {/* <p>Hello</p> */}
                {/* <p> Lets Go</p> */}
              </div>
              <div class="perspective-line">
                <p></p>
                <p>Explore Me</p>
              </div>
              {/* <div class="perspective-line">
          <p>Junior Web Developer</p>
          <p>Let's Get Started</p>
         </div> */}
            </div>
            <a href="#sec-2">
              <div class="scroll-down"></div>
            </a>
          </div>
        </section>
        <section id="sec-2">
          <div class="container">
            <h1>This is Sec 2</h1>
            <a href="#sec-1">
              <div class="scroll-up"></div>
            </a>
          </div>
        </section>
      </>
    );
  }
}

export default Page2;
