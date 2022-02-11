import React from "react";
import NavBar from "./NavBar";
import Calendar from "./Calendar_Components/Calendar";
import Groups from "./Groups";

const GroupCalendars = (props) => {
    return(
        <div>
            <NavBar/>
            <p>Group CALENDAR</p>
            <Groups userID= {props.user.id}/>
        </div>
    )
}

export default GroupCalendars