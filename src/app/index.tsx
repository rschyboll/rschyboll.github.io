import { FC, createContext, useContext, useState } from 'react';

import AboutMePage from '@/pages/aboutMe';
import ExperiencePage from '@/pages/experience';
import FooterPage from '@/pages/footer';
import SkillsPage from '@/pages/skills';
import TitlePage from '@/pages/title';

import './style.scss';

export enum Themes {
  light = 'light-theme',
  dark = 'dark-theme',
}

export const ThemeContext = createContext({
  theme: Themes.light,
  setTheme: (theme: Themes) => {},
});

export const App: FC = () => {
  const [theme, setTheme] = useState(Themes.light);

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <AppLayout />
    </ThemeContext.Provider>
  );
};

const AppLayout: FC = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <div className={`layout-body ${themeContext.theme}`}>
      <section id="layout-title-page">
        <TitlePage />
      </section>
      <section id="layout-about-page">
        <AboutMePage />
      </section>
      <section id="layout-projects-page"></section>
      <section id="layout-skills-page">
        <SkillsPage />
      </section>
      <section id="layout-experience-page">
        <ExperiencePage />
      </section>
      <footer id="layout-footer-page">
        <FooterPage />
      </footer>
    </div>
  );
};
