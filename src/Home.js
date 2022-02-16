import React from "react";
import NavBar from "./Navigation/NavBar";
// import EventsThatDay from "./Side_components/EventsThatDay";
import Calendar from "./Calendar_Components/Calendar";


const Home = ({ user, headers }) => {
    return(
        <div className="homeDiv">
            <NavBar/>
            <Calendar headers={ headers } user={ user } />
        </div>
    )
}

export default Home;