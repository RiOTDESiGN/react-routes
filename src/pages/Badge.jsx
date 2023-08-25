import React from 'react';
import { useSettings } from '../SettingsContext';

const Badge = ({ name, image }) => {
  const { isDarkMode } = useSettings();
  const shouldApplyFilter = (name === 'GitHUB' || name === 'Midjourney') && isDarkMode;

  return (
    <div className="badgeContainer">
      <span className="badgeText vertical-text">{name}</span>
      <img
        src={image}
        className={`badgeFloat ${shouldApplyFilter ? 'invert-filter' : ''}`}
        alt={name}
      />
    </div>
  );
};

export default Badge;
