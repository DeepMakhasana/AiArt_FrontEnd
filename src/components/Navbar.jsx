import React from 'react'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
        <div className="container-fluid px-4">
          <a className="navbar-brand" href="/"><b>Ai Art</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02" style={{flexGrow: 0}}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2 me-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Generate Images</a>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
              <li className="nav-item border border-secondary rounded">
                <a className="nav-link px-4 text-center" aria-current="page" href="/login">Login</a>
              </li>
              <li className="nav-item border border-secondary rounded">
                <a className="nav-link px-4 text-center" href="/register">Register</a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
  )
}

export default Navbar
