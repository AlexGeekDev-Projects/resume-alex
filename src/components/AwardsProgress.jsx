import { Fragment, useState } from "react";
import ProgressBar from "react-animated-progress-bar";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";

export const AwardsProgress = () => {
  const [show, setShow] = useState(false);

  return (
    <Container fluid className="px-5 py-3 awardProgress">
      <Row className="justify-content-center text-center">
        <Col className="col-xs-1-12 col-lg-6 pt-4">
          <ProgressBar
            height="15px"
            rect
            percentage="80"
            rectBorderRadius="20px"
            defColor={{
              fair: "orangered",
              good: "yellow",
              excellent: "blue",
              poor: "red",
            }}
          />
          <h4 className="text-white">Technical Support</h4>
          <ProgressBar
            height="15px"
            rect
            percentage="90"
            rectBorderRadius="20px"
            defColor={{
              fair: "orangered",
              good: "yellow",
              excellent: "blue",
              poor: "red",
            }}
          />
          <h4 className="text-white">Front-End</h4>
          <ProgressBar
            height="15px"
            rect
            percentage="50"
            rectBorderRadius="20px"
            defColor={{
              fair: "orangered",
              good: "yellow",
              excellent: "blue",
              poor: "red",
            }}
          />
          <h4 className="text-white">Back-End</h4>
          <ProgressBar
            height="15px"
            rect
            percentage="90"
            rectBorderRadius="20px"
            defColor={{
              fair: "orangered",
              good: "yellow",
              excellent: "blue",
              poor: "red",
            }}
          />
          <h4 className="text-white">Design</h4>
        </Col>
        <Col className="col-xs-1-12 col-lg-6 pt-3">
          <Row className="justify-content-center">
            <strong className="text-white awardProgress--title">Awards</strong>
          </Row>
          <CountUp
            delay={4}
            className="awardProgress--count"
            end={75}
            duration={5}
            separator=" "
            decimals={0}
            decimal=","
            onEnd={() => setShow(true)}
          ></CountUp>
          <FontAwesomeIcon icon={faCertificate} className="awardProgress--icon mx-3" />
          {show && (
            <Fragment>
              <h3 className="text-white awardProgress--icon">Ended! 👏</h3>{" "}
              <Link>
                {" "}
                <h2 className="awardProgress--icon">Chek the certifications</h2>{" "}
              </Link>
            </Fragment>
          )}
        </Col>
      </Row>
    </Container>
  );
};
