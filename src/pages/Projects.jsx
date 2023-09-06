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
                <h4 className="projectSynopsisTitle">{t(`Projects.casestudy_title`)}</h4>
                <span><h3>{t(`Projects.description_title`)}</h3>{t(`Projects.project_${project.id}.description`)}</span>
                <span><h3>{t(`Projects.goals_title`)}</h3>{t(`Projects.project_${project.id}.goals`)}</span>
                <span><h3>{t(`Projects.challenges_title`)}</h3>{t(`Projects.project_${project.id}.challenges`)}</span>
                <span><h3>{t(`Projects.reflection_title`)}</h3>{t(`Projects.project_${project.id}.reflection`)}</span>
              </div>
              <div className="codeSpace">{t(`Projects.code_title`)}:<span className="projectSynopsisTechnologies">{project.code}</span></div>
            </div>
          ))}
        </div>
      </Page>
    );
  }

export function Projects({ t }) {
    const { isShrinkHeaderActive } = useSettings();

  return (
    <>
      <div id="projectsBar" className={`projectsBar ${isShrinkHeaderActive ? 'projectsBarShrink' : ""}`}>
        <div className="projectsMenuContainer">
        <div className="projectsMenu">
          <ul>
            <li>
              <span>
                <NavLink className="overView" to="/">{t("Projects.menu_overview")}</NavLink>
              </span>
            </li>
            <li><span className="projects">{t("Projects.menu_liveview")} <div className="arrowDown"></div></span>
              <ul>
                <li><span className="menuSpacerTop"></span></li>
                <li><span className="menuCategory apps">{t("Projects.menu_category_1")}</span>
                <ul className="horizontalMenu">
                {projectsData.map((project, index) => {
                  if (project.category === "Apps") {
                    const appPath = t(`Projects.project_${project.id}.app_path`);
                    const appMenuName = t(`Projects.project_${project.id}.app_menu_name`);

                    if (appPath && appMenuName) {
                      return (
                        <li key={index}>
                          <NavLink className="menuItem" to={appPath}>
                            <span>{appMenuName}</span>
                          </NavLink>
                        </li>
                      );
                    }
                  }

                  return null;
                })}
                </ul>
                </li>
                
                <li><span className="menuCategory websites">{t("Projects.menu_category_2")}</span>
                <ul className="horizontalMenu">
                {projectsData.map((project, index) => {
                  if (project.category === "Websites") {
                    const path = t(`Projects.project_${project.id}.website_path`);
                    const menuName = t(`Projects.project_${project.id}.website_menu_name`);

                    if (path && menuName) {
                      return (
                        <li key={index}>
                          <NavLink className="menuItem" to={path}>
                            <span>{menuName}</span>
                          </NavLink>
                        </li>
                      );
                    }
                  }

                  return null;
                })}
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
