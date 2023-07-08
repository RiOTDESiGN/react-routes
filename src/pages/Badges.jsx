import React, { useEffect } from 'react';
import Badge from './Badge';
import badgesData from '../assets/badges.json';

export function Badges({ isDarkMode }) {
  useEffect(() => {
    const badgeContainers = document.querySelectorAll('.badgeContainer');

    badgeContainers.forEach((container) => {
      const img = container.querySelector('img');
      const altText = img.getAttribute('alt');
      const beforeElement = document.createElement('span');
      beforeElement.classList.add('badgeText');
      beforeElement.textContent = altText;
      container.insertBefore(beforeElement, img);
    });
  }, []);

  return (
    <div className="sectionRight">
      {badgesData.map((badge) => (
        <Badge 
            key={badge.name} 
            name={badge.name} 
            image={badge.image}
            isDarkMode={isDarkMode}
        />
      ))}
    </div>
  );
}