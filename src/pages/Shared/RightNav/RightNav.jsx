import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import QZone from "../QZone/QZone";

const RightNav = () => {
  return (
    <div className="mt-4">
      <h4 className="my-3">Login With</h4>
      <Button className="mb-2" variant="outline-primary">
        <FaGoogle /> Login with Google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub></FaGithub> Login with GitHub
      </Button>

      <div className="mt-4">
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook className="me-1"></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter className="me-1"></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram className="me-1"></FaInstagram> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <img src="https://i.ibb.co/Krk8swx/bg1.png" alt="" />
      </div>
    </div>
  );
};

export default RightNav;
