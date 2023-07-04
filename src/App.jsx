import React, { useState } from 'react';

import { HashRouter, NavLink, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Project } from './pages/Project';
import { Contact } from './pages/Contact';
import { PageNotFound } from './pages/PageNotFound';
import { ProjectsMenu } from './pages/ProjectsMenu';

import { Hjem } from './pages/Hjem';
import { Om } from './pages/Om';
import { Prosjekter } from './pages/Prosjekter';
import { Prosjekt } from './pages/Prosjekt';
import { Kontakt } from './pages/Kontakt';
import { SideIkkeFunnet } from './pages/SideIkkeFunnet';
import { ProsjekterMeny } from './pages/ProsjekterMeny';

import './assets/App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('english');

  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLanguageToggle = () => {
    setLanguage(language === 'english' ? 'norwegian' : 'english');
  };

  const getRoutes = () => {
    if (language === 'english') {
      return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<ProjectsMenu />}>
            <Route index element={<Projects />} />
            <Route path=":id" element={<Project />} />
          </Route>
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      );
    } else {
      return (
        <Routes>
          <Route path="/" element={<Hjem />} />
          <Route path="/Om" element={<Om />} />
          <Route path="/Prosjekter" element={<ProsjekterMeny />}>
            <Route index element={<Prosjekter />} />
            <Route path=":id" element={<Prosjekt />} />
          </Route>
          <Route path="/Kontakt" element={<Kontakt />} />
          <Route path="*" element={<SideIkkeFunnet />} />
        </Routes>
      );
    }
  };

  return (
    <HashRouter>
      <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <nav>
          <div id="toggle" className="mode" onClick={handleModeToggle}>
            {`${isDarkMode ? 'Light Mode' : 'Dark Mode'}`}
          </div>
          <div id="language-toggle" className="mode" onClick={handleLanguageToggle}>
            {language === 'english' ? 'Norsk' : 'English'}
          </div>
          <ul>
            <li>
              <NavLink to="/">{language === 'english' ? 'Home' : 'Hjem'}</NavLink>
            </li>
            <li>
              <NavLink to={language === 'english' ? 'About' : 'Om'}>{language === 'english' ? 'About' : 'Om'}</NavLink>
            </li>
            <li>
              <NavLink to={language === 'english' ? 'Projects' : 'Prosjekter'}>{language === 'english' ? 'Projects' : 'Prosjekter'}</NavLink>
            </li>
            <li>
              <NavLink to={language === 'english' ? 'Contact' : 'Kontakt'}>{language === 'english' ? 'Contact' : 'Kontakt'}</NavLink>
            </li>
          </ul>
        </nav>
        <div className="homeAnimation"></div>
        {getRoutes()}
      </div>
    </HashRouter>
  );
}

export default App;