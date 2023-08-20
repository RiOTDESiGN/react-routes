import React from 'react';
import { NavLink, Route, Routes } from "react-router-dom";
import { useSettings } from '../SettingsContext';
import { Page } from "./Page";
import { Project } from "./Project";
import { PageNotFound } from "./PageNotFound";

import projects from '../assets/images/projects_icon.webp'

const overviews = [
  { path: "/", label: "Overview" },
];

const apps = [
  { path: "/react-routes/RNG", label: "RNG" },
  { path: "/react-routes/Drumpad", label: "Drumpad" },
  { path: "/react-routes/Dogfood", label: "Dogfood" },
  { path: "/react-routes/Calculator", label: "Calculator" },
];

const websites = [
  { path: "/react-routes/Mars", label: "Mars" },
  { path: "/react-routes/Newsfeed", label: "Newsfeed" },
];

function HomePage({ t }) {
  return (
    <Page title={t("Projects.title")} icon={projects} alt="Projects">
      <h3>{t("Projects.projects_title_1")}</h3>
      <p>{t("Projects.projects_content_1")}</p>
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
              {overviews.map((overview, index) => (
              <span key={index}>
                <NavLink className="overView" to={overview.path}>{overview.label}</NavLink>
              </span>
              ))}
            </li>
            <li><span className="projects">Projects <div className="arrowDown"></div></span>
              <ul>
                <li><span className="menuSpacerTop"></span></li>
                <li><span className="menuCategory apps">Apps</span>
                  <ul className="horizontalMenu">
                    {apps.map((app, index) => (
                      <li key={index}>
                        <span className="menuItem"><NavLink to={app.path}>{app.label}</NavLink></span>
                      </li>
                    ))}
                  </ul>
                </li>
                
                <li><span className="menuCategory websites">Websites</span>
                  <ul className="horizontalMenu">
                  {websites.map((website, index) => (
                    <li key={index}>
                      <span className="menuItem"><NavLink to={website.path}>{website.label}</NavLink></span>
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
        <Route path="/react-routes/:id" element={<Project />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
