import React from "react";
import styles from "./header.module.scss";
import { FiMenu } from "react-icons/fi";
import urls from "utils/urls";
import useHasScrolledDown from "utils/scrolledDown";
import MobileNav from "src/components/MobileNav";
const Header: React.FC = () => {
  const [mobileNavVisible, setMobileNavVisible] = React.useState(false);
  const hasScrolledDown = useHasScrolledDown();

  return (
    <nav className={`${styles.navigation} ${hasScrolledDown ? styles.withBg : ""}`}>
      <div className={styles.wrapper}>
        <a className={styles.logo} href="/">
          <img src="/mannaforce.png" />
        </a>
        <div className={`${styles.linkCollection}`}>
          {urls.links &&
            Object.keys(urls.links).map((obj) => {
              if (obj == "donate")
                return (
                  <a
                    className={styles.navActionButton}
                    href={urls.links[obj].path}
                  >
                    {urls.links[obj].pathName}
                  </a>
                );
              return (
                <a className={styles.navLink} href={urls.links[obj].path}>
                  {urls.links[obj].pathName}
                </a>
              );
            })}
        </div>
        <FiMenu
          className={styles.navMenuButton}
          onClick={() => setMobileNavVisible(!mobileNavVisible)}
        />
      </div>
      <MobileNav mobileNavVisible={mobileNavVisible} />
    </nav>
  );
};

export default Header;
