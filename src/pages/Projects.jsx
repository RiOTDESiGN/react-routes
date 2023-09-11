import React, { useState } from 'react';
import { NavLink, Route, Routes } from "react-router-dom";
import { useSettings } from '../SettingsContext';
import { Page } from "./Page";
import { Project } from "./Project";
import { PageNotFound } from "./PageNotFound";

import projects from '../assets/images/projects_icon.webp'
import projectsData from "../projects.json";
import GitHUB from "../tool_badges.json";

function ProjectsHome({ t }) {
  const { isDarkMode } = useSettings();
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const cardFade = document.querySelector(".cardContainer");

  const handleCardClick = (index) => {
    if (selectedCardIndex === index) {
      setSelectedCardIndex(null);
      if (cardFade && cardFade.classList.contains("cardContainerFade")) {
        cardFade.classList.remove("cardContainerFade");
      }
    } else {
      setSelectedCardIndex(index);
      if (cardFade && !cardFade.classList.contains("cardContainerFade")) {
        cardFade.classList.add("cardContainerFade");
      }
    }
  };
  
  const handleCardMouseLeave = () => {
    if (cardFade) {
      if (cardFade.classList.contains("cardContainerFade")) {
        cardFade.classList.remove("cardContainerFade");
      }
    }
    setSelectedCardIndex(null);
  };  
  
    return (
      <Page title={t("Projects.title")} icon={projects} alt="Projects Icon" className="title_projects">
        <div className="cardContainer">
          {projectsData.map((project, index) => (
            <div key={index} className={`projectCard ${index % 2 === 0 ? 'projectCardLeft' : 'projectCardRight'}`} onMouseLeave={handleCardMouseLeave}>
              <h4 className="projectCardTitle">{t(`Projects.project_${project.id}.name`)}</h4>
              <div className="cardContent" style={{ backgroundImage: `url(${project.image})`, backgroundRepeat: 'no-repeat' }}>
                <div className="cardButton">
                  <a href={project.GHurl} target="_blank" rel="noopener noreferrer">
                    <img className={isDarkMode ? '' : 'invert-filter'} src="./badges/GitHUB.webp" alt="GitHUB Icon" />
                  </a>
                </div>
                <div className="cardButton" onClick={() => handleCardClick(index)}><img className={isDarkMode ? '' : 'invert-filter'} src="./badges/CaseStudy.webp" alt="Case Study Icon" /></div>
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

export function Projects() {
  const { isShrinkHeaderActive, t } = useSettings();

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
        <Route path={`/${t(`Projects.path`)}/:id`} element={<Project />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
