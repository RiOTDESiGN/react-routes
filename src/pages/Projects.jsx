import React from 'react';
import { NavLink, Route, Routes } from "react-router-dom";
import { useSettings } from '../SettingsContext';
import { Page } from "./Page";
import { Project } from "./Project";
import { PageNotFound } from "./PageNotFound";

function HomePage({ t }) {
  return (
    <Page title={t("Projects.title")} icon="/assets/images/projects_icon.webp" alt="Projects">
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
        <div className="ProjectsLayout">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/react-routes/RNG">RNG</NavLink>
          <NavLink to="/react-routes/Mars">Mars</NavLink>
          <NavLink to="/react-routes/Drumpad">Drumpad</NavLink>
          <NavLink to="/react-routes/Dogfood">Dogfood</NavLink>
          <NavLink to="/react-routes/Newsfeed">Newsfeed</NavLink>
          <NavLink to="/react-routes/Calculator">Calculator</NavLink>
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
