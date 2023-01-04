import { memo } from 'react';
import { RiCodeBoxLine } from 'react-icons/ri';

import styles from './style.module.scss';

const TitlePage = memo(function TitlePage() {
  return (
    <div className={styles.page}>
      <div className={styles.centerArea}>
        <RiCodeBoxLine className={styles.icon} />
        <h1 className={styles.name}>Robin Schyboll</h1>
        <span className={styles.position}> FULL-STACK DEVELOPER</span>
      </div>
    </div>
  );
});

export default TitlePage;
