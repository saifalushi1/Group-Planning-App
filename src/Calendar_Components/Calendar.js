import "./Calendar.css"
import { useState, useEffect } from "react"
import CalendarHeader from "./CalendarHeader"
import Day from "./Day"
import NewEventModal from "./DayModal"
import useDate from "./useDate"

function Calendar() {
  const [nav, setNav] = useState(0)
  const [clicked, setClicked] = useState()
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [events, setEvents] = useState(
    localStorage.getItem("events")
      ? JSON.parse(localStorage.getItem("events"))
      : []
  )

  const eventsForDate = (date) => events.filter((e) => e.date === date)

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events))
  }, [events])

  const {days, dateDisplay} = useDate(events, nav)

  const handleDelete = () => {
    setEvents(events.filter(e => e.date !== clicked))
  }

  return (
    <>
    <div className="Calendar">
      <CalendarHeader 
        dateDisplay={ dateDisplay }
        onNext={ () => setNav(nav + 1) }
        onBack={ () => setNav(nav - 1) }
      />
      <div id="container">
        <div id="weekdays">
          <div>Sunday</div>
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
          <div>Saturday</div>
        </div>

        <div id="calendar">
          {days.map((day, index) => (
            <Day
              day={day}
              key={index}
              onClick={() => {
                if (day.value !== "padding") {
                  setClicked(day.date)
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>

      {
        clicked &&
        <NewEventModal
          eventsForDate={ eventsForDate }
          events = { events }
          setEvents={ setEvents }
          startTime = { startTime }
          endTime = { endTime }
          clicked={ clicked }
          handleDelete= { handleDelete }
          onClose={() => setClicked(null)}
          setStartTime = { setStartTime }
          setEndTime = { setEndTime }
          onSave={title => {
            setEvents([ ...events, { title, date: clicked, startTime, endTime }])
            setClicked(null)
          }}
        />
      }

    </>
  )
}

export default Calendar
