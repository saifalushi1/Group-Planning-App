import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { useState, useEffect } from "react";

const EventsThatDay = ({ currentDay, convertMilitaryTime }) => {

    useEffect(() => {
      setEventsArray(currentDay.event);
    }, [currentDay]);

    const [eventsArray, setEventsArray] = useState([]);

    // FUNCTION TO SORT TODAYSEVENTS BY START TIME
    eventsArray.sort(
      (a, b) =>
        new Date(`${a.date} ${a.startTime}`) -
        new Date(`${b.date} ${b.startTime}`)
    )

  return (
    <>
      <div className="eventsWrapper">
        <h3> Today's Events </h3>
        <ListGroup>
          {eventsArray.map((event, index) => (
            <ListGroupItem key={index}>
              {" "}
              {event.title} | Start Time: {convertMilitaryTime(event.startTime)}{" "}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    </>
  );
};

export default EventsThatDay;
