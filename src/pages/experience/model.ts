import { IoSchoolSharp } from 'react-icons/io5';

import { getTechnologyIcon } from '@/resources';

import { Technology } from './../../resources';

export const ExperienceModel = [
  {
    title: 'Frontend developer',
    subTitle: 'Control Sp. z o.o.',
    date: '2021',
    present: true,
    technologies: [
      Technology.typescript,
      Technology.react,
      Technology.redux,
      Technology.kea,
      Technology.primeReact,
      Technology.lightningchart,
    ],
    icon: getTechnologyIcon(Technology.react),
  },
  {
    title: 'Junior flutter developer',
    subTitle: 'Control Sp. z o.o.',
    date: '2020 - 2021',
    technologies: [Technology.dart, Technology.flutter, Technology.redux],
    icon: getTechnologyIcon(Technology.flutter),
  },
  {
    title: 'Junior python developer',
    subTitle: 'Control Sp. z o.o.',
    date: '2018 - 2020',
    technologies: [Technology.python, Technology.qt, Technology.pySerial],
    icon: getTechnologyIcon(Technology.python),
  },
];

export const EducationModel = [
  {
    title: 'education.university1',
    subTitle: 'education.university',
    date: '2022',
    present: true,
    technologies: [Technology.python],
    icon: IoSchoolSharp,
  },
  {
    title: 'education.university2',
    subTitle: 'education.university',
    date: '2018 - 2022',
    technologies: [
      Technology.python,
      Technology.cAndPlus,
      Technology.cSharp,
      Technology.postgreSQL,
    ],
    icon: IoSchoolSharp,
  },
];
