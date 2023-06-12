import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Button from "react-bootstrap/Button";
import { Container, } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  

  return (
    <Container className="mt-4">
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear And Favor</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>

      <div className="d-flex">
        <Button variant="danger bg-dark text-white border border-black">
          Breaking News
        </Button>
        <Marquee
          className="bg-dark text-white"
          speed={50}
          pauseOnHover={true}
          gradientWidth={0}
        >
          # Sylhet engineer threatened over power outage, complaint filed with
          police......... #Australia rescues Indonesian fishermen from desert
          island after cyclone......... #Bangladesh reports 5 new COVID cases,
          no deaths in a day.........
        </Marquee>
      </div>

      
    </Container>
  );
};

export default Header;
