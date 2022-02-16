import React from "react";
import NavBar from "./NavBar";
import { CardText, Card, CardTitle, Button } from "reactstrap";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Card body>
          <CardTitle tag="h5">Saif Alushi</CardTitle>
          <CardText>
            <a href="https://github.com/saifalushi1" target="_blank">My Github </a>- 
            <a href="https://www.linkedin.com/in/saif-alushi/" target="_blank"> My LinkedIn</a>
          </CardText>
        </Card>
        <Card body className="text-right">
          <CardTitle tag="h5">Ronnie Rogers</CardTitle>
          <CardText>
          <a href="https://github.com/ronniexrogers" target="_blank">My Github </a>-
            <a href="https://www.linkedin.com/in/ronniexrogers/" target="_blank"> My LinkedIn</a>
          </CardText>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
