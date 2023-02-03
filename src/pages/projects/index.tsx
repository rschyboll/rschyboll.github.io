import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Galleria } from 'primereact/galleria';
import { Image } from 'primereact/image';
import { memo, useCallback, useMemo, useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';

import { Trans } from '@/components/trans';
import {
  Project,
  Technology,
  getProjectCardImage,
  getProjectImage,
  getProjectVideo,
  getTechnologyIcon,
  getTechnologyLogo,
} from '@/resources';
import { capitalizeFirstLetter } from '@/utils/string';

import { ProjectDef, ProjectsModel } from './model';
import styles from './style.module.scss';

const MobileProjects = [Project.BCONF];

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
        {(Object.entries(ProjectsModel) as [Project, ProjectDef][]).map(
          ([project, projectDef]) => {
            return (
              <ProjectCard
                key={project}
                title={projectDef.title}
                date={projectDef.date}
                technologies={projectDef.technologies}
                image={getProjectCardImage(project)}
                onClick={() => openDialog(project)}
                isMobile={MobileProjects.includes(project)}
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
            projectDef={ProjectsModel[openedProject]}
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
  isMobile: boolean;
}

const ProjectCard = memo(function ProjectCard(props: ProjectCardProps) {
  return (
    <div
      className={`${styles.cardContainer} ${
        props.isMobile ? styles.mobile : ''
      }`}
    >
      <div className={styles.card} onClick={props.onClick}>
        <img className={`${styles.cardImage}`} src={props.image} />
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
          [
            getProjectImage(props.project),
            false,
            props.projectDef.isMobile == true ? true : false,
          ],
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
                <p key={description} className={styles.descriptonParagraph}>
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
