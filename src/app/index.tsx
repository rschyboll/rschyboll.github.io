import { SkillsPage } from "@/pages/skills";
import { FC } from "react";

import "./style.scss";

export const App: FC = () => {
  return (
    <div className="layout-body">
      <section id="layout-title-page"></section>
      <section id="layout-about-page"></section>
      <section id="layout-projects-page"></section>
      <section id="layout-skills-page">
        <SkillsPage />
      </section>
    </div>
  );
};
