import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weather from "../../Assets/Projects/weather.png";
import Gemini from "../../Assets/Projects/gemini.png";
import eduar from "../../Assets/Projects/EduQuestar.png";
import voyage from "../../Assets/Projects/Voyage.png";
import SkinVeda from "../../Assets/Projects/SkinVeda.png"
import editor from "../../Assets/Projects/editor.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SkinVeda}
              isBlog={false}
              title="SkinVeda "
              description="An innovative app that leverages AI to assess skin conditions through image uploads and provides personalized home remedies and Ayurvedic solutions for issues like acne, dryness, and pigmentation. Features include a chatbot for tailored interactions, holistic wellness tips like yoga and hydration reminders, a progress tracker for monitoring improvements, and an educational hub for skincare insights. The app promotes natural, accessible solutions for comprehensive skin health."
              ghLink="https://github.com/Dev-anshika98/SkinVeda"
              demoLink="https://hack-cbs-bopn.vercel.app/"
            />
          </Col>
        
         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eduar}
              isBlog={false}
              title="EduQuestAR"
              description="Leading a pioneering effort, I introduced a cutting-edge AR learning platform tailored for children. Seamlessly blending augmented reality, we transformed the educational journey for 40% of junior students. In tandem, I directed the creation of a compelling promotional website, resulting in a 20% boost in curiosity and creativity. Through dynamic leadership, I drove a 30% rise in user engagement and retention, propelling a 25% acceleration in learning. This marks a significant stride in educational innovation"
              ghLink="https://github.com/Dev-anshika98/EduQuestAR"
              demoLink="https://edu-quest-ar-7ic8.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Gemini}
              isBlog={false}
              title="Gemini"
              description="At the forefront of content discovery, I led the development of a Gemini AI replica, harnessing React.js, JavaScript, Vite, and CSS. This groundbreaking project seamlessly integrates with the Google Gemini API, offering tailored recommendations, image recognition, and content creation. Touching the lives of over 330.9 million users, including content creators, consumers, and businesses, it signifies a monumental leap in content discovery technology. As the visionary behind the Gemini clone, I've been instrumental in shaping the landscape of digital content exploration for the future."
              ghLink="https://github.com/Dev-anshika98/Gemini"
              demoLink="https://gemini-ecru-xi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Python Code-Editor"
              description="This project is a Python Code Editor built using the Tkinter library for the graphical user interface (GUI). It allows users to write, save, open, and run Python scripts within the application. The editor also provides customizable settings for appearance and user input handling."
              ghLink="https://github.com/Dev-anshika98/Python-CodeEditor"
              // demoLink="https://gemini-ecru-xi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={voyage}
              isBlog={false}
              title="Voyage: A Travelling Site "
              description="I developed a pioneering website to address monument and museum ticketing challenges, effectively curbing payment fraud and safeguarding 27% of Indians. This included engineering a standardized booking platform, ensuring real-time availability, and reducing identity theft during online bookings, benefiting 36% of users. Additionally, I forged strategic alliances with premier tourist spots, museums, and attractions, enriching overall visitor experiences"
              ghLink="https://github.com/Dev-anshika98/Voyage-A-travelling-Site"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="A Weather App"
              description="I started and led the creation of the React Weather App, using React.js and connecting with a weather API for real-time global weather updates. I designed a user-friendly interface, making it easy for users to access current information on temperature, humidity, and wind speed for various locations. The app includes a range of weather metrics, giving users detailed insights into temperature, humidity, and wind speed."
              ghLink="https://github.com/Dev-anshika98/Weather-App"
              demoLink="https://dev-anshika-weather-app.netlify.app/"
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
