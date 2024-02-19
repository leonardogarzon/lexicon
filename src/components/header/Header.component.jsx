const HeaderComponent = () => {
  return (
    <nav className="application-bar application-bar-dark navbar navbar-expand-md">
      <div className="container-fluid container-fluid-max-xl">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link nav-link-monospaced" href="#1" role="button">
              <svg
                className="lexicon-icon lexicon-icon-angle-left"
                focusable="false"
                role="presentation"
              >
                <use href="/images/icons/icons.svg#angle-left"></use>
              </svg>
            </a>
          </li>
        </ul>
        <div className="navbar-title navbar-text-truncate">Lexicon Prototipe</div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link nav-link-monospaced" href="#1" role="button">
              <svg
                className="lexicon-icon lexicon-icon-cog"
                focusable="false"
                role="presentation"
              >
                <use href="/images/icons/icons.svg#cog"></use>
              </svg>
            </a>
          </li>     
        </ul>
      </div>
    </nav>
  );
};

export default HeaderComponent;
