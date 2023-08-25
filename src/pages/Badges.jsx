import React, { useEffect } from 'react';
import Badge from './Badge';
import codeBadgesData from '../code-badges.json';
import programBadgesData from '../program-badges.json';
import toolBadgesData from '../tool-badges.json';

export function Badges() {
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
      <div className="badgeCategory badgeCategoryActive" data-target="Code" onClick={handleItemClick}>Code</div>
      <div className="categorySpace">|</div>
      <div className="badgeCategory" data-target="Programs" onClick={handleItemClick}>Programs</div>
      <div className="categorySpace">|</div>
      <div className="badgeCategory" data-target="Tools" onClick={handleItemClick}>Tools</div>
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



{/* <div className="badgesContainer">
  <div className="badgesSection">
    <div className="badgesSectionItem">Code</div>
    <div className="badgesSectionCode">

  </div>
    <div className="badgesSectionItem">Programs</div>
    <div className="badgesSectionItem">Tools</div>
  </div>

  <div className="badgesSectionPrograms">

  </div>
  <div className="badgesSectionTools">

  </div>
</div> */}

      {/* <div className="badgesContainer">
        <div className="badgesSection">
          <div data-target="Code">Code</div>
          <div data-target="Programs">Programs</div>
          <div data-target="Tools">Tools</div>
        </div>
        <div className="badgesSectionCode">

        </div>
        <div className="badgesSectionPrograms">

        </div>
        <div className="badgesSectionTools">

        </div>
      </div> */}

      {/* <div className="badgesContainer">
        <div className="badgesSection badgesSectionCode">
          {codeBadgesData.map((badge) => (
            <Badge 
                key={badge.name} 
                name={badge.name} 
                image={badge.image}
            />
          ))}
        </div>

        <div className="badgesSectionPrograms">
          {programBadgesData.map((badge) => (
            <Badge 
                key={badge.name} 
                name={badge.name} 
                image={badge.image}
            />
          ))}
        </div>

        <div className="badgesSectionTools">
          {toolBadgesData.map((badge) => (
            <Badge 
                key={badge.name} 
                name={badge.name} 
                image={badge.image}
            />
          ))}
        </div>
      </div> */}
    </>
  );
}