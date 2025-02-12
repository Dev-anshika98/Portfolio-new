import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/mypic.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            👨‍💻 Hi there! <span className="purple"> I'm </span> Anshika
            </h1>
            <p className="home-about-body">
            💡 A passionate programmer and creative thinker!
              <br />
             
             <p>Ever since I wrote my first line of code, I fell in love with the <span className="purple">  endless possibilities </span> of programming. It's been an incredible journey of <span className="purple"> learning, exploring, and building solutions</span>  that make a difference. 🚀</p>
              <br />
              🌟 What drives me?
              <br />
              I thrive on crafting innovative web technologies and products that solve <b className="purple">real-world problems.</b> 
              I enjoy transforming ideas 
              <i>
                <b className="purple">
                  {" "}
                  into functional, user-friendly solutions
                </b>
              </i>
              &nbsp; with clean and efficient code.
              <br />
              <br/>
              🌱 What I bring to the table:
              <br/>
              I’m not just about building websites or apps; I’m about <b className="purple">creating experiences </b>that leave a lasting impact. I'm always ready to turn <b className="purple"> challenges into opportunities.</b>
              <br/>
Let’s build something amazing together! ✨
             
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Dev-anshika98"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Dev_anshika98"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/anshika-gupta98"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/iam_astrid01/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
