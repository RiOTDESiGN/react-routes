import React from 'react';

const Badge = ({ name, image }) => (
  <div className="badgeContainer">
    <span className="badgeText">{name}</span>
    <img src={image} className="badgeFloat" alt={name} />
  </div>
);

export default Badge;