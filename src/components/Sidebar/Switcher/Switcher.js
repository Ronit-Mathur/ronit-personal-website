import React, {useState} from 'react';
import styles from './Switcher.module.scss';
import window from 'global';
import root from 'window-or-global';

const Switcher = () => {
  // const [isDarkModeOn, setIsDarkModeOn] = useState(
  //   !!(root.localStorage.getItem('darkMode')
  //     || root.matchMedia('(prefers-color-scheme: dark)').matches)
  // );
  // const bodyEl = document.getElementsByTagName('body')[0];

  // function turnDarkMode() {
  //   setIsDarkModeOn(!isDarkModeOn);
  //   isDarkModeOn ? bodyEl.classList.add('dark') : bodyEl.classList.remove('dark');
  //   root.localStorage.setItem('darkMode', isDarkModeOn);
  // }
  //<input id='DarkModeSwitcher' type='checkbox' defaultChecked={!isDarkModeOn} />
  //<span className={`${styles['slider']}`} onClick={() => turnDarkMode()}/>

  return (
    <div className={styles['switch__container']}>
      <span className={styles['switch__text']}>Night mode</span>
      <label className={styles['switch']}></label>
    </div>
  );
};

export default Switcher;
