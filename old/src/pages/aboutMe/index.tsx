import { memo } from 'react';
import { RiMailFill } from 'react-icons/ri';
import { SiLinkedin } from 'react-icons/si';

import { Card } from '@/components/card';
import { Trans } from '@/components/trans';

import styles from './style.module.scss';

const portraitUrl = new URL('../../assets/portrait.jpg', import.meta.url);

const AboutMePage = memo(function ExperiencePage() {
  return (
    <div>
      <span className={styles.title}>
        <Trans>pages.aboutMe</Trans>
      </span>
      <div className={styles.layout}>
        <Photo />
        <Card className={styles.card}>
          <p className={styles.hi}>
            <Trans>hi</Trans>
          </p>

          <Trans>aboutMe</Trans>

          <a
            href="https://linkedin.com/in/robin-schyboll"
            className={styles.link}
          >
            <SiLinkedin className={styles.icon} />
            https://linkedin.com/in/robin-schyboll
          </a>
          <div className={styles.link}>
            <RiMailFill className={styles.icon} />
            robin.schyboll@gmail.com
          </div>
        </Card>
      </div>
    </div>
  );
});

const Photo = memo(function Photo() {
  return (
    <div className={styles.photo}>
      <img className={styles.portrait} src={portraitUrl.pathname} />
    </div>
  );
});

export default AboutMePage;
