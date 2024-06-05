import EventCard from "../../components/EventCard/EventCard";
import { eventList } from "../../utils/EventDatabase";
import AdminNav from "../../components/Navigation/adminNav";
import { Link } from 'react-router-dom';
import "./EventListAdmin.css";
const EventListAdmin = () => {
  const renderEventCards = () => {
    return eventList.map(({ id, date, heading, location, img }) => {
      return (
        <EventCard
          key={id}
          id={id}
          date={date}
          heading={heading}
          location={location}
          img={img}
        />
      );
    });
  };
  return (
    <>
    <div>
      <AdminNav/>
      <div className="event-list-wrapper">
        <div className="event-list">
          <h1 id="add"><Link to='/addEvents'><p>Add/Drop Events</p></Link></h1>
          <h1>Currently Displayed Events</h1>
          {eventList.length > 0 ? (
            renderEventCards()
          ) : (
            <p>No events available</p>
          )}
        </div>
      </div>
    </div>
    </>
  );
};
export default EventListAdmin;
