import { memo, useCallback, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { RiCodeBoxLine } from 'react-icons/ri';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { ThemeContext, Themes } from '@/app';
import { Language, getLanguageFlag } from '@/resources';

import styles from './style.module.scss';

const TitlePage = memo(function TitlePage() {
  const themeContext = useContext(ThemeContext);

  const onThemeChange = useCallback((checked: boolean) => {
    if (checked) {
      themeContext.setTheme(Themes.dark);
    } else {
      themeContext.setTheme(Themes.light);
    }
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.centerArea}>
        <RiCodeBoxLine className={styles.icon} />
        <h1 className={styles.name}>Robin Schyboll</h1>
        <span className={styles.position}>FULL-STACK DEVELOPER</span>

        <DarkModeSwitch
          className={styles.darkModeIcon}
          checked={themeContext.theme == Themes.dark}
          onChange={onThemeChange}
          size="35px"
        />
      </div>
      <div className={styles.bottomArea}>
        <LanguageSwitcher />
      </div>
    </div>
  );
});

const LanguageSwitcher = memo(function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = useCallback((language: Language) => {
    i18n.changeLanguage(language);
  }, []);

  return (
    <div className={styles.languageSwitcher}>
      {Object.values(Language).map((language) => {
        return (
          <LanguageButton
            key={language}
            selected={language == i18n.language}
            image={getLanguageFlag(language)}
            onClick={() => changeLanguage(language)}
          />
        );
      })}
    </div>
  );
});

interface LanguageButtonProps {
  image: string;
  onClick: () => void;
  selected: boolean;
}

const LanguageButton = memo(function LanguageButton(
  props: LanguageButtonProps,
) {
  return (
    <div
      onClick={props.onClick}
      className={`${styles.languageButton} ${
        props.selected ? styles.selected : ''
      }`}
      style={{ background: `url(${props.image})` }}
    ></div>
  );
});

export default TitlePage;
