import { FC, createContext, useContext } from 'react';

import ExperiencePage from '@/pages/experience';
import FooterPage from '@/pages/footer';
import SkillsPage from '@/pages/skills';

import './style.scss';

enum Themes {
  light = 'light-theme',
  dark = 'dark-theme',
}

const ThemeContext = createContext(Themes.light);

export const App: FC = () => {
  return (
    <ThemeContext.Provider value={Themes.dark}>
      <AppLayout />
    </ThemeContext.Provider>
  );
};

const AppLayout: FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className={`layout-body ${theme}`}>
      <section id="layout-title-page"></section>
      <section id="layout-about-page"></section>
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
