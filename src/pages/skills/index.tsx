import { memo } from 'react';

import { Trans } from '@/components/trans';
import { Technology, getTechnologyIcon, getTechnologyTitle } from '@/resources';

import SkillsModel from './model';
import styles from './style.module.scss';

const SkillsPage = memo(function SkillsPage() {
  return (
    <div className={styles.page}>
      <p className={styles.title}>
        <Trans>pages.skills</Trans>
      </p>
      <ul>
        {SkillsModel.map((skill) => {
          return <SkillCard {...skill} />;
        })}
      </ul>
    </div>
  );
});

interface SkillCardProps {
  technology: Technology;
  link: string;
}

const SkillCard = memo(function Skill(props: SkillCardProps) {
  const Icon = getTechnologyIcon(props.technology);

  return (
    <li className={styles.skillCard}>
      <a className={styles.skillLink} href={props.link}>
        <Icon className={styles.skillIcon} />
        <p className={styles.skillTitle}>
          {getTechnologyTitle(props.technology)}
        </p>
      </a>
    </li>
  );
});

export default SkillsPage;
