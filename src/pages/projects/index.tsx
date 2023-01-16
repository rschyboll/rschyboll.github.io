import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Galleria } from 'primereact/galleria';
import { Image } from 'primereact/image';
import { memo, useCallback, useMemo, useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';

import { Card } from '@/components/card';
import { Trans } from '@/components/trans';
import {
  Project,
  Technology,
  getProjectImage,
  getProjectVideo,
  getTechnologyIcon,
  getTechnologyLogo,
} from '@/resources';
import { capitalizeFirstLetter } from '@/utils/string';

import styles from './style.module.scss';

interface ProjectDef {
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

const ProjectsDef: Record<Project, ProjectDef> = {
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

const ProjectsPage = memo(function ExperiencePage() {
  const [openedProject, setOpenedProject] = useState<null | Project>(null);

  const onDialogClose = useCallback(() => {
    setOpenedProject(null);
  }, []);

  const openDialog = useCallback((project: Project) => {
    setOpenedProject(project);
  }, []);

  return (
    <div>
      <span className={styles.title}>
        <Trans>pages.projects</Trans>
      </span>
      <div className={styles.projectsContainer}>
        {(Object.entries(ProjectsDef) as [Project, ProjectDef][]).map(
          ([project, projectDef]) => {
            return (
              <ProjectCard
                key={project}
                title={projectDef.title}
                date={projectDef.date}
                technologies={projectDef.technologies}
                image={getProjectImage(project)}
                onClick={() => openDialog(project)}
              />
            );
          },
        )}
      </div>
      <Dialog
        className={styles.dialog}
        visible={openedProject != null}
        onHide={onDialogClose}
        dismissableMask
        closable={false}
        header={<ProjectDialogHeader closeDialog={onDialogClose} />}
        appendTo={document.getElementById('dialog-container')}
      >
        {openedProject != null ? (
          <ProjectDialog
            project={openedProject}
            projectDef={ProjectsDef[openedProject]}
          />
        ) : null}
      </Dialog>
    </div>
  );
});

interface ProjectCardProps {
  date: string;
  title: string;
  technologies: Technology[];
  image: string;
  onClick: () => void;
}

const ProjectCard = memo(function ProjectCard(props: ProjectCardProps) {
  return (
    <div className={styles.card} onClick={props.onClick}>
      <img className={styles.cardImage} src={props.image} />
      <span className={styles.cardDate}>{props.date}</span>
      <div className={styles.cardTitleContainer}>
        <div className={styles.cardAdditionalInfo} />
        <span className={styles.cardTitle}>{props.title}</span>
        <span className={styles.cardAdditionalInfo}>
          {props.technologies.map((technology) => {
            return (
              <img
                key={technology}
                src={getTechnologyLogo(technology)}
                className={styles.cardTechnologyIcon}
              />
            );
          })}
        </span>
      </div>
    </div>
  );
});

const ProjectDialogHeader = memo(function ProjectDialogHeader(props: {
  closeDialog: () => void;
}) {
  return (
    <div className={styles.dialogHeader}>
      <div className={styles.dotContainer}>
        <div
          className={styles.dot}
          style={{ backgroundColor: 'rgb(237, 76, 92)' }}
        />
        <div
          className={styles.dot}
          style={{ backgroundColor: 'rgb(253, 203, 88)' }}
        />
        <div
          className={styles.dot}
          style={{ backgroundColor: 'rgb(120, 177, 89)' }}
        />
      </div>
      <Button
        onClick={props.closeDialog}
        className={`${styles.dialogCloseButton} p-button-rounded p-button-text p-button-secondary`}
        icon={<RiCloseLine size="1.5rem" />}
      />
    </div>
  );
});

interface ProjectDialogProps {
  project: Project;
  projectDef: ProjectDef;
}

const ProjectDialog = memo(function ProjectDialog(props: ProjectDialogProps) {
  const [currentItem, setCurrentItem] = useState(0);

  const renderItem = (item: [string, boolean, boolean]) => {
    if (item[1]) {
      return (
        <video
          key={item[0]}
          src={item[0]}
          controls
          className={item[2] ? styles.isMobile : undefined}
        />
      );
    } else {
      return (
        <Image
          key={item[0]}
          src={item[0]}
          className={`${styles.image} ${item[2] ? styles.isMobile : undefined}`}
          preview
        />
      );
    }
  };

  const allTechnologies = useMemo(
    () => [
      ...props.projectDef.technologies,
      ...(props.projectDef.additionalTechnologies != null
        ? props.projectDef.additionalTechnologies
        : []),
    ],
    [props.projectDef.technologies, props.projectDef.additionalTechnologies],
  );

  return (
    <div className={styles.dialogContent}>
      <Galleria
        onItemChange={(item) => {
          setCurrentItem(item.index);
        }}
        activeIndex={currentItem}
        className={styles.galleria}
        value={[
          [getProjectImage(props.project), false],
          ...props.projectDef.imagesAndDescriptions.map((image) => [
            image.image,
            image.isVideo,
            image.isMobile,
          ]),
        ]}
        item={(item: [string, boolean, boolean]) => {
          return renderItem(item);
        }}
        numVisible={5}
        circular
        showThumbnails={false}
        showIndicators
      />
      <div className={styles.cardMainTitle}>{props.projectDef.title}</div>
      <div className={styles.cardMainDescription}>
        <span>
          {Array.isArray(props.projectDef.description) ? (
            props.projectDef.description.map((description) => {
              return (
                <p className={styles.descriptonParagraph}>
                  <Trans>{description}</Trans>
                </p>
              );
            })
          ) : (
            <Trans>{props.projectDef.description}</Trans>
          )}
        </span>
        {props.projectDef.imagesAndDescriptions.map((image, index) => {
          return (
            <li
              key={index}
              className={`${styles.dialogDescription} ${
                index + 1 == currentItem ? styles.current : ''
              }`}
            >
              <Trans>{image.description}</Trans>
            </li>
          );
        })}
      </div>
      <div>
        <DialogTechnologies technologies={allTechnologies} />
      </div>
    </div>
  );
});

interface DialogTechnologiesProps {
  technologies: Technology[];
}

const DialogTechnologies = memo(function DialogTechnologies(
  props: DialogTechnologiesProps,
) {
  console.log('RENDER');

  return (
    <div className={styles.dialogTechnologies}>
      {props.technologies.map((technology) => {
        const Icon = getTechnologyIcon(technology);

        return (
          <div key={technology} className={styles.dialogTechnology}>
            <Icon style={{ width: '2rem', height: '2rem' }} />
            <span>{capitalizeFirstLetter(technology)}</span>
          </div>
        );
      })}
    </div>
  );
});

export default ProjectsPage;
