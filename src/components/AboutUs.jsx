import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function AboutUs() {
  return (
    <>
      <div
        className="about-section"
        id="about"
        style={{
          backgroundColor: " #373B4C",
          padding: "50px 0",
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
                  Participants in Gemastik XV in User Experience Design Field
                </li>
                <li>Chairperson of the 2022 UKM Oikumene Joint Easter</li>
                <li>Design Coordinator of the 2022 UKM Oikumene Anniversary</li>
                <li>Design Coordinator of Christmas with UKM Oikumene 2022</li>
              </ul>
            </Col>
            <Col className="text-center about-img" lg={4} md={12}>
              <img src="../src/assets/img/persona.png" alt=""></img>
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
                Perkenalkan, nama saya Melki Jonathan Andara. Saat ini, saya
                sedang menjalani pendidikan di Universitas Mataram dan berada di
                semester 6 program studi Teknik Informatika. Saya sangat
                tertarik dengan bidang teknologi karena memiliki ilmu yang bisa
                diterapkan di banyak bidang. Saya memiliki cita-cita untuk
                menjadi seorang software engineer yang dapat membantu orang lain
                dalam memecahkan masalah mereka melalui teknologi.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
