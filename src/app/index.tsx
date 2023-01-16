// @ts-ignore
import DarkThemeURL from 'primereact/resources/themes/arya-blue/theme.css?url';
// @ts-ignore
import LightThemeURL from 'primereact/resources/themes/saga-blue/theme.css?url';
import {
  FC,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import AboutMePage from '@/pages/aboutMe';
import ExperiencePage from '@/pages/experience';
import FooterPage from '@/pages/footer';
import ProjectsPage from '@/pages/projects';
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

  const changeTheme = useCallback((theme: Themes) => {
    setTheme(theme);
    const themeLink = document.getElementById('theme-link');
    if (themeLink instanceof HTMLLinkElement) {
      if (theme == Themes.light) {
        themeLink.href = LightThemeURL;
      } else {
        themeLink.href = DarkThemeURL;
      }
    }
  }, []);

  useEffect(() => {
    changeTheme(theme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: changeTheme }}>
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
      <section id="layout-projects-page">
        <ProjectsPage />
      </section>
      <SkillsPage />
      <section id="layout-experience-page">
        <ExperiencePage />
      </section>
      <footer id="layout-footer-page">
        <FooterPage />
      </footer>
      <div id="dialog-container"></div>
    </div>
  );
};
