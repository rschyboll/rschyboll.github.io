import {
  Project,
  Technology,
  getProjectImage,
  getProjectVideo,
} from '@/resources';

export interface ProjectDef {
  title: string;
  date: string;
  technologies: Technology[];
  additionalTechnologies?: Technology[];
  description: string | string[];
  isMobile?: boolean;
  imagesAndDescriptions: {
    image: string;
    description: string;
    isMobile?: boolean;
    isVideo?: boolean;
  }[];
  githubLink?: string;
}

export const ProjectsModel: Record<Project, ProjectDef> = {
  [Project.OCS]: {
    title: 'OCS',
    date: '2021',
    technologies: [Technology.typescript, Technology.react, Technology.redux],
    additionalTechnologies: [
      Technology.reduxSaga,
      Technology.kea,
      Technology.lightningchart,
      Technology.primeReact,
    ],
    description: 'ocs.main',
    imagesAndDescriptions: [
      {
        image: getProjectVideo(Project.OCS, 2),
        description: 'ocs.des1',
        isVideo: true,
      },
      {
        image: getProjectVideo(Project.OCS, 1),
        description: 'ocs.des2',
        isVideo: true,
      },
      {
        image: getProjectVideo(Project.OCS, 3),
        description: 'ocs.des3',
        isVideo: true,
      },
      {
        image: getProjectImage(Project.OCS, 2),
        description: 'ocs.des4',
        isVideo: false,
      },
    ],
  },
  [Project.BITRENDER]: {
    title: 'BITRENDER',
    date: '2020',
    technologies: [
      Technology.typescript,
      Technology.python,
      Technology.fastAPI,
    ],
    additionalTechnologies: [
      Technology.tortoiseORM,
      Technology.redux,
      Technology.kea,
      Technology.primeReact,
    ],
    description: ['bitrender.main', 'bitrender.main1'],
    imagesAndDescriptions: [
      {
        image: getProjectImage(Project.BITRENDER, 2),
        description: 'bitrender.des2',
      },
      {
        image: getProjectImage(Project.BITRENDER, 1),
        description: 'bitrender.des1',
      },
      {
        image: getProjectImage(Project.BITRENDER, 3),
        description: 'bitrender.des3',
      },
    ],
    githubLink: 'https://github.com/rschyboll/blender-rendering-server',
  },
  [Project.BCONF]: {
    title: 'BCONF',
    date: '2020',
    technologies: [Technology.dart, Technology.flutter],
    description: 'bconf.main',
    isMobile: true,
    additionalTechnologies: [Technology.redux],
    imagesAndDescriptions: [
      {
        image: getProjectImage(Project.BCONF, 1),
        description: 'bconf.des1',
        isVideo: false,
        isMobile: true,
      },
      {
        image: getProjectVideo(Project.BCONF, 1),
        description: 'bconf.des2',
        isVideo: true,
        isMobile: true,
      },
      {
        image: getProjectImage(Project.BCONF, 2),
        description: 'bconf.des3',
        isVideo: false,
        isMobile: true,
      },
    ],
  },
  [Project.CDE]: {
    title: 'CDE',
    date: '2018',
    technologies: [Technology.python, Technology.qt],
    description: 'cde.main',
    imagesAndDescriptions: [
      {
        image: getProjectImage(Project.CDE, 1),
        description: 'cde.des1',
        isVideo: false,
      },
      {
        image: getProjectImage(Project.CDE, 2),
        description: 'cde.des2',
        isVideo: false,
      },
      {
        image: getProjectImage(Project.CDE, 3),
        description: 'cde.des3',
        isVideo: false,
      },
    ],
  },
};
