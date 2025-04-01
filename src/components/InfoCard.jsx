import React from "react";
import PropTypes from "prop-types";

const InfoCard = React.memo(({ title, description, link, linkText }) => (
  <div className="info-card">
    <h4>{title}</h4>
    <p>{description}</p>
    {link && (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {linkText || "Saber más →"}
      </a>
    )}
  </div>
));

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
  linkText: PropTypes.string,
};

export default InfoCard;
