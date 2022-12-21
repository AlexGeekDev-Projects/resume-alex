import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useAdminContext } from "../context/adminContext";
import useLogout from "../hooks/useLogout";
import { useUiContext } from "../context/uiContext";
import { Link } from "react-router-dom";
import AlexLogo from "../assets/logo/logo1.png";
import { ThemeChanger } from "./ThemeChanger";

export const NavBar = () => {
  const { adminDb } = useAdminContext();
  const { logout } = useLogout();
  const { active } = useUiContext();

  return (
    <Container fluid>
      <Row className="row justify-content-around py-1 navbar">
        <Col className="col-xs-1-12 col-lg-6 text-start">
          <Link to="/">
            <img src={AlexLogo} alt="Alex Logo" className="navbar--logo" />
            <strong className="mx-2">Alex Geek</strong>
          </Link>
          {active && (
            <Fragment>
              <img src={adminDb.photo} className="navbar--photo" />
              <Link>
                <strong> {adminDb.name.split(" ", 1)} </strong>
              </Link>
            </Fragment>
          )}
        </Col>
        <div className="col-xs-1-12 col-lg-1 text-end">
          <Link to="/">
            <strong className="mx-2">Home</strong>
          </Link>
        </div>
        <div className="col-xs-1-12 col-lg-1 text-end">
          <Link to="/Awards">
            <strong className="mx-2">Awards</strong>
          </Link>
        </div>
        <div className="col-xs-1-12 col-lg-1 text-end">
          <Link to="/Portfolio">
            <strong className="mx-2">Portfolio</strong>
          </Link>
        </div>
        <div className="col-xs-1-12 col-lg-1 text-end">
          <Link to="/Gallery">
            <strong className="mx-2">Gallery</strong>
          </Link>
        </div>
        {!active ? (
          <div className="col-xs-1-12 col-lg-1 text-end">
            <Link to="/Login">
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
