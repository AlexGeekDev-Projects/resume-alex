import React, { Fragment } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useUserContext, useUiContext } from "../context";
import useLogout from "../hooks/useLogout";
import { Link } from "react-router-dom";
import AlexLogo from "../assets/logo/logo1.png";
import { ThemeChanger } from "./ThemeChanger";
import routes from "../routes/routes";

export const NavBar = () => {
  const { userDb } = useUserContext();
  const { logout } = useLogout();
  const { active } = useUiContext();

  return (
    <Container fluid>
      <Row className="row justify-content-around py-1 navbar">
        <Col className="col-xs-1-12 col-lg-6 text-start">
          <Link to={routes.home}>
            <Image src={AlexLogo} alt="Alex Logo" className="navbar--logo" />
            <strong className="mx-2">Alex Geek</strong>
          </Link>
          {active && (
            <Fragment>
              <Link>
                {userDb.photo && <Image src={userDb.photo} className="navbar--photo" width={50} height={50} />}
                <strong> {userDb.name.split(" ", 1)} </strong>
              </Link>
            </Fragment>
          )}
        </Col>
        <div className="col-xs-1-12 col-lg-1 text-end">
          <Link to={routes.home}>
            <strong className="mx-2">Home</strong>
          </Link>
        </div>
        <div className="col-xs-1-12 col-lg-1 text-end">
          <Link to={routes.awards}>
            <strong className="mx-2">Awards</strong>
          </Link>
        </div>
        <div className="col-xs-1-12 col-lg-1 text-end">
          <Link to={routes.potfolio}>
            <strong className="mx-2">Portfolio</strong>
          </Link>
        </div>
        <div className="col-xs-1-12 col-lg-1 text-end">
          <Link to={routes.gallery}>
            <strong className="mx-2">Gallery</strong>
          </Link>
        </div>
        {!active ? (
          <div className="col-xs-1-12 col-lg-1 text-end">
            <Link to={routes.login}>
              <strong className="mx-2">Login</strong>
            </Link>
          </div>
        ) : (
          <div className="col-xs-1-12 col-lg-1 text-end">
            <Link>
              <strong className="navbar--logout" onClick={logout}>
                Logout
              </strong>
            </Link>
          </div>
        )}
        <div className="col-xs-1-12 col-lg-1 text-end">
          <ThemeChanger />
        </div>
      </Row>
    </Container>
  );
};
