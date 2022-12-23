import { adobe, linkedIn, ic3, microsoft, platzi, sep } from "../assets/certificates";
import { animateScroll as scroll } from "react-scroll";
import { NewAward } from "../components";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useFetchAwards } from "../hooks";
import Viewer from "react-viewer";
import { useUserContext } from "../context";

export const Awards = () => {
  const { userDb } = useUserContext();
  const { awards, getNext, disable } = useFetchAwards();
  const [visible, setVisible] = useState(false);
  const [imgV, setImgV] = useState();

  const toTop = () => {
    scroll.scrollToTop({ duration: 500 });
  };

  return (
    <Container className="justify-content-center text-center">
      <Row>
        <Col className="col-xs-1-12 my-3">{userDb?.role === "Admin" && <NewAward />}</Col>
      </Row>
      <Fragment>
        {awards.map((award, index) => (
          <ul key={index} className="awards mx-2">
            <Fragment>
              <div className="containerCard">
                <div className="card">
                  <div className="imgBx">
                    <Viewer
                      visible={visible}
                      noNavbar={true}
                      noImgDetails={true}
                      minScale={1}
                      maxScale={3}
                      onClose={() => {
                        setVisible(false);
                      }}
                      images={[{ src: `${imgV}` }]}
                    />
                    <Image
                      src={award.url}
                      className="img-fluid awards--cert"
                      onClick={() => {
                        setVisible(true);
                        setImgV(award.url);
                      }}
                    />
                  </div>
                  <div className="contentBx">
                    <h2> {award.title} </h2>
                    <div className="category my-2">
                      <h3 className="mt-2">Provider :</h3>
                      {award.provider === "Platzi" && <img src={platzi} className="containerCard--prov" />}
                      {award.provider === "Microsoft" && <img src={microsoft} className="containerCard--prov" />}
                      {award.provider === "LinkedIn" && <img src={linkedIn} className="containerCard--prov" />}
                      {award.provider === "IC3" && <img src={ic3} className="containerCard--prov" />}
                      {award.provider === "Adobe" && <img src={adobe} className="containerCard--prov" />}
                      {award.provider === "SEP" && <img src={sep} className="containerCard--prov" />}
                    </div>
                    <div className="category mb-2">
                      <h3>Category :</h3>
                      <span>{award.category} </span>
                    </div>
                    <Link to={{ pathname: `${award.link}` }} target="_blank">
                      <button className="btnMain">Validate</button>
                    </Link>
                    <h2 className="mt-2">{award.body.slice(32)}</h2>
                  </div>
                </div>
              </div>
            </Fragment>
          </ul>
        ))}
      </Fragment>
      <Row className="justify-content-center">
        {!disable && (
          <button className="btn-block w-100 px-5 btnGo" onClick={getNext}>
            Cargar más!!
          </button>
        )}
        {disable && (
          <button className="btn-block w-100 btnWarning px-5" onClick={toTop}>
            Ups! parece que son todos, Ir al principio!!
          </button>
        )}
      </Row>
    </Container>
  );
};
