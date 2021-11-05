import React from "react";
import styles from "../Header/header.module.scss";
import urls from "utils/urls";
interface Props {
    mobileNavVisible: boolean;
}
const MobileNav: React.FC<Props> = ({mobileNavVisible}) => {
    return (
        <div className={`${styles.mobileNav} ${mobileNavVisible ? styles.show : styles.hide}`}>
            <div className={styles.mobileNavContent}>
                { urls.links && (
                    Object.keys(urls.links).map(obj => {
                    if(obj == "donate") return <a className={styles.navActionButton} href={urls.links[obj].path}>{urls.links[obj].pathName}</a>
                    return <a className={styles.mobileNavLink} href={urls.links[obj].path}>{urls.links[obj].pathName}</a>
                    })
                )}
            </div>
        </div>
    );
};
export default MobileNav;
