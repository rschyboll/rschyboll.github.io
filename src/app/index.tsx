import { FC } from 'react';

import ExperiencePage from '@/pages/experience';
import FooterPage from '@/pages/footer';
import SkillsPage from '@/pages/skills';

import './style.scss';

export const App: FC = () => {
  return (
    <div className="layout-body">
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
