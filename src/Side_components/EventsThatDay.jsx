import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { useState, useEffect } from "react";

const EventsThatDay = ({ convertMilitaryTime }) => {
  const currentDay = localStorage.getItem("currentDay")
  // console.log(JSON.parse(currentDay))
  // console.log(currentDay)

  const [eventsArray, setEventsArray] = useState([])
  const [currentDayEventTitles, setCurrentDayEventTitles] = useState([])
  const [currentDayEventDate, setCurrentDayEventDate] = useState([])

  useEffect(() => {
    setEventsArray(JSON.parse(currentDay).event)
  }, [])

  useEffect(() => {
    setCurrentDayEventTitles(eventsArray.map((event) => (
      event.title
    )))
  }, [])

  useEffect(() => {
    setCurrentDayEventDate(eventsArray.map((event) => (
      event.date
    )))
  }, [])

 // FUNCTION TO SORT TODAYSEVENTS BY START TIME
eventsArray.sort((a, b) => new Date(`${a.date} ${a.startTime}`) - new Date(`${b.date} ${b.startTime}`))

  return (
    <>
    <div className="eventsWrapper">
      <h3> Today's Events </h3>
      <ListGroup>
        { eventsArray.map((event, index) => (
        <ListGroupItem key={ index }> { event.title } | Start Time: { convertMilitaryTime(event.startTime) } </ListGroupItem>
        )) }
      </ListGroup>
    </div>
    </>
  )
}

export default EventsThatDay
