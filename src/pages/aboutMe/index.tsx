import { memo } from 'react';
import { Trans } from 'react-i18next';

import { Card } from '@/components/card';

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
          <p>
            <Trans>hi</Trans>
          </p>

          <Trans>aboutMe</Trans>
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
