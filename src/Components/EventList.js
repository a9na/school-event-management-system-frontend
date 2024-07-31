import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('/api/events')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the events!', error);
      });
  }, []);

  return (
    <div>
      <h1>Upcoming Events</h1>
      <ul>
        {events.map(event => (
          <li key={event._id}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>{new Date(event.date).toLocaleDateString()}</p>
            <p>{event.location}</p>
            <button>Register</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
