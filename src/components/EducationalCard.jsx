import React from "react";
import PropTypes from "prop-types";

const EducationalCard = React.memo(({ title, description, link }) => (
  <div className="educational-card">
    <h4>{title}</h4>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">
      Saber más →
    </a>
  </div>
));

EducationalCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default EducationalCard;
