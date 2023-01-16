import { IoSchoolSharp } from 'react-icons/io5';

import { Technology } from './../../resources';

export const ExperienceModel = [
  {
    title: 'Frontend developer',
    subTitle: 'Control Sp. z o.o.',
    date: '2020 - present',
    technologies: [
      Technology.typescript,
      Technology.react,
      Technology.redux,
      Technology.kea,
      Technology.primeReact,
      Technology.lightningchart,
    ],
    icon: IoSchoolSharp,
  },
  {
    title: 'Junior flutter developer',
    subTitle: 'Control Sp. z o.o.',
    date: '2019 - 2020',
    technologies: [Technology.dart, Technology.flutter, Technology.redux],
    icon: IoSchoolSharp,
  },
  {
    title: 'Junior flutter developer',
    subTitle: 'Control Sp. z o.o.',
    date: '2018 - 2019',
    technologies: [Technology.python, Technology.qt, Technology.pySerial],
    icon: IoSchoolSharp,
  },
];

export const EducationModel = [
  {
    title: 'education.university1',
    subTitle: 'education.university',
    date: '2019 - 2020',
    technologies: [],
    icon: IoSchoolSharp,
  },
  {
    title: 'education.university2',
    subTitle: 'education.university',
    date: '2019 - 2020',
    technologies: [Technology.python],
    icon: IoSchoolSharp,
  },
];
