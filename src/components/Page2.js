import React, { Component } from "react";
import "./Style2.css";

class Page2 extends Component {
  render() {
    return (
      <>
        <section id="sec-1">
          <div class="container">
            {/* <h1 class="mainh1">Education</h1> */}
            {/* <div class="perspective-text">
              <div class="perspective-line"> */}
                {/* <p>Hello</p> */}
                {/* <p> Lets Go</p> */}
              {/* </div>
              <div class="perspective-line">
                <p></p>
                <p>Experiences</p>
              </div> */}
              {/* <div class="perspective-line">
          <p>Junior Web Developer</p>
          <p>Let's Get Started</p>
         </div> 
            </div>*/}
            <div class="content"> 
            <div class="row"> 
        <div class="col"> 
        <h1> Education </h1>
        <p>QWERTYUI</p>
        </div>
        <div class="card">
          <h5> west desert</h5>
          <p> loremipsum </p>
        </div>
        <div class="card">
          <h5> west desert</h5>
          <p> loremipsum </p>
        </div>
        </div>
            </div>
            <p class="exp"> Experiences </p>
            <a href="#sec-2">
              <div class="scroll-down"></div>
            </a>
          </div>
        </section>
        {/* <section id="sec-2">
          <div class="container">
            <h1>This is Sec 2</h1>
            <a href="#sec-1">
              <div class="scroll-up"></div>
            </a>
          </div>
        </section> */}
      </>
    );
  }
}

export default Page2;
