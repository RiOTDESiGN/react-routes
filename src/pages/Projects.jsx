import React, { useState } from 'react';
import { NavLink, Route, Routes } from "react-router-dom";
import { useSettings } from '../SettingsContext';
import { Page } from "./Page";
import { Project } from "./Project";
import { PageNotFound } from "./PageNotFound";

import projects from '../assets/images/projects_icon.webp'
import projectsData from "../projects.json";

function ProjectsHome({ t }) {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleCardClick = (index) => {
    if (selectedCardIndex === index) {
      setSelectedCardIndex(null);
    } else {
      setSelectedCardIndex(index);
    }
  };

  const handleCardMouseLeave = () => {
    setSelectedCardIndex(null);
  };
  
    return (
      <Page title={t("Projects.title")} icon={projects} alt="Projects">
        <div className="cardContainer">
          {projectsData.map((project, index) => (
            <div key={index} className={`projectCard ${index % 2 === 0 ? 'projectCardLeft' : 'projectCardRight'}`} onClick={() => handleCardClick(index)} onMouseLeave={handleCardMouseLeave}>
              <h4 className="projectCardTitle">{t(`Projects.project_${project.id}.name`)}</h4>
              <div className="cardContent" style={{ backgroundImage: `url(${project.image})`, backgroundRepeat: 'no-repeat' }}>
              </div>
            </div>
          ))}
          {projectsData.map((project, index) => (
            <div key={index} className={`projectSynopsis ${index % 2 === 0 ? 'projectSynopsisRight' : 'projectSynopsisLeft'} ${selectedCardIndex === index ? 'selectedProjectCard' : ''}`}>
              <div className="projectSummary">
                <h4 className="projectSynopsisTitle">Case Study</h4>
                <span><h3>Description</h3>{t(`Projects.project_${project.id}.description`)}</span>
                <span><h3>Goals</h3>{t(`Projects.project_${project.id}.goals`)}</span>
                <span><h3>Challenges</h3>{t(`Projects.project_${project.id}.challenges`)}</span>
                <span><h3>Reflection</h3>{t(`Projects.project_${project.id}.reflection`)}</span>
              </div>
              <div className="codeSpace">Code:<span className="projectSynopsisTechnologies">{project.code}</span></div>
            </div>
          ))}
        </div>
      </Page>
    );
  }

export function Projects({ t }) {
    const { isShrinkHeaderActive } = useSettings();

    const overviews = [
      { path: "/", label: t("Projects.menu_overview") },
    ];
    
    const apps = [
      { path: "/projects/RNG", label: t("Projects.menu_apps_1") },
      { path: "/projects/Drumpad", label: t("Projects.menu_apps_2") },
      { path: "/projects/Dogfood", label: t("Projects.menu_apps_3") },
      { path: "/projects/Calculator", label: t("Projects.menu_apps_4") },
    ];
    
    const websites = [
      { path: "/projects/Mars", label: t("Projects.menu_websites_1") },
      { path: "/projects/Newsfeed", label: t("Projects.menu_websites_2") },
    ];

  return (
    <>
      <div id="projectsBar" className={`projectsBar ${isShrinkHeaderActive ? 'projectsBarShrink' : ""}`}>
        <div className="projectsMenuContainer">
        <div className="projectsMenu">
          <ul>
            <li>
              {overviews.map((overview, index) => (
              <span key={index}>
                <NavLink className="overView" to={overview.path}>{overview.label}</NavLink>
              </span>
              ))}
            </li>
            <li><span className="projects">{t("Projects.menu_liveview")} <div className="arrowDown"></div></span>
              <ul>
                <li><span className="menuSpacerTop"></span></li>
                <li><span className="menuCategory apps">{t("Projects.menu_category_1")}</span>
                <ul className="horizontalMenu">
                  {apps.map((app, index) => (
                    <li key={index}>
                      <NavLink className="menuItem" to={app.path}>
                        <span>{app.label}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
                </li>
                
                <li><span className="menuCategory websites">{t("Projects.menu_category_2")}</span>
                  <ul className="horizontalMenu">
                  {websites.map((website, index) => (
                    <li key={index}>
                      <NavLink className="menuItem" to={website.path}>
                        <span>{website.label}</span>
                      </NavLink>
                    </li>
                  ))}
                  </ul>
                </li>
                <li><span className="menuSpacerBottom"></span></li>
              </ul>
            </li>
          </ul>
        </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<ProjectsHome t={t} />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
