import React from "react";
import { image } from "../data/data";

function About() {
  return <div id='about'>
    <h2>About Me</h2>
    <p> My name is Ian, a budding software developer from Nairobi,I embarked on my coding journey on February 26, 2024. Equipped with a newfound passion for technology,I rapidly gained proficiency in HTML, CSS, and JavaScript. Currently, I am fervently diving into the world of React, eager to expand my repertoire of skills and contribute to the ever-evolving landscape of web development. With this determination and enthusiasm, I am poised to make significant strides in my software development career.</p>
    <img src={image} alt="I made this"/>
  </div>;
}

export default About;
