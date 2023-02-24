import { ReactNode, memo } from 'react';

import styles from './style.module.scss';

export interface CardProps {
  children: ReactNode;
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
}

export const Card = memo(function Card(props: CardProps) {
  return (
    <div className={`${styles.card} ${props.className || ''}`}>
      <Header />
      <div className={`${styles.body} ${props.bodyClassName || ''}`}>
        {props.children}
      </div>
    </div>
  );
});

export interface HeaderProps {
  className?: string;
}

const Header = memo(function Header(props: HeaderProps) {
  return (
    <div className={`${styles.header} ${props.className || ''}`}>
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
  );
});
