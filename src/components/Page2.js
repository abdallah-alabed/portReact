import React, { Component } from "react";
import "./Style2.css";

class Page2 extends Component {
  render() {
    return (
      <>
        <section id="sec-1">
          <div class="container">
            <h1 class="mainh1">Education</h1>
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
         </div> */}
            {/* </div> */}
            <div class="content"> 
            <div class="left"> 
            <div class="logo">
            <img src="https://m.eyeofriyadh.com/directory/images/2019/06/51aa54058833.jpg"></img>
            <h1>Full-Stack Developer</h1>
            </div>
            <p>2021</p>
            <p class="skills">Skills in: HTML, CSS, JS, ReactJS, NodeJS, NoSQL, MongoDB, Auth0</p>
            <p>Some of my Projects:</p>
          <p> * <a href="https://www.google.com" >project 1 </a>  </p>
            </div>
            <div class="right"> 
            <div class="logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/University_of_Jordan_Logo.svg/1616px-University_of_Jordan_Logo.svg.png"></img>
            <h1>Mechatronics Engineer</h1> 
            </div>
            <p>2015-2020</p>
            <p>2.9 GPA</p>
            <p>Graduation Project: PHEV Modeling </p>
            </div>
            </div>
            <p class="exp"> Experiences </p>
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
