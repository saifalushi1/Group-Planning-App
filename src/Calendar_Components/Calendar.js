import "./Calendar.css"
import { useState, useEffect } from "react"
import CalendarHeader from "./CalendarHeader"
import Day from "./Day"
import NewEventModal from "./DayModal"
import useDate from "./useDate"
import axios from "axios"

function Calendar({ user, headers }) {
  const [nav, setNav] = useState(0)
  const [clicked, setClicked] = useState()
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [events, setEvents] = useState([])
  const [newEvent, setNewEvent] = useState({})
  const [eventId, setEventId] = useState('')

  const eventsForDate = (date) => events.filter((e) => e.date === date)

  // const getEvents = (id) => {
  //   axios.get(`http://localhost:8000/grouper/events/${id}`, { params: {creator: id} }, { headers: headers })
  //   .then((res) => res.json())
  //   .then(json => {
  //     setEvents(json)
  //   })
  //   .catch(console.error)
  // }

  const getEvents = (userId) => {
    const userEventsUrl = `http://localhost:8000/grouper/events/${userId}` 
    axios.get(userEventsUrl, { headers: headers} )
    .then((res) => {
      setEvents(res.data)
    })
    .catch(err => console.log("oh shit"))
  }
console.log(events)

  const handleSubmit = () => {
    axios.post(`http://localhost:8000/grouper/events`, { title: newEvent.title, date: newEvent.date, startTime: newEvent.startTime, endTime: newEvent.endTime, creator: user._id }, { headers: headers })
    .then((res) => {
      console.log(res)
      // getEvents(user.id)
    getEvents(user._id) 
    })
  }

  useEffect(() => {
    getEvents(user._id) 
  },[])

  console.log(`new event: ${newEvent.title}`)


  const {days, dateDisplay} = useDate(events, nav)

  useEffect(() => {
    handleSubmit()
  }, [newEvent])

  const handleDeleteOne = (id) => (
    axios.delete(`http://localhost:8000/grouper/events/${id}`, { headers: headers})
    .then(() => {
      setEventId(id)
      getEvents(user._id)
    })
  )

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
          clicked={ clicked }
          handleDeleteOne= { handleDeleteOne }
          onClose={() => setClicked(null)}
          setStartTime = { setStartTime }
          setEndTime = { setEndTime }
          onSave={title => {
            setNewEvent({ title, date: clicked, startTime, endTime })
            setClicked(null)
          }}
        />
      }
    </>
  )
}

export default Calendar
