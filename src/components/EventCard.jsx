import React from "react";
import PropTypes from "prop-types";

const EventCard = React.memo(
  ({ event: { title, date, location, description } }) => (
    <li className="event-card" data-aos="fade-up">
      <h3>{title}</h3>
      <p>
        <strong>Fecha:</strong> {date}
      </p>
      <p>
        <strong>Lugar:</strong> {location}
      </p>
      <p>{description}</p>
    </li>
  )
);

EventCard.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  }).isRequired,
};

export default EventCard;
