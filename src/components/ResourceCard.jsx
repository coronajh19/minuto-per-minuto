import React from "react";
import PropTypes from "prop-types";

const ResourceCard = React.memo(({ title, description, link }) => (
  <div className="info-card">
    <h4>{title}</h4>
    <p>{description}</p>
    {link && (
      <a href={link} target="_blank" rel="noopener noreferrer">
        Saber más →
      </a>
    )}
  </div>
));

ResourceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ResourceCard;
