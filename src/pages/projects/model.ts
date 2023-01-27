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
  imagesAndDescriptions: {
    image: string;
    description: string;
    isMobile?: boolean;
    isVideo?: boolean;
  }[];
}

export const ProjectsModel: Record<Project, ProjectDef> = {
  [Project.BCONF]: {
    title: 'BCONF',
    date: '2021',
    technologies: [Technology.dart, Technology.flutter],
    description: '',
    imagesAndDescriptions: [],
  },
  [Project.CDE]: {
    title: 'CDE',
    date: '2021',
    technologies: [Technology.python, Technology.qt],
    description: '',
    imagesAndDescriptions: [],
  },
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
    date: '2021',
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
        image: getProjectImage(Project.BITRENDER, 1),
        description: 'bitrender.des3',
      },
    ],
  },
};
