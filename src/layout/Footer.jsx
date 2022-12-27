import { Link } from "react-router-dom";
import { facebook, instagram, linkedIn, twitter, whatsApp, youtube } from "../assets/socialMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <div className="container-fluid pt-3 footer">
      <div className="row justify-content-center text-center">
        <div className="col-xs-1-12 col-lg-6 mt-2 mb-2">
          <h1>
            Web Design by Alex Welsh 2021 <FontAwesomeIcon icon={faCopyright} className="mx-2" />
          </h1>
        </div>
        <div className="col-xs-1-12 col-lg-6">
          <Link
            to={{
              pathname: "https://www.facebook.com/AlexZGeek/",
            }}
            target="_blank"
          >
            <img src={facebook} alt="Facebook" className="img-fluid mx-2 my-2 footer--icons" />
          </Link>
          <Link
            to={{
              pathname: "https://www.linkedin.com/in/alexzepeda/",
            }}
            target="_blank"
          >
            <img src={linkedIn} alt="LinkedIn" className="img-fluid mx-2 my-2 footer--icons" />
          </Link>
          <Link
            to={{
              pathname: "https://www.instagram.com/alexpopgeek/",
            }}
            target="_blank"
          >
            <img src={instagram} alt="Instagram" className="img-fluid mx-2 my-2 footer--icons" />
          </Link>
          <Link
            to={{
              pathname: "https://www.youtube.com/channel/UCVVW0L9iP0i2ziq3Z8DrgZQ",
            }}
            target="_blank"
          >
            <img src={youtube} alt="Youtube" className="img-fluid mx-2 my-2 footer--icons" />
          </Link>
          <Link to={{ pathname: "https://twitter.com/alexpopdj" }} target="_blank">
            <img src={twitter} alt="Twitter" className="img-fluid mx-2 my-2 footer--icons" />
          </Link>
          <Link to={{ pathname: "https://wa.me/527222330226" }} target="_blank">
            <img src={whatsApp} alt="WhatsApp" className="img-fluid mx-2 my-2 footer--icons" />
          </Link>
        </div>
      </div>
    </div>
  );
};
