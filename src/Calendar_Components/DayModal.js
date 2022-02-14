import { useState, useEffect } from 'react'
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars'

const DayModal = ({ 
  onSave, 
  onClose, 
  handleDeleteOne, 
  eventsForDate, 
  clicked, 
  setEndTime, 
  setStartTime 
  }) => {
  const [title, setTitle] = useState('')
  const [error, setError] = useState(false)

  const [thisDaysEvents, setThisDaysEvents] = useState(eventsForDate(clicked))

  // // FUNCTION TO SORT THISDAYSEVENTS BY START TIME
  const sortedEvents = thisDaysEvents.sort((a, b) => new Date(`${clicked} ${a.startTime}`) - new Date(`${clicked} ${b.startTime}`))
  useEffect(() => {
    setThisDaysEvents(sortedEvents)
  }, [sortedEvents])

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

  return (
    <>
      <div id='dayModal'>
        <h2>Events</h2>
        <ul>
            { thisDaysEvents.map((event, index) => (
                <div key={ index }>
                <li> 
                <strong>Event:</strong> { event.title } | 
                <strong> Start:</strong> { convertMilitaryTime(event.startTime) } | 
                <strong> End:</strong> { convertMilitaryTime(event.endTime) } 
                <button id="deleteOne" onClick={ () => handleDeleteOne(event._id) }>X</button>
                </li>
                </div>
            )) }
        </ul>

        <input
          className={error ? 'error' : ''}
          value={title}
          onChange={ (e) => setTitle(e.target.value)}
          id='eventTitleInput'
          placeholder='Enter New Event Here'
        />

      <TimePickerComponent placeholder='Start Time' onChange={ (e) => setStartTime(e.target.value.toTimeString())} />
      <TimePickerComponent placeholder='End Time' onChange={ (e) => setEndTime(e.target.value.toTimeString())} />

        <button onClick={ () => {
            if (title) {
              setError(false)
              onSave(title)
            } else {
              setError(true)
            }
          }}
          id='saveButton'> 
          Save
        </button>
        <button onClick={ onClose } id='cancelButton'>
          Cancel
        </button>
      </div>

      <div id='modalBackDrop' />
    </>
  )
}

export default DayModal
