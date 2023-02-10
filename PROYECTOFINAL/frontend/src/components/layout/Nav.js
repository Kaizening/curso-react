import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div>
      <nav class="navbar navbar-dark bg-primary navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="/img/logo.png" width="100" alt="Transportes X" />
          </a>
          <h3>Transportes X</h3>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link " to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="/nosotros">
                  Nosotros
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="/novedades">
                  Novedades
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="/contacto">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
