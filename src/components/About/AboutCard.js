import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            👋 Hi Everyone! 
            <br />
            I am <span className="purple">Anshika</span> from <span className="purple">India.</span>
            <br />
            A passionate Web Developer with a knack for crafting beautiful, user-friendly interfaces and a deep love for ReactJS. My journey in tech has been a blend of creativity, problem-solving, and constant learning.
            <br />
            <br />
            Oh, and here's the kicker: I thrive in problem-solving, whether it's in a hackathon or a project sprint.
            <br />
            Oh, and did I mention? I love to participate in hackathons and am also a proud winner of the prestigious <span className="purple">INNOTECH 2023</span> tech fest.
            <br />
            Beyond the confines of coding, I'm also a community builder, having organized 5+ notable events during my college journey, including <span className="purple">FOSSCof'23</span>, <span className="purple">Web3Sangam</span>, <span className="purple">Say Hello to Linux</span>, and <span className="purple">DevSpirit: A React Bootcamp</span>.
            <br />
            <br />
            <p style={{ textAlign: "justify" }}>
            Apart from development, I also have strong programming skills:
            <br />
            - Solved <span className="purple">300+</span> problems on different coding platforms.
            <br />
            - Secured <span className="purple">Rank 2</span> in a college-level coding contest.
            <br />
            - Earned certifications in <span className="purple">AWS Cloud Foundation</span> and <span className="purple">Postman Student Expert</span>.
          </p>
            Apart from coding, here are some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Video Editing
            </li>
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
