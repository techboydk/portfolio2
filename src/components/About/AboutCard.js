import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { personalInfo } from "../Data"

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">{personalInfo.name} </span>
            from <span className="purple"> {personalInfo.address}.</span>
            <br />
            I am currently employed as a <span className="purple">{personalInfo.currentJob.role}</span> at <span className="purple">{personalInfo.currentJob.company}</span>.
            <br />
            I have completed {personalInfo.education.degree} in {personalInfo.education.department} at {personalInfo.education.college}.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            {
              personalInfo.hobbys.map((hobby, index) => {
                return <li className="about-activity" key={index}>
                  <ImPointRight /> {hobby}
                </li>
              })
            }
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">{personalInfo.name.split(' ')[0]}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
