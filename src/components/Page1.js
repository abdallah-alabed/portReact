import React, { Component } from "react";
import "./Style.css";

class Page1 extends Component {
  render() {
    return (
      <div class="container">
        <div class="text-box">
          <p>I'm</p>
          <h1>Abdallah</h1>
          <h3>Junior Web-Developer</h3>
        </div>
        <div class="row">
          <a href="">Explore My Portfolio &#x2192;</a>
          <a href="">Connect With Me &#x2192;</a>
        </div>
        <div class="social-icons">
          <a href="https://github.com/abdallah-alabed">
            <img
              src="./components/1221583_github_logo_media_social_icon.png"
              alt=""
            />
          </a>
          <a href="https://www.linkedin.com/in/abdallah-alabed-a587231b5/">
            <img
              src="./components/734383_in_linked_media_online_social_icon.png"
              alt=""
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Page1;
