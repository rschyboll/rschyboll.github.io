import { FC, memo } from 'react';
import { IconType } from 'react-icons';
import { GiTortoise } from 'react-icons/gi';
import { RiReactjsFill } from 'react-icons/ri';
import {
  SiDart,
  SiFastapi,
  SiFlutter,
  SiPostgresql,
  SiPython,
  SiRedux,
  SiReduxsaga,
  SiTypescript,
} from 'react-icons/si';

import './style.scss';

console.log(Image);

const imageUrl = new URL(
  '../../assets/lightningchart.png?preset=thumbnail',
  import.meta.url,
);

const SkillsPage = memo(function SkillsPage() {
  return (
    <div className="skills-page">
      <p className="skill-page-title">UMIEJĘTNOŚCI</p>
      <ul className="skills-list">
        <Skill icon={RiReactjsFill} title="React" link="https://reactjs.org/" />
        <Skill icon={SiRedux} title="Redux" link="https://redux.js.org/" />
        <Skill
          image={imageUrl}
          title="LightningChart"
          link="https://www.arction.com/lightningchart-js/"
        />
        <Skill
          icon={SiTypescript}
          title="TypeScript"
          link="https://www.typescriptlang.org/"
        />
        <Skill icon={SiFlutter} title="Flutter" link="https://flutter.dev/" />
        <Skill icon={SiDart} title="Dart" link="https://dart.dev/" />
        <Skill
          icon={SiFastapi}
          title="FastAPI"
          link="https://fastapi.tiangolo.com/"
        />
        <Skill icon={SiPython} title="Python" link="https://www.python.org/" />
        <Skill
          icon={GiTortoise}
          title="TortoiseORM"
          link="https://tortoise-orm.readthedocs.io/en/latest/"
        />
        <Skill
          icon={SiPostgresql}
          title="PostgreSQL"
          link="https://www.postgresql.org/"
        />
      </ul>
    </div>
  );
});

interface SkillProps {
  icon?: IconType;
  image?: URL;
  title: string;
  link: string;
}

const Skill: FC<SkillProps> = (props) => {
  return (
    <li className="skill">
      <a className="skill-link" href={props.link}>
        {props.icon ? <props.icon className={`skill-icon`} /> : null}
        {props.image ? <img src={props.image.pathname} height="45px" /> : null}
        <p className="skill-title">{props.title}</p>
      </a>
    </li>
  );
};

export default SkillsPage;
