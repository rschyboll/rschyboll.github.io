import { memo, useState } from 'react';
import { IoSchoolSharp } from 'react-icons/io5';
import { MdHourglassFull, MdOutlineWork } from 'react-icons/md';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Tag from '@/components/tag';
import { Trans } from '@/components/trans';

import './style.scss';

enum Bookmarks {
  Education,
  Work,
}

const ExperiencePage = memo(function ExperiencePage() {
  const [bookmark, setBookmark] = useState(Bookmarks.Work);

  return (
    <div className="experience-page">
      <div className="experience-page-bookmarks">
        <div
          onClick={() => setBookmark(Bookmarks.Education)}
          className={`experience-page-bookmark ${
            bookmark == Bookmarks.Education ? 'active' : ''
          }`}
        >
          <MdOutlineWork />
          <Trans>pages.education</Trans>
        </div>
        <div
          onClick={() => setBookmark(Bookmarks.Work)}
          className={`experience-page-bookmark ${
            bookmark == Bookmarks.Work ? 'active' : ''
          }`}
        >
          <IoSchoolSharp />
          <Trans>pages.experience</Trans>
        </div>
      </div>
      <div className="experience-page-content">
        <VerticalTimeline>
          {bookmark == Bookmarks.Education ? <EducationTimeline /> : null}{' '}
          {bookmark == Bookmarks.Work ? <WorkTimeline /> : null}{' '}
        </VerticalTimeline>
      </div>
    </div>
  );
});

const WorkTimeline = () => {
  return (
    <>
      <VerticalTimelineElement
        date="2020 - present"
        className="timeline-card"
        dateClassName="timeline-date"
        iconClassName="timeline-icon"
        icon={<IoSchoolSharp />}
      >
        <h3 className="vertical-timeline-element-title">Frontend developer</h3>
        <h4 className="vertical-timeline-element-subtitle">
          CONTROL Sp. z o.o.
        </h4>
        <div className="timeline-content-tags">
          <div className="timeline-content-tags-list">
            <Tag textColor="var(--tag-text-color)" color="var(--tag-color)">
              TypeScript
            </Tag>
            <Tag textColor="var(--tag-text-color)" color="var(--tag-color)">
              React
            </Tag>
            <Tag textColor="var(--tag-text-color)" color="var(--tag-color)">
              Redux
            </Tag>
            <Tag textColor="var(--tag-text-color)" color="var(--tag-color)">
              KeaJS
            </Tag>
            <Tag textColor="var(--tag-text-color)" color="var(--tag-color)">
              PrimeReact
            </Tag>
            <Tag textColor="var(--tag-text-color)" color="var(--tag-color)">
              LightningChartJS
            </Tag>
          </div>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2019 - 2020"
        dateClassName="timeline-date"
        iconClassName="timeline-icon"
        icon={<IoSchoolSharp />}
      >
        <h3 className="vertical-timeline-element-title">
          Junior flutter developer
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          CONTROL Sp. z o.o.
        </h4>
        <div className="timeline-content-tags">
          <div className="timeline-content-tags-list">
            <Tag textColor="var(--tag-text-color)" color="var(--tag-color)">
              Dart
            </Tag>
            <Tag textColor="var(--tag-text-color)" color="var(--tag-color)">
              Flutter
            </Tag>
            <Tag textColor="var(--tag-text-color)" color="var(--tag-color)">
              Redux
            </Tag>
          </div>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2018 - 2019"
        dateClassName="timeline-date"
        iconClassName="timeline-icon"
        icon={<IoSchoolSharp />}
      >
        <h3 className="vertical-timeline-element-title">
          Junior python developer
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          CONTROL Sp. z o.o.
        </h4>
        <div className="timeline-content-tags">
          <div className="timeline-content-tags-list">
            <Tag textColor="var(--tag-text-color)" color="var(--tag-color)">
              Python
            </Tag>
            <Tag textColor="var(--tag-text-color)" color="var(--tag-color)">
              PyQt
            </Tag>
            <Tag textColor="var(--tag-text-color)" color="var(--tag-color)">
              PySerial
            </Tag>
          </div>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        dateClassName="timeline-date"
        iconClassName="timeline-icon"
        icon={<MdHourglassFull />}
      />
    </>
  );
};

const EducationTimeline = () => {
  return (
    <>
      <VerticalTimelineElement
        date="2011 - present"
        dateClassName="timeline-date"
        iconClassName="timeline-icon"
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
        iconClassName="timeline-icon"
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
        dateClassName="timeline-date"
        iconClassName="timeline-icon"
        icon={<MdHourglassFull />}
      />
    </>
  );
};

export default ExperiencePage;
