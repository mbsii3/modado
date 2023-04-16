import { useState, useEffect } from "react";
import UpcomingEventsItem from "./UpcomingEventsItem";
import { Typography } from "@mui/material";

export default function UpcomingEvents() {
    const [events, setEvents] = useState([])

    const url = `https://api.seatgeek.com/2/events?geoip=true&sort=score.desc&per_page=5&client_id=MzMwNTIzNjF8MTY4MTQzMjMxNi41NzEzMTM5`

    useEffect(() => {
    async function getEvents() {
        await fetch(url).then((response) => response.json())
        .then((events) => {
            setEvents(events.events);
        });
        }
        getEvents();
    }, []);

    return (
        <>
        <Typography sx={{ m: 2, textAlign: "center", fontWeight: 900}}>Upcoming Events Near You</Typography>
        {  events.map((event) => (
            
                < UpcomingEventsItem 
                key={event.id}
                title={event.title}
                date={event.datetime_local}
                venue={event.venue.name}
                url={event.url}
                image={event.performers[0].image} />
                
        ))}
    </>
    );
}