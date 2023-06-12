import React from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
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




      <Row>
        <Col>
          <div style={{ position: 'relative' }}>
            <img src="https://i.ibb.co/Krk8swx/bg1.png" alt="Your Image" />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <h2 style={{ color: 'white' }}>Create an Amazing Newspaper</h2>
              <p className="mt-3" style={{ color: 'white' }}>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  </p>

              <Button className="mt-2" variant="danger">Learn More</Button>
            </div>
          </div>
        </Col>
      </Row>











        {/* <img src="https://i.ibb.co/Krk8swx/bg1.png" alt="" /> */}
      </div>
    </div>
  );
};

export default RightNav;
