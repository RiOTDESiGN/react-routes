import React from 'react';
import { NavLink, Route, Routes } from "react-router-dom";
import { useSettings } from '../SettingsContext';
import { Page } from "./Page";
import { Project } from "./Project";
import { PageNotFound } from "./PageNotFound";

import projects from '../assets/images/projects_icon.webp'
import projectsData from "../projects.json";

function ProjectsHome({ t }) {
  return (
<Page title={t("Projects.title")} icon={projects} alt="Projects">
      <div className="cardContainer">
        {projectsData.map((project, index) => (
          <div key={index} className={`projectCard ${index % 2 === 0 ? 'projectCardsLeft' : 'projectCardsRight'}`}>
            <h4 className="projectCardTitle">{project.name}</h4>
            <div className="cardContent" style={{ backgroundImage: `url(${project.image})`, backgroundRepeat: 'no-repeat' }}>
            </div>
            <div className={`projectSynopsis ${index % 2 === 0 ? 'projectSynopsisRight' : 'projectSynopsisLeft'}`}>
              <h4 className="projectCardTitleSynopsis">{project.name}: Case Study</h4>
              <p>Description: {project.description}</p>
              <p>Challenges:</p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae voluptatum saepe, est necessitatibus, inventore reprehenderit ea quo deleniti natus accusamus dolores explicabo? Officiis doloremque aperiam aspernatur quis eaque placeat, ipsa nesciunt perspiciatis optio assumenda ducimus quia repudiandae qui veritatis dolorem quisquam dolore officia odit inventore adipisci ullam? Laboriosam dignissimos officia quasi? Sequi, dolores quisquam. Exercitationem quas aperiam vero at. Vero laborum, consequatur libero perferendis itaque reprehenderit eos modi eaque adipisci aperiam officia a dignissimos hic et ad qui at ab sint numquam sunt suscipit impedit. Ipsum officia, earum fugiat architecto neque minus, vero facilis omnis, aperiam animi autem atque? Eaque.
              <p className="projectCardTechnologies">{project.type}</p>
            </div>
          </div>
        ))}
      </div>
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
        <Route path="/" element={<ProjectsHome t={t} />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
