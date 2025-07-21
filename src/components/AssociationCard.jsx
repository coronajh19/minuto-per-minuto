import React from "react";
import PropTypes from "prop-types";

const AssociationCard = React.memo(
  ({ title, description, link, linkText = "Visitar" }) => (
    <article className="info-card">
      <h4>{title}</h4>
      <p>{description}</p>
      {link && (
        <a
          href={link}
          title={`Ir a ${title}`}
          target="_blank"
          rel="noopener noreferrer"
          className="assoc-btn"
        >
          {linkText}
        </a>
      )}
    </article>
  )
);

AssociationCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
  linkText: PropTypes.string,
};

export default AssociationCard;
