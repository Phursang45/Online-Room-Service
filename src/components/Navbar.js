import React from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container-fluid">
        <b>
          <a class="navbar-brand" href="#">
            Room Service
          </a>
        </b>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search for anything"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Login
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <button>Sign Up</button>
              </a>
            </li>
          </ul> 
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
