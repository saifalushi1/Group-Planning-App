import React from "react";
import NavBar from "./NavBar";
// import EventsThatDay from "./Side_components/EventsThatDay";
import Calendar from "./Calendar_Components/Calendar";


const Home = ({ user, headers }) => {
    return(
        <div>
            <NavBar/>
            <Calendar headers={ headers } user={ user } />
            {/* <EventsThatDay /> */}
        </div>
    )
}

export default Home;