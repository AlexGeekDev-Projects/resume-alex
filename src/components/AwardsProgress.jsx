import { Fragment, useEffect, useState } from "react";
import { ProgressBar } from "./ProgressBar";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";

export const AwardsProgress = () => {
  const [show, setShow] = useState(false);
  const [percentTS, setPercentTS] = useState(0);
  const [percentFE, setPercentFE] = useState(0);
  const [percentBE, setPercentBE] = useState(0);
  const [percentDesign, setPercentDesign] = useState(0);

  useEffect(() => {
    setPercents();
  }, [show]);

  const setPercents = () => {
    if (show) {
      setPercentTS(80);
      setPercentFE(90);
      setPercentBE(60);
      setPercentDesign(90);
    }
  };

  return (
    <Container fluid className="px-5 py-3 awardProgress">
      <Row className="justify-content-center text-center">
        <Col className="col-xs-1-12 col-lg-6 pt-4">
          <ProgressBar progress={percentFE} />
          <h4 className="text-white">Front-End</h4>
          <ProgressBar progress={percentBE} />
          <h4 className="text-white">Back-End</h4>
          <ProgressBar progress={percentTS} />
          <h4 className="text-white">Technical Support</h4>
          <ProgressBar progress={percentDesign} />
          <h4 className="text-white">Design</h4>
        </Col>
        <Col className="col-xs-1-12 col-lg-6 pt-3">
          <Row className="justify-content-center">
            <strong className="text-white awardProgress--title">Awards</strong>
          </Row>
          <CountUp
            delay={2}
            className="awardProgress--count"
            end={75}
            duration={3}
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
                <h2 className="awardProgress--icon">Chek the certifications</h2>{" "}
              </Link>
            </Fragment>
          )}
        </Col>
      </Row>
    </Container>
  );
};
