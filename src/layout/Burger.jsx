import React, { Fragment, useState, useEffect, useRef } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import logo from "../assets/logo/logoOnecolor.png";
import { useAdminContext, useUiContext } from "../context";
import useLogout from "../hooks/useLogout";

const Burger = () => {
  const [open, setOpen] = useState(false);
  const { adminDb } = useAdminContext();
  const { active } = useUiContext();
  const { logout } = useLogout();
  const ref = useRef(null);
  const ref2 = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target) && !ref2.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <Fragment>
      <Container className={`${open ? "container burger isActiveBurger" : "container burger"}`}>
        <button
          ref={ref2}
          className={`${open ? "hamburger hamburger--slider is-active" : "hamburger hamburger--slider"}`}
          type="button"
          open={open}
          onClick={() => {
            if (open === true) {
              setOpen(false);
              handleClickOutside(false);
            } else {
              setOpen(true);
            }
          }}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </Container>
      {/* Hamburger Menu a partir de aquí para que al dar click en enlaces tambien se oculte */}
      <div ref={ref} className={`${open ? "burgerMenu isActive" : ""}`}>
        <Container className="text-center burgerMenu">
          <Row className="align-items-center mb-2">
            <Col className="col-xs-1-12 col-lg-8 burgerMenu--nav mb-3 mt-3">
              <Link to="/">
                <Image
                  onClick={() => {
                    if (open === true) {
                      setOpen(false);
                      handleClickOutside(false);
                    } else {
                      setOpen(true);
                    }
                    scroll.scrollToTop({ duration: 500 });
                  }}
                  className="navbar--logoBurger"
                  src={logo}
                  alt="logo janz"
                />
              </Link>
            </Col>
          </Row>
          {active && (
            <Fragment>
              <Row className="align-items-center mb-2">
                <Col className="col-xs-1-12 col-lg-8 burgerMenu--nav">
                  <Link to="/">
                    <img className="navbar--photo" src={adminDb.photo} alt="logo janz" />
                  </Link>
                </Col>
              </Row>
              <Row className="align-items-center mb-2">
                <Col className="col-xs-1-12 col-lg-1 burgerMenu--nav ">
                  <span className="font-weight-light">{adminDb.name.split(" ", 1)}</span>
                </Col>
              </Row>
            </Fragment>
          )}
          <Row className="align-items-center mb-2">
            <Col className="col-xs-1-12 col-lg-1 burgerMenu--nav ">
              <Link to="/">
                <span
                  onClick={() => {
                    if (open === true) {
                      setOpen(false);
                      handleClickOutside(false);
                    } else {
                      setOpen(true);
                    }
                    scroll.scrollToTop({ duration: 500 });
                  }}
                  className="font-weight-light"
                >
                  Home
                </span>
              </Link>
            </Col>
          </Row>
          <Row className="align-items-center mb-2">
            <Col className="col-xs-1-12 col-lg-1 burgerMenu--nav">
              <Link to="/Awards">
                <span
                  onClick={() => {
                    if (open === true) {
                      setOpen(false);
                      handleClickOutside(false);
                    } else {
                      setOpen(true);
                    }
                    scroll.scrollToTop({ duration: 500 });
                  }}
                  className="font-weight-light"
                >
                  Awards
                </span>
              </Link>
            </Col>
          </Row>
          <Row className="align-items-center mb-2">
            <Col className="col-xs-1-12 col-lg-1 burgerMenu--nav">
              <Link to="/Portfolio">
                <span
                  onClick={() => {
                    if (open === true) {
                      setOpen(false);
                      handleClickOutside(false);
                    } else {
                      setOpen(true);
                    }
                    scroll.scrollToTop({ duration: 500 });
                  }}
                  className="font-weight-light"
                >
                  Portfolio
                </span>
              </Link>
            </Col>
          </Row>
          <Row className="align-items-center mb-2">
            <Col className="col-xs-1-12 col-lg-1 burgerMenu--nav">
              <Link to="/Blog">
                <span
                  onClick={() => {
                    if (open === true) {
                      setOpen(false);
                      handleClickOutside(false);
                    } else {
                      setOpen(true);
                    }
                    scroll.scrollToTop({ duration: 500 });
                  }}
                  className="font-weight-light"
                >
                  Blog
                </span>
              </Link>
            </Col>
          </Row>
          {!active ? (
            <Row className="align-items-center mb-2">
              <Col className="col-xs-1-12 col-lg-1 burgerMenu--nav">
                <Link to="/Login">
                  <span
                    onClick={() => {
                      if (open === true) {
                        setOpen(false);
                        handleClickOutside(false);
                      } else {
                        setOpen(true);
                      }
                      scroll.scrollToTop({ duration: 500 });
                    }}
                    className="font-weight-light"
                  >
                    Login
                  </span>
                </Link>
              </Col>
            </Row>
          ) : (
            <Row className="align-items-center mb-2">
              <Col className="col-xs-1-12 col-lg-1 burgerMenu--nav">
                <Link to="/Login">
                  <span
                    onClick={() => {
                      if (open === true) {
                        setOpen(false);
                        handleClickOutside(false);
                        logout();
                      } else {
                        setOpen(true);
                      }
                      scroll.scrollToTop({ duration: 500 });
                    }}
                    className="font-weight-light"
                  >
                    Logout
                  </span>
                </Link>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </Fragment>
  );
};

export default Burger;