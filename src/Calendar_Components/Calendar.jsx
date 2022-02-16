import "./Calendar.css"
import { useState, useEffect } from "react"
import CalendarHeader from "./CalendarHeader"
import Day from "./Day"
import DayModal from "./DayModal"
import useDate from "./useDate"
import axios from "axios"
import EventsThatDay from "../Side_components/EventsThatDay"

function Calendar({ user, headers }) {
  const [nav, setNav] = useState(0)
  const [clicked, setClicked] = useState()
  const [startTime, setStartTime] = useState(null)
  const [endTime, setEndTime] = useState(null)
  const [events, setEvents] = useState([])
  const [newEvent, setNewEvent] = useState(null)

  const eventsForDate = (date) => events.filter((e) => e.date === date)
  const {days, dateDisplay} = useDate(events, nav)

  const getCurrentDay = (day) => (
    day.filter(day => day.isCurrentDay === true)
  )

  const currentDay = getCurrentDay(days)[0]

    // FUNCTION TO CONVERT MILITARY TIME TO STANDARD
    const convertMilitaryTime = (timeInput) => {
      let time = timeInput
      time = time.split(':')
      let hours = Number(time[0])
      let minutes = Number(time[1])
      let timeValue
      
      if (hours > 0 && hours <= 12) {
        timeValue= "" + hours
      } else if (hours > 12) {
        timeValue= "" + (hours - 12)
      } else if (hours === 0) {
        timeValue= "12"
      }
      timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes
      timeValue += (hours >= 12) ? " P.M." : " A.M."
      return (
      timeValue 
      )}

  const getEvents = (userId) => {
    const userEventsUrl = `https://protected-hollows-70202.herokuapp.com/grouper/events/${userId}` 
    axios.get(userEventsUrl, { headers: headers} )
    .then((res) => {
      setEvents(res.data)
    })
    .catch(err => console.log("uh oh"))
  }

  const handleSubmit = () => {
    if(newEvent){
      axios.post(`https://protected-hollows-70202.herokuapp.com/grouper/events`, { title: newEvent.title, date: newEvent.date, startTime: newEvent.startTime, endTime: newEvent.endTime, creator: localStorage.getItem("UUID") }, { headers: headers })
      .then((res) => {
        getEvents(localStorage.getItem("UUID")) 
      })
    }
  }

  useEffect(() => {
    getEvents(localStorage.getItem("UUID")) 
  },[user])

  useEffect(() => {
    handleSubmit()
  }, [newEvent])

  const handleDeleteOne = (id) => (
    axios.delete(`https://protected-hollows-70202.herokuapp.com/grouper/events/${id}`, { headers: headers})
    .then(() => {
      getEvents(localStorage.getItem("UUID"))
    })
  )
  
  return (
    <>
    <div className="calendarDiv">
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
        <DayModal
          eventsForDate={ eventsForDate }
          convertMilitaryTime = { convertMilitaryTime }
          clicked={ clicked }
          handleDeleteOne= { handleDeleteOne }
          onClose={() => setClicked(null)}
          setStartTime = { setStartTime }
          setEndTime = { setEndTime }
          startTime = { startTime }
          endTime = { endTime }
          onSave={title => {
            setNewEvent({ title, date: clicked, startTime, endTime })
            setClicked(null)
          }}
        />
      }

        {( currentDay ? <EventsThatDay  convertMilitaryTime = { convertMilitaryTime } currentDay = { currentDay }/> : <p></p>)}
        </>
  )
}

export default Calendar