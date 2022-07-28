import { memo, useState } from 'react';
import { Trans } from 'react-i18next';
import { IoSchoolSharp } from 'react-icons/io5';
import { MdOutlineWork } from 'react-icons/md';
import { RiBookOpenLine, RiUserFill } from 'react-icons/ri';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Tag from '@/components/tag';

import './style.scss';

enum Bookmarks {
  Education,
  Work,
  Personal,
}

const ExperiencePage = memo(function ExperiencePage() {
  const [bookmark, setBookmark] = useState(Bookmarks.Work);

  return (
    <div className="experience-page">
      <div className="experience-page-title">
        <Trans>pages.experience</Trans>
      </div>
      <div className="experience-page-bookmarks">
        <div
          onClick={() => setBookmark(Bookmarks.Education)}
          className={`experience-page-bookmark ${
            bookmark == Bookmarks.Education ? 'active' : ''
          }`}
        >
          <IoSchoolSharp />
          <Trans>Wykształcenie</Trans>
        </div>
        <div
          onClick={() => setBookmark(Bookmarks.Work)}
          className={`experience-page-bookmark ${
            bookmark == Bookmarks.Work ? 'active' : ''
          }`}
        >
          <MdOutlineWork />
          <Trans>Zawodowe</Trans>
        </div>
        <div
          onClick={() => setBookmark(Bookmarks.Personal)}
          className={`experience-page-bookmark ${
            bookmark == Bookmarks.Personal ? 'active' : ''
          }`}
        >
          <RiUserFill />
          <Trans>Osobiste</Trans>
        </div>
      </div>
      <div className="experience-page-content">
        <VerticalTimeline>
          {bookmark == Bookmarks.Education ? <EducationTimeline /> : null}{' '}
          {bookmark == Bookmarks.Work ? <WorkTimeline /> : null}{' '}
          {bookmark == Bookmarks.Personal ? <PersonalTimeline /> : null}
        </VerticalTimeline>
      </div>
    </div>
  );
});

const WorkTimeline = () => {
  return (
    <>
      <VerticalTimelineElement
        date="2011 - present"
        dateClassName="timeline-date"
        iconStyle={{ background: 'var(--icon-background)', color: '#ffffff' }}
        icon={<IoSchoolSharp />}
      >
        <h3 className="vertical-timeline-element-title">
          Informatyka - stopień 2
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Politechnika Opolska
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2011 - present"
        dateClassName="timeline-date"
        iconStyle={{ background: 'var(--icon-background)', color: '#ffffff' }}
        icon={<IoSchoolSharp />}
      >
        <h3 className="vertical-timeline-element-title">
          Informatyka - stopień 2
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Politechnika Opolska
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>
    </>
  );
};

const EducationTimeline = () => {
  return (
    <>
      <VerticalTimelineElement
        date="2011 - present"
        dateClassName="timeline-date"
        iconStyle={{ background: 'var(--icon-background)', color: '#ffffff' }}
        icon={<IoSchoolSharp />}
      >
        <h3 className="vertical-timeline-element-title">
          Informatyka - stopień 2
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Politechnika Opolska
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2018 - 2022"
        dateClassName="timeline-date"
        iconStyle={{ background: 'var(--icon-background)', color: '#ffffff' }}
        icon={<IoSchoolSharp />}
      >
        <h3 className="vertical-timeline-element-title">
          Informatyka - stopień 1
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Politechnika Opolska
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2014 - 2018"
        dateClassName="timeline-date"
        iconStyle={{ background: 'var(--icon-background)', color: '#ffffff' }}
        icon={<RiBookOpenLine />}
      >
        <h3 className="vertical-timeline-element-title">Technik informatyk</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Zespół Szkół Elektrycznych w Opolu
        </h4>
        <div className="timeline-content-tags">
          <div className="timeline-content-tags-list">
            <Tag textColor="var(--tag-text-color)" color="var(--tag-color)">
              E12
            </Tag>
            <Tag textColor="var(--tag-text-color)" color="var(--tag-color)">
              E13
            </Tag>
            <Tag textColor="var(--tag-text-color)" color="var(--tag-color)">
              E14
            </Tag>
            <Tag textColor="var(--tag-text-color)" color="var(--tag-color)">
              E15
            </Tag>
            <Tag textColor="var(--tag-text-color)" color="var(--tag-color)">
              E16
            </Tag>
          </div>
        </div>
      </VerticalTimelineElement>
    </>
  );
};

const PersonalTimeline = () => {
  return (
    <>
      <VerticalTimelineElement
        date="2011 - present"
        dateClassName="timeline-date"
        iconStyle={{ background: 'var(--icon-background)', color: '#ffffff' }}
        icon={<IoSchoolSharp />}
      >
        <h3 className="vertical-timeline-element-title">
          Informatyka - stopień 2
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Politechnika Opolska
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2011 - present"
        dateClassName="timeline-date"
        iconStyle={{ background: 'var(--icon-background)', color: '#ffffff' }}
        icon={<IoSchoolSharp />}
      >
        <h3 className="vertical-timeline-element-title">
          Informatyka - stopień 2
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Politechnika Opolska
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>
    </>
  );
};

export default ExperiencePage;
