import React from "react";
import { ListGroup, ListGroupItem, Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink } from "reactstrap";

const EventsThatDay = () => {
  return (
    <>
    <div className="eventsWrapper">
      <ListGroup>
        <ListGroupItem>Event 1</ListGroupItem>
        <ListGroupItem>Event 2</ListGroupItem>
        <ListGroupItem>Event 3</ListGroupItem>
        <ListGroupItem>Event 4</ListGroupItem>
        <ListGroupItem>Event 5</ListGroupItem>
      </ListGroup>
    </div>
    </>
  );
};

export default EventsThatDay;
