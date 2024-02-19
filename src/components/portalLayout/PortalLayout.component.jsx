import ContainerControl from "@components/formControls/Container.control";
import HeaderComponent from "@components/header/Header.component";
import NavComponent from "@components/nav/Nav.component";
import NavMovilComponent from "@components/nav/NavMovil.component";

const PortalLayout = ({ children }) => {
  return (
    <>
      <div className="portal">
        <div className="header">
          <HeaderComponent />
        </div>
        <div className="nav">
          <NavComponent />
        </div>
        <div className="section">
          <ContainerControl>{children}</ContainerControl>
        </div>
        <div className="footer">
          <NavMovilComponent />
        </div>
      </div>
    </>
  );
};

export default PortalLayout;
