import { memo, useState } from 'react';
import { Trans } from 'react-i18next';
import { RiReactjsFill } from 'react-icons/ri';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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
      <div className="experience-page-content">
        <VerticalTimeline>
          <EducationTimeline />
        </VerticalTimeline>
      </div>
    </div>
  );
});

const WorkTimeline = () => {};

const EducationTimeline = () => {
  return (
    <>
      <VerticalTimelineElement
        date="2011 - present"
        dateClassName="timeline-date"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<RiReactjsFill />}
      >
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2011 - present"
        dateClassName="timeline-date"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<RiReactjsFill />}
      >
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2016 - 2020"
        dateClassName="timeline-date"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<RiReactjsFill />}
      >
        <h3 className="vertical-timeline-element-title">Technik informatyk</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Zespół Szkół Elektrycznych w Opolu
        </h4>
        <p>
          Kwalifikacja E12 Montaż i eksploatacja komputerów osobistych oraz
          urządzeń peryferyjnych
        </p>
      </VerticalTimelineElement>
    </>
  );
};

const PersonalTimeline = () => {};

export default ExperiencePage;
