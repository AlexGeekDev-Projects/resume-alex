import { Col, Container, Image, Row } from "react-bootstrap";
import HeroDesign2 from "../assets/hero/HeroDesign2.png";

export const Hero = () => {
  return (
    <Container fluid className="vh-100 heroDesign">
      <Row>
        <Col className="col-xs-1-12 col-lg-6">
          <Image fluid src={HeroDesign2} alt="Hero" className="heroDesign--img" />
        </Col>
        <Col className="col-xs-1-12 col-lg-6 align">
          <h1 className="text-center mt-5 mb-3">Alex Zepeda</h1>
          <h2 className="text-center">Developer and Designer</h2>
          <div className="sea">
            <div className="circle-wrapper">
              <div className="bubble"></div>
              <div className="submarine-wrapper">
                <div className="submarine-body">
                  <div className="window"></div>
                  <div className="engine"></div>
                  <div className="name text-center">AlexGeek</div>
                  <div className="light"></div>
                </div>
                <div className="helix"></div>
                <div className="hat">
                  <div className="leds-wrapper">
                    <div className="periscope"></div>
                    <div className="leds"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
