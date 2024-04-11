import NavbarComp from "../components/NavbarComp";
import "./MainPage.css";
import HeroImage from "../assets/img/heroImg.png";
import { portfolios } from "../components/dataList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import AboutUs from "../components/AboutUs";
import { motion } from "framer-motion";
import LinkedinIcon from "../assets/img/linkedinIcon.png";
import InstagramIcon from "../assets/img/instagramIcon.png";
import { TypeAnimation } from "react-type-animation";
import cv from "../assets/file/cv_MelkiJonathanAndara.pdf";
export default function MainPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (firstName === "" || lastName === "" || email === "" || comment === "") {
      Swal.fire("All input required");
    } else {
      const data = new FormData(e.target);
      const action = e.target.action;
      fetch(action, {
        method: "POST",
        body: data,
      }).then(() => {
        Swal.fire({
          icon: "success",
          title: `Thank You ${firstName} ${lastName}`,
          text: "We will quickly review and respond to the message 😊",
          width: "24rem",
        });

        setFirstName("");
        setLastName("");
        setEmail("");
        setComment("");
      });
    }
  };
  return (
    <>
      <div className="hero-section" id="home" style={{ fontFamily: "poppins" }}>
        <NavbarComp />
        <Container>
          <div className="row flex-wrap-reverse">
            <div className="col-lg-6 col-sm-12" style={{ marginTop: "50px" }}>
              <p className="hero-title-name">
                Hai 👋, I’m Melki Jonathan{" "}
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Student",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Web Developer",
                    1000,
                    "UI Designer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  //   style={{
                  //     fontSize: "1.5rem",
                  //     display: "inline-block",
                  //     backgroundColor: "rgb(1, 204, 142)",
                  //     padding: "3px 15px",
                  //     borderRadius: "3px",
                  //     fontWeight: 600,
                  //   }}

                  className="hero-title-job"
                  repeat={Infinity}
                />
              </p>
              <p className="hero-title">
                I love crafting beautiful and functional digital experiences
              </p>
              <p
                style={{
                  fontSize: "1.12rem",
                  fontWeight: 200,
                  paddingTop: "10px",
                  lineHeight: "1.8",
                }}
              >
                Design and code converge, crafting limitless possibilities for
                visual experiences and functional solutions.
              </p>
              <div className="row row-cols-auto align-items-center mt-3">
                <div className="col">
                  <a href="#contact">
                    <Button
                      style={{
                        backgroundColor: "#01CC8E",
                        border: "none",
                        padding: "10px 17px",
                        fontWeight: 600,
                        marginRight: "20px",
                      }}
                    >
                      Contact Me
                      <i className="fa-solid fa-arrow-up-right-from-square ms-3"></i>{" "}
                    </Button>
                  </a>

                  <a href={cv} target="_blank" style={{ color: "white" }}>
                    Resume
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 text-center">
              <motion.div
                animate={{ y: [0, 25, 0] }}
                transition={{
                  ease: "easeInOut",
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <img src={HeroImage} className="img-fluid" />
              </motion.div>
            </div>
          </div>
        </Container>
      </div>
      <div
        className="portfolio-section"
        id="portfolio"
        style={{
          backgroundColor: "#272936",
          textAlign: "center",
          padding: "50px 0 0",
        }}
      >
        <Container>
          <h2 className="title-section">
            My <span style={{ color: "#01CC8E" }}>Portfolio</span>
          </h2>
          <p className="mb-4">Good product born from good designer</p>
          <Row className="m-0 justify-content-center">
            {portfolios.map((portfolio) => (
              <Col key={portfolio.id} lg={6} className="mb-5">
                <a
                  href={portfolio.url}
                  style={{ color: "white" }}
                  target="_blank"
                >
                  <motion.div
                    initial={{ opacity: 0, translateY: 100 }}
                    whileInView={{
                      opacity: 1,
                      translateY: 20,
                      transitionDelay: 0.9,
                    }}
                  >
                    <img
                      src={portfolio.image}
                      className="port-img img-fluid"
                      alt=""
                      style={{ borderRadius: "5px" }}
                    />

                    <div
                      className=" d-flex align-items-center"
                      style={{ justifyContent: "space-between" }}
                    >
                      <div>{portfolio.name}</div>
                      <div>Live Demo</div>
                    </div>
                  </motion.div>
                </a>
              </Col>
            ))}
          </Row>
          <a href="https://github.com/Melkijo?tab=repositories" target="_blank">
            {" "}
            <button
              type="button"
              className="btn btn-outline-success mb-5"
              style={{ color: "#01CC8E", borderColor: "#01CC8E" }}
            >
              {" "}
              See More...
            </button>
          </a>
        </Container>
      </div>

      <AboutUs />

      <div
        className="contact-section"
        id="contact"
        style={{ backgroundColor: " #373B4C", padding: "50px 0" }}
      >
        <h2 className="title-section text-center mb-4">
          {" "}
          Lets get in <span style={{ color: "#01CC8E" }}>Touch</span>
        </h2>
        <Container>
          <Row>
            <Col lg={6}>
              {" "}
              <p
                style={{
                  fontWeight: 600,
                  fontSize: "1.5rem",
                  marginBottom: "10px",
                }}
              >
                Hello
                <span style={{ color: "#01CC8E" }}> there! 👋</span>
              </p>
              <p>
                I'm here to collaborate or chat with you. Share your ideas or
                projects, and I'll contribute where I can. Feel free to react
                out for collaborations or just a friendly hello!
              </p>
              <div style={{ display: "flex", gap: 20, marginTop: 25 }}>
                <a
                  href="https://www.linkedin.com/in/melki-jonathan"
                  target="_blank"
                >
                  <img src={LinkedinIcon} alt="" width={40} />
                </a>
                <a href="https://www.instagram.com/melkijo/" target="_blank">
                  <img src={InstagramIcon} alt="" width={38} />
                </a>
                {/* <a href="https://dribbble.com/melkijo" target="_blank">
                  <img src={DribbbleIcon} alt="" width={34} />
                </a> */}
                {/* <a
                  href="https://www.behance.net/jonathanandaraa"
                  target="_blank"
                >
                  <img src={BehanceIcon} alt="" width={34} />
                </a> */}
              </div>
            </Col>
            <Col lg={6}>
              <Form
                method="POST"
                action="https://script.google.com/macros/s/AKfycbysyr74i8NxqbZrhkdUed-3IEVCHesRPaZt_B3txo7LW4GsKqN4tt6DOlQ4zcAvCxc8/exec"
                onSubmit={(e) => handleOnSubmit(e)}
                style={{
                  backgroundColor: "#272936",
                  padding: "30px 35px",
                  borderRadius: "5px",
                }}
              >
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="firstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="first name"
                        value={firstName}
                        name="firstName"
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="lastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Last name"
                        value={lastName}
                        name="lastName"
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="example@email.co"
                    value={email}
                    name="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Comment</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                    value={comment}
                    name="comment"
                    onChange={(e) => {
                      setComment(e.target.value);
                    }}
                  />
                </Form.Group>
                <Button
                  style={{
                    backgroundColor: "#01CC8E",
                    border: "none",
                    padding: "10px 17px",
                    fontWeight: 600,
                    marginTop: "10px",
                  }}
                  type="submit"
                >
                  Send <i className="fa-solid fa-paper-plane ms-2"></i>
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>

      <div
        className="footer-section"
        style={{ backgroundColor: "#272936", padding: "50px 0" }}
      >
        <Container>
          <Row>
            <Col lg={4} className="mb-5">
              <div>
                <a
                  href="#home"
                  style={{
                    fontSize: 42,
                    fontWeight: 800,
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  <span style={{ color: "#01CC8E" }}>MEJO</span>DEV.
                </a>
              </div>
              <p className="m-0">Improvise, Adapt, Overcome</p>
            </Col>
            <Col lg={2} sm={6} xs={6} className="mb-5">
              <h5>Navigation</h5>
              <div className="mt-3">
                <a href="#home" style={{ color: "white" }}>
                  Home
                </a>{" "}
              </div>
              <div className="mt-3">
                <a href="#portfolio" style={{ color: "white" }}>
                  Portfolio
                </a>{" "}
              </div>
              <div className="mt-3">
                <a href="#about" style={{ color: "white" }}>
                  About
                </a>{" "}
              </div>
            </Col>
            <Col lg={3} sm={6} xs={6} className="mb-5">
              {" "}
              <h5>Social Media</h5>
              <div
                style={{
                  display: "flex",
                  gap: 20,
                  marginTop: 15,
                }}
              >
                <a href="https://www.instagram.com/melkijo/" target="_blank">
                  <img src={InstagramIcon} alt="" width={38} />
                </a>

                <a
                  href="https://www.linkedin.com/in/melki-jonathan"
                  target="_blank"
                >
                  <img src={LinkedinIcon} alt="" width={40} />
                </a>
              </div>
            </Col>
            <Col lg={3} md={12}>
              <h5>My Contact</h5>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  marginTop: 15,
                }}
              >
                <div>
                  <p className="m-0">melkijonathan2@gmail.com</p>
                </div>
                <div>
                  <p className="m-0">
                    Mataram, Nusa Tenggara Barat, Indonesian
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="copyright-section">
        <div
          style={{
            backgroundColor: "#1d1e27",
            padding: "15px 0",
            textAlign: "center",
          }}
        >
          <p className="m-0">©2023 Build with ❤️ by : Melkijo</p>
        </div>
      </div>
    </>
  );
}
