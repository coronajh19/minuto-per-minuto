import React from "react";
import PropTypes from "prop-types";

const EventItem = React.memo(({ event }) => (
  <li style={{ marginBottom: "1rem" }}>
    <h3>{event.title}</h3>
    <p>
      <strong>Fecha:</strong> {event.date}
    </p>
    <p>
      <strong>Lugar:</strong> {event.location}
    </p>
    <p>{event.description}</p>
  </li>
));

EventItem.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  }).isRequired,
};

export default EventItem;
