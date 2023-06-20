import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import personalImg from "../assets/img/persona1.svg";
export default function AboutUs() {
   return (
      <>
         <div
            className="about-section"
            id="about"
            style={{
               backgroundColor: " #373B4C",
               padding: "50px 15px",
            }}
         >
            <h2 className="title-section mb-4 text-center">
               About <span style={{ color: "#01CC8E" }}>Me</span>
            </h2>

            <Container>
               <Row className="">
                  <Col className="about-activity" lg={4} md={12}>
                     <p
                        style={{
                           fontWeight: 600,
                           fontSize: "24px",
                           marginBottom: "10px",
                        }}
                     >
                        My
                        <span style={{ color: "#01CC8E" }}> Activity</span>{" "}
                     </p>
                     <ul>
                        <li>
                           Participants in Gemastik XV in User Experience Design
                           Field
                        </li>
                        <li>
                           Chairperson of the 2022 UKM Oikumene Joint Easter
                        </li>
                        <li>
                           Design Coordinator of the 2022 UKM Oikumene
                           Anniversary
                        </li>
                        <li>
                           Design Coordinator of Christmas with UKM Oikumene
                           2022
                        </li>
                     </ul>
                  </Col>
                  <Col className="text-center about-img" lg={4} md={12}>
                     <img
                        src={personalImg}
                        className="img-fluid"
                        alt=""
                        style={{ borderRadius: 5 }}
                     ></img>
                  </Col>
                  <Col className="about-story" lg={4} md={12}>
                     <p
                        style={{
                           fontWeight: 600,
                           fontSize: "24px",
                           marginBottom: "10px",
                        }}
                     >
                        Story of
                        <span style={{ color: "#01CC8E" }}> my life</span>{" "}
                     </p>
                     <p>
                        my name is Melki Jonathan Andara. Currently, I am
                        pursuing my education at Mataram University and I am in
                        the 6th semester of the Computer Science program. I have
                        a deep interest in the field of technology because it
                        offers knowledge that can be applied in various domains.
                        I aspire to become a software engineer who can assist
                        others in solving their problems through technology.
                     </p>
                  </Col>
               </Row>
            </Container>
         </div>
      </>
   );
}
