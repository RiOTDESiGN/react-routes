import React from 'react';
import { NavLink, Route, Routes } from "react-router-dom";
import { useSettings } from '../SettingsContext';
import { Page } from "./Page";
import { Project } from "./Project";
import { PageNotFound } from "./PageNotFound";

import projects from '../assets/images/projects_icon.webp'

function HomePage({ t }) {
  return (
    <Page title={t("Projects.title")} icon={projects} alt="Projects">
      <h4>{t("Projects.projects_title_1")}</h4>
      <p>{t("Projects.projects_content_1")}</p>
    </Page>
  );
}

export function Projects({ t }) {
    const { isShrinkHeaderActive } = useSettings();

    const overviews = [
      { path: "/", label: t("Projects.menu_item_0") },
    ];
    
    const apps = [
      { path: "/projects/RNG", label: t("Projects.menu_apps_1") },
      { path: "/projects/Drumpad", label: t("Projects.menu_apps_2") },
      { path: "/projects/Dogfood", label: t("Projects.menu_apps_3") },
      { path: "/projects/Calculator", label: t("Projects.menu_apps_4") },
    ];
    
    const websites = [
      { path: "/projects/Mars", label: "Mars" },
      { path: "/projects/Newsfeed", label: "Newsfeed" },
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
            <li><span className="projects">{t("Projects.title")} <div className="arrowDown"></div></span>
              <ul>
                <li><span className="menuSpacerTop"></span></li>
                <li><span className="menuCategory apps">{t("Projects.menu_item_1")}</span>
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
                
                <li><span className="menuCategory websites">{t("Projects.menu_item_2")}</span>
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
        <Route path="/" element={<HomePage t={t} />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
