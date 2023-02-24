import { memo } from 'react';

import { Links } from './model';
import styles from './style.module.scss';

const FooterPage = memo(function FooterPage() {
  return (
    <div className={styles.page}>
      <div className={styles.links}>
        {Object.entries(Links).map(([key, link]) => {
          return (
            <a key={key} href={link.link}>
              <link.icon className={styles.link} />
            </a>
          );
        })}
      </div>
      <Copyright />
    </div>
  );
});

const Copyright = memo(function Copyright() {
  return <span className={styles.copyright}>Copyright © Robin Schyboll</span>;
});

export default FooterPage;
