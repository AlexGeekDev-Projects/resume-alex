import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Alex from "../assets/alex/AlexGeek Small.png";

export const YouTube = () => {
  return (
    <Container className="container-fluid youtube">
      <Row className="justify-content-center text-center">
        <Col className="col-xs-1-12 col-lg-6 mt-3 pt-5">
          <Link
            to={{
              pathname: "https://www.youtube.com/channel/UCVVW0L9iP0i2ziq3Z8DrgZQ",
            }}
            target="_blank"
          >
            <strong className="youtube--text">
              Follow me in my Youtube Channel <FontAwesomeIcon icon={faYoutube} className="youtube--text" />
            </strong>
          </Link>
        </Col>
        <Col className="col-xs-1-12 col-lg-6">
          <img src={Alex} alt="Alex Geek" className="img-fluid youtube--photo" />
        </Col>
      </Row>
    </Container>
  );
};
