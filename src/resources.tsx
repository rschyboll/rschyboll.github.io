import type { IconType } from 'react-icons';
import { GiTortoise } from 'react-icons/gi';
import { GrStatusUnknown } from 'react-icons/gr';
import {
  SiDart,
  SiFastapi,
  SiFlutter,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiReduxsaga,
  SiTypescript,
} from 'react-icons/si';

export enum Technology {
  fastAPI = 'fastAPI',
  dart = 'dart',
  flutter = 'flutter',
  lightningchart = 'lightningchart',
  postgreSQL = 'postgreSQL',
  python = 'python',
  qt = 'qt',
  pySerial = 'pySerial',
  react = 'react',
  redux = 'redux',
  reduxSaga = 'reduxSaga',
  typescript = 'typescript',
  tortoiseORM = 'tortoiseORM',
  primeReact = 'primeReact',
  kea = 'kea',
  cAndPlus = 'c',
  cSharp = 'cSharp',
}

const TechnologyTitles: Record<Technology, string> = {
  [Technology.fastAPI]: 'FastAPI',
  [Technology.dart]: 'Dart',
  [Technology.flutter]: 'Flutter',
  [Technology.lightningchart]: 'LightningChart',
  [Technology.postgreSQL]: 'PostgreSQL',
  [Technology.python]: 'Python',
  [Technology.pySerial]: 'PySerial',
  [Technology.qt]: 'Qt',
  [Technology.react]: 'React',
  [Technology.redux]: 'Redux',
  [Technology.reduxSaga]: 'Redux-saga',
  [Technology.typescript]: 'Typescript',
  [Technology.tortoiseORM]: 'TortoiseORM',
  [Technology.primeReact]: 'PrimeReact',
  [Technology.kea]: 'Kea',
  [Technology.cAndPlus]: 'C/C++',
  [Technology.cSharp]: 'C#',
};

export function getTechnologyLogo(technology: Technology): string {
  return new URL(`./assets/logos/${technology}.svg`, import.meta.url).href;
}

export function getTechnologyIcon(technology: Technology): IconType {
  switch (technology) {
    case Technology.tortoiseORM:
      return GiTortoise;

    case Technology.fastAPI:
      return SiFastapi;

    case Technology.dart:
      return SiDart;

    case Technology.flutter:
      return SiFlutter;

    case Technology.postgreSQL:
      return SiPostgresql;

    case Technology.python:
      return SiPython;

    case Technology.redux:
      return SiRedux;

    case Technology.reduxSaga:
      return SiReduxsaga;

    case Technology.react:
      return SiReact;

    case Technology.typescript:
      return SiTypescript;

    case Technology.lightningchart:
      return (args: any) => {
        return <img {...args} src={getTechnologyLogo(technology)} />;
      };

    case Technology.primeReact:
      return (args: any) => (
        <img {...args} src={getTechnologyLogo(technology)} />
      );

    case Technology.kea:
      return (args: any) => (
        <img {...args} src={getTechnologyLogo(technology)} />
      );

    default:
      return GrStatusUnknown;
  }
}

export function getTechnologyTitle(technology: Technology): string {
  return TechnologyTitles[technology];
}

export enum Language {
  pl = 'pl',
  en = 'en',
  de = 'de',
}

export function getLanguageFlag(technology: Language): string {
  return new URL(`./assets/flags/${technology}.svg`, import.meta.url).href;
}

export enum Project {
  BCONF = 'bconf',
  CDE = 'cde',
  OCS = 'ocs',
  BITRENDER = 'bitrender',
}

export function getProjectCardImage(project: Project): string {
  return `./projectCards/${project}.webp`;
}

export function getProjectImage(project: Project, imageNr?: number): string {
  return new URL(
    `./assets/projects/${project}${imageNr?.toString() || ''}.webp`,
    import.meta.url,
  ).href;
}

export function getProjectVideo(project: Project, videoNr?: number): string {
  return `./videos/${project}${videoNr?.toString() || ''}.mp4`;
}
