import React from 'react';

const TaglineItem = ({ icon, title, text }) => {
  return (
    <div className="taglines-list__item">
      <span className="tagline__icon">{icon}</span>
      <div className="tagline__text">
        <h3 className="tagline__text-prime">{title}</h3>
        <p className="tagline__text-secondary">{text}</p>
      </div>
    </div>
  );
};

export default TaglineItem;
