import React from 'react';

const Badge = ({ name, image, isDarkMode }) => {
  const shouldApplyFilter = name === 'GitHUB' && isDarkMode;

  return (
    <div className="badgeContainer">
      <span className="badgeText">{name}</span>
      <img
        src={image}
        className={`badgeFloat ${shouldApplyFilter ? 'invert-filter' : ''}`}
        alt={name}
      />
    </div>
  );
};

export default Badge;
