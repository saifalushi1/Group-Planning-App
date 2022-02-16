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

  // console.log(eventsArray)
  // useEffect(() => {
  //   eventsArray.map
  // }, [])

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

  console.log(eventsArray)
  console.log(currentDayEventTitles)
  console.log(currentDayEventDate)


 // FUNCTION TO SORT TODAYSEVENTS BY START TIME
//  const sortedEvents = thisDaysEvents.sort((a, b) => new Date(`${clicked} ${a.startTime}`) - new Date(`${clicked} ${b.startTime}`))
//  useEffect(() => {
//    setThisDaysEvents(sortedEvents)
//  }, [sortedEvents])

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
