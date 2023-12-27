import React from "react";
import { Col, Row } from "react-bootstrap";
import { TechSkills } from "../Data"


function Techstack() {
  return (

    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {
        TechSkills.map((Icon, index) => {
          return (
            <Col xs={4} md={2} className="tech-icons" key={index}>
              <Icon />
            </Col>
          )
        })
      }
    </Row>
  );
}

export default Techstack;
