const Day = ( { day, onClick } ) => {
    const className = `day ${day.value === 'padding' ? 'padding' : ''} ${day.isCurrentDay ? 'currentDay' : ''}`
    return ( 
    <div onClick={ onClick } className={ className }>
        { day.value === 'padding' ? '' : day.value }
        { (day.event !== null && day.event.length > 0) && <div className="event"> </div> }
    </div> 
    )
}

export default Day