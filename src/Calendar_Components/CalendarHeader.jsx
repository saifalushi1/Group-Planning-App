const CalendarHeader = ({ onNext, onBack, dateDisplay }) => {
    return (
      <div className="CalendarHeader">
        <div id="header">
          <button onClick={ onBack } id="backButton">Back</button>
          <div id="monthDisplay"> { dateDisplay } </div>
          <div>
            <button onClick={ onNext } id="nextButton">Next</button>
          </div>
        </div>
      </div>
    )
  }
  
  export default CalendarHeader
  