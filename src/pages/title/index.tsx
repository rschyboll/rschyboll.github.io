import { memo, useCallback, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { RiCodeBoxLine } from 'react-icons/ri';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { ThemeContext, Themes } from '@/app';

import styles from './style.module.scss';

const plFlagURL = new URL('@/assets/pl_flag.webp', import.meta.url);
const deFlagURL = new URL('@/assets/de_flag.png', import.meta.url);
const enFlagURL = new URL('@/assets/en_flag.webp', import.meta.url);

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
        <span className={styles.position}> FULL-STACK DEVELOPER</span>

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

  const setPlLanguage = useCallback(() => {
    i18n.changeLanguage('pl');
  }, []);

  const setDeLanguage = useCallback(() => {
    i18n.changeLanguage('de');
  }, []);

  const setEnLanguage = useCallback(() => {
    i18n.changeLanguage('en');
  }, []);

  console.log(i18n.language);

  return (
    <div className={styles.languageSwitcher}>
      <LanguageButton
        selected={i18n.language == 'pl'}
        image={plFlagURL}
        onClick={setPlLanguage}
      />
      <LanguageButton
        selected={i18n.language == 'de'}
        image={deFlagURL}
        onClick={setDeLanguage}
      />
      <LanguageButton
        selected={i18n.language == 'en'}
        image={enFlagURL}
        onClick={setEnLanguage}
      />
    </div>
  );
});

interface LanguageButtonProps {
  image: URL;
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
    >
      <img src={props.image.pathname} />
    </div>
  );
});

export default TitlePage;
