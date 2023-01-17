import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoSchoolSharp } from 'react-icons/io5';
import { MdHourglassFull, MdOutlineWork } from 'react-icons/md';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Tag from '@/components/tag';
import { Trans } from '@/components/trans';
import { Technology, getTechnologyTitle } from '@/resources';

import { EducationModel, ExperienceModel } from './model';
import styles from './style.module.scss';

enum Bookmarks {
  Education,
  Work,
}

const ExperiencePage = memo(function ExperiencePage() {
  const [bookmark, setBookmark] = useState(Bookmarks.Work);

  return (
    <div className={styles.page}>
      <div className={styles.bookmarks}>
        <div
          onClick={() => setBookmark(Bookmarks.Education)}
          className={`${styles.bookmark} ${
            bookmark == Bookmarks.Education ? styles.active : ''
          }`}
        >
          <MdOutlineWork />
          <Trans>pages.education</Trans>
        </div>
        <div
          onClick={() => setBookmark(Bookmarks.Work)}
          className={`${styles.bookmark} ${
            bookmark == Bookmarks.Work ? styles.active : ''
          }`}
        >
          <IoSchoolSharp />
          <Trans>pages.experience</Trans>
        </div>
      </div>
      <Timeline bookmark={bookmark} />
    </div>
  );
});

interface TimelineProps {
  bookmark: Bookmarks;
}

const Timeline = memo(function Timeline(props: TimelineProps) {
  const { t } = useTranslation();

  return (
    <VerticalTimeline>
      {(props.bookmark == Bookmarks.Education
        ? EducationModel
        : ExperienceModel
      ).map((model) => {
        return (
          <VerticalTimelineElement
            key={model.title}
            date={
              model.date +
              ('present' in model && model.present ? ` - ${t('present')}` : '')
            }
            textClassName={styles.timelineElement}
            dateClassName={styles.timelineElementDate}
            iconClassName={styles.timelineElementIcon}
            icon={<model.icon />}
          >
            <TimelineElementBody {...model} />
          </VerticalTimelineElement>
        );
      })}
      <VerticalTimelineElement
        iconClassName={styles.timelineElementIcon}
        icon={<MdHourglassFull />}
      />
    </VerticalTimeline>
  );
});

interface TimelineElementBodyProps {
  title: string;
  subTitle: string;
  technologies: Technology[];
}

const TimelineElementBody = memo(function TimelineElementBody(
  props: TimelineElementBodyProps,
) {
  return (
    <>
      <h3 className={styles.timelineElementTitle}>
        <Trans>{props.title}</Trans>
      </h3>
      <h4 className={styles.timelineElementSubtitle}>
        <Trans>{props.subTitle}</Trans>
      </h4>
      <ul className={styles.technologyList}>
        {props.technologies.map((technology) => {
          return (
            <li key={technology}>
              <Tag className={styles.technologyTag}>
                {getTechnologyTitle(technology)}
              </Tag>
            </li>
          );
        })}
      </ul>
    </>
  );
});

export default ExperiencePage;
