import ContainerControl from "@components/formControls/Container.control";
import HeaderComponent from "@components/header/Header.component";
import NavComponent from "@components/nav/Nav.component";
import NavMovilComponent from "@components/nav/NavMovil.component";
import styles from "./PortalLayout.module.scss";

const PortalLayout = ({ children }) => {
  return (
    <>
      <div className={styles.portal}>
        <div className={styles.header}>
          <HeaderComponent />
        </div>
        <div className={styles.nav}>
          <NavComponent />
        </div>
        <div className={styles.section}>
          <ContainerControl>{children}</ContainerControl>
        </div>
        <div className={styles.footer}>
          <NavMovilComponent />
        </div>
      </div>
    </>
  );
};

export default PortalLayout;
