import NavbarComp from "../components/NavbarComp";
import "./MainPage.css";
import HeroImage from "../assets/img/heroImg.svg";
import { portfolios, testimonials } from "../components/dataList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import AboutUs from "../components/AboutUs";
import { motion } from "framer-motion";
export default function MainPage() {
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [comment, setComment] = useState("");

   const jobs = ["Student", "Frontend Web", "UI/UX Designer"];
   const [titles, setTitle] = useState(jobs[0]);

   const handleOnSubmit = (e) => {
      e.preventDefault();

      if (
         firstName === "" ||
         lastName === "" ||
         email === "" ||
         comment === ""
      ) {
         Swal.fire("All input required");
      } else {
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
      }
   };
   return (
      <>
         <div className="hero-section" id="home">
            <NavbarComp />
            <Container>
               <div className="row flex-wrap-reverse">
                  <div
                     className="col-lg-6 col-sm-12"
                     style={{ marginTop: "50px" }}
                  >
                     <p className="hero-title-name">
                        Hai 👋, I’m Melki Jonathan{" "}
                        <span className="hero-title-job">{titles}</span>
                     </p>
                     <p className="hero-title">
                        Students of Informatics Engineering University of
                        Mataram
                     </p>
                     <p style={{ fontSize: "1.2rem", fontWeight: 300 }}>
                        Order your website today and start competing in the
                        online marketplace take advantage of this amazing
                        opportunity!{" "}
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

                           <a
                              href="https://drive.google.com/drive/folders/1eXBgidvfvXeNtLSkNd3lw_YTtlfgY7B4?usp=sharing"
                              target="_blank"
                              style={{ color: "white" }}
                           >
                              Download cv
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
                        <div className="port-item">
                           <img
                              src={portfolio.image}
                              className="port-img img-fluid"
                              alt=""
                              style={{ borderRadius: "5px" }}
                           />

                           <div
                              className="port-detail d-flex align-items-center"
                              style={{ justifyContent: "space-between" }}
                           >
                              <div>
                                 <a
                                    href="https://www.behance.net/search/projects?search=portfolio+website+design&tracking_source=typeahead_nav_recent_suggestion"
                                    style={{ color: "white" }}
                                 >
                                    View Detail
                                 </a>
                              </div>
                              <div className="mt-0">
                                 <img
                                    src="./src/assets/img/figma2.svg"
                                    style={{ width: 40 }}
                                    alt=""
                                 />
                              </div>
                           </div>
                        </div>
                     </Col>
                  ))}
               </Row>
            </Container>
         </div>

         {/* <div
            className="testimonial-section"
            style={{
               backgroundColor: "#272936",
               textAlign: "center",
               padding: "50px 0",
            }}
         >
            <h2 className="title-section">
               What My <span style={{ color: "#01CC8E" }}>Client</span> Say
            </h2>
            <p className="mb-4">Good Product born from good designer</p>

            <Container>
               <Row className="px-3">
                  {testimonials.map((testimonial) => (
                     <Col key={testimonial.id} lg={4} md={12}>
                        <div
                           className="testimonial-item"
                           style={{
                              border: "#01CC8E 3px solid",
                              borderRadius: 5,
                              padding: 35,
                              margin: "15px 0",
                           }}
                        >
                           <img src={testimonial.image} alt="" />
                           <p
                              className="mt-3"
                              style={{
                                 fontWeight: "600",
                                 fontSize: "18px",
                                 margin: 0,
                              }}
                           >
                              {testimonial.name}
                           </p>
                           <p>{testimonial.comment}</p>
                        </div>
                     </Col>
                  ))}
               </Row>
            </Container>
         </div> */}

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
                           fontSize: "18px",
                           marginBottom: "10px",
                        }}
                     >
                        Connect with{" "}
                        <span style={{ color: "#01CC8E" }}>Me</span>
                     </p>
                     <p>
                        Segera hubungi saya dan kita bisa berdiskusi lebih
                        lanjut tentang bagaimana saya bisa membantu Anda
                        mencapai tujuan online Anda.
                     </p>
                  </Col>
                  <Col lg={6}>
                     <Form
                        onSubmit={(e) => handleOnSubmit(e)}
                        style={{
                           backgroundColor: "#272936",
                           padding: "15px 35px",
                           borderRadius: "5px",
                        }}
                     >
                        <p
                           style={{
                              fontWeight: 600,
                              fontSize: "24px",
                              marginBottom: "10px",
                           }}
                        >
                           Let's make something
                           <span style={{ color: "#01CC8E" }}> crazy</span>{" "}
                        </p>{" "}
                        <Row>
                           <Col>
                              <Form.Group
                                 className="mb-3"
                                 controlId="firstName"
                              >
                                 <Form.Label>First Name</Form.Label>
                                 <Form.Control
                                    type="text"
                                    placeholder="first name"
                                    value={firstName}
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
                              marginRight: "20px",
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
                     <p className="m-0">
                        With Great Power Comes Great Responsibility
                     </p>
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
                        <a href="">
                           <i className="fa-brands fa-instagram fa-2x" />
                        </a>
                        <a href="">
                           <i className="fa-brands fa-square-behance fa-2x" />
                        </a>
                        <a href="">
                           <i className="fa-brands fa-youtube fa-2x" />
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
                           <p className="m-0">+6281 7752 62221</p>
                        </div>
                        <div>
                           <p className="m-0">
                              Jln Melati Raya Blok K No 31 BTN Sweta
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
