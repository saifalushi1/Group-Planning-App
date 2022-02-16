import React from "react";
import NavBar from "./NavBar";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";

const About = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Saif and Ronnie</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              The duo that crushed this project
            </CardSubtitle>
            <CardText>
              For some quick background knowledge on who we are. Ronnie and I are general assembly attendee's and are in our 9th week.
              During the creation of this paragraph Ronnie and I had a internal crisis on the fact we will be job hunting so soon. Besides that 
              Ronnie loves embroidery, tattoos, Full Stack Development. I personally enjoy cars, boba, and Full Stack Development. If you are a future
              employer reading this I hope you not only see the effort put into this project but our growth after it as well.  
            </CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default About;
