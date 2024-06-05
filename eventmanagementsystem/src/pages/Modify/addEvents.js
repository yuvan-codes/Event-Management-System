import React, { useState } from 'react';
import { eventList } from "../../utils/EventDatabase";
import AdminNav from "../../components/Navigation/adminNav";
import "./addEvents.css";

const EventAdd = () => {
  const [events, setEvents] = useState(eventList);
  const [newEvent, setNewEvent] = useState({
    id: '',
    heading: '',
    date: { year: '', month: '' },
    location: '',
    description: '',
    imgUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'year' || name === 'month') {
      setNewEvent({ ...newEvent, date: { ...newEvent.date, [name]: value } });
    } else {
      setNewEvent({ ...newEvent, [name]: value });
    }
  };

  const addEvent = () => {
    if (newEvent.id && newEvent.heading && newEvent.date.year && newEvent.date.month && newEvent.location && newEvent.description && newEvent.imgUrl) {
      const updatedEvents = [...events, newEvent];
      setEvents(updatedEvents);
      eventList.push(newEvent);
      setNewEvent({
        id: '',
        heading: '',
        date: { year: '', month: '' },
        location: '',
        description: '',
        imgUrl: ''
      });
    }
  };

  const dropEvent = (id) => {
    const updatedEvents = events.filter(event => event.id !== id);
    setEvents(updatedEvents);
    const index = eventList.findIndex(event => event.id === id);
    if (index !== -1) {
      eventList.splice(index, 1);
    }
  };

  return (
    <>
      <div>
        <AdminNav />
        <div className="event-list-wrapper">
          <div className="event-list">
            <h1>Select an event to Modify</h1>
            <ul>
              {events.map(event => (
                <li key={event.id}>
                  {event.heading}
                  <button onClick={() => dropEvent(event.id)}>Drop</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="event-add-form">
            <h2>Add New Event</h2>
            <input 
              type="text" 
              name="id" 
              placeholder="ID" 
              value={newEvent.id} 
              onChange={handleChange} 
            />
            <input 
              type="text" 
              name="heading" 
              placeholder="Heading" 
              value={newEvent.heading} 
              onChange={handleChange} 
            />
            <input 
              type="text" 
              name="year" 
              placeholder="Year (YYYY)" 
              value={newEvent.date.year} 
              onChange={handleChange} 
            />
            <select 
              name="month" 
              value={newEvent.date.month} 
              onChange={handleChange}
            >
              <option value="">Select Month</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
            <input 
              type="text" 
              name="location" 
              placeholder="Location" 
              value={newEvent.location} 
              onChange={handleChange} 
            />
            <input 
              type="text" 
              name="description" 
              placeholder="Description" 
              value={newEvent.description} 
              onChange={handleChange} 
            />
            <input 
              type="text" 
              name="imgUrl" 
              placeholder="Image URL" 
              value={newEvent.imgUrl} 
              onChange={handleChange} 
            />
            <button onClick={addEvent}>Add Event</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventAdd;
