import React from "react";
import NavBar from "./Navigation/NavBar";
import Calendar from "./Calendar_Components/Calendar";
import Groups from "./Groups";
import { useContext } from "react";
const GroupCalendars = ({ userId, headers }) => {
    return(
        <div>
            <NavBar/>
            <p>Group CALENDAR</p>
            <Groups userId= {userId} headers={headers}/>
        </div>
    )
}

export default GroupCalendars