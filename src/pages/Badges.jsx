import React, { useEffect } from 'react';
import { useSettings } from '../SettingsContext';
import Badge from './Badge';
import codeBadgesData from '../code_badges.json';
import programBadgesData from '../program_badges.json';
import toolBadgesData from '../tool_badges.json';

export function Badges() {
  const { t } = useSettings();

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

  function handleItemClick(event) {
    const target = event.target.getAttribute("data-target");
    const targetSection = document.querySelector(`.badgesSection${target}`);
    const allSections = document.querySelectorAll(".badgesSectionItem");
    const allCategories = document.querySelectorAll(".badgeCategory");
  
    allSections.forEach(section => {
      section.style.display = "none";
    });
  
    allCategories.forEach(category => {
      category.classList.remove('badgeCategoryActive');
    });
  
    targetSection.style.display = "flex";
    event.target.classList.add('badgeCategoryActive');
  }  

  return (
    <>
      <div className="badgesContainer">
        <div className="categorySection">
          <div className="categories">
            <div className="badgeCategory badgeCategoryActive" data-target="Code" onClick={handleItemClick}>{t('About.about_code')}</div>
            <div className="categorySpace">|</div>
            <div className="badgeCategory" data-target="Programs" onClick={handleItemClick}>{t('About.about_programs')}</div>
            <div className="categorySpace">|</div>
            <div className="badgeCategory" data-target="Tools" onClick={handleItemClick}>{t('About.about_tools')}</div>
          </div>
        </div>
        <div className="badgesSectionCode badgesSectionItem">
          {codeBadgesData.map((badge) => (
                  <Badge 
                      key={badge.name} 
                      name={badge.name} 
                      image={badge.image}
                  />
                ))} </div>
        <div className="badgesSectionPrograms badgesSectionItem">
          {programBadgesData.map((badge) => (
                  <Badge 
                      key={badge.name} 
                      name={badge.name} 
                      image={badge.image}
                  />
                ))}</div>
        <div className="badgesSectionTools badgesSectionItem">
          {toolBadgesData.map((badge) => (
                  <Badge 
                      key={badge.name} 
                      name={badge.name} 
                      image={badge.image}
                  />
                ))}</div>
      </div>
    </>
  );
}