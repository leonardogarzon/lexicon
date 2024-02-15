const HeaderComponent = () => {
  return (
    <nav className="application-bar application-bar-dark navbar navbar-expand-md">
      <div className="container-fluid container-fluid-max-xl">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link nav-link-monospaced" href="#1" role="button">
              <svg
                className="lexicon-icon lexicon-icon-product-menu-closed"
                focusable="false"
                role="presentation"
              >
                <use href="/images/icons/icons.svg#product-menu-closed"></use>
              </svg>
            </a>
          </li>
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
          <li className="nav-item">
            <a className="nav-link nav-link-monospaced" href="#1" role="button">
              <svg
                className="lexicon-icon lexicon-icon-plus"
                focusable="false"
                role="presentation"
              >
                <use href="/images/icons/icons.svg#plus"></use>
              </svg>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-monospaced" href="#1" role="button">
              <svg
                className="lexicon-icon lexicon-icon-simulation-menu-closed"
                focusable="false"
                role="presentation"
              >
                <use href="/images/icons/icons.svg#simulation-menu-closed"></use>
              </svg>
            </a>
          </li>
          <li className="dropdown nav-item">
            <a
              aria-expanded="false"
              aria-haspopup="true"
              className="dropdown-toggle nav-link nav-link-monospaced"
              data-toggle="dropdown"
              href="#1"
              role="button"
            >
              <svg
                className="lexicon-icon lexicon-icon-ellipsis-v"
                focusable="false"
                role="presentation"
              >
                <use href="/images/icons/icons.svg#ellipsis-v"></use>
              </svg>
            </a>
            <ul
              aria-labelledby="navbarDropdownMenuLink"
              className="dropdown-menu dropdown-menu-right"
            >
              <li>
                <a className="dropdown-item" href="#1">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#1">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#1">
                  Something else here
                </a>
              </li>
              <li className="dropdown-divider"></li>
              <li>
                <a className="dropdown-item" href="#1">
                  Separated link
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderComponent;
