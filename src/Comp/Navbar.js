import React from 'react'
import PageAbout from '../AboutPages'
import TrekPages from '../TrekPages'


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" id='navbarprime' style={{backgroundColor: "#007CBE"}}>
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{color: "#fff"}}>HOME</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "#fff"}}>
            ABOUT US
          </a>
          <ul className="dropdown-menu" style={{backgroundColor: "#007CBE"}}>
            {PageAbout.map((a) => (
                <li><a className="dropdown-item"  href="#" style={{color: "#fff"}}>{a.name}</a></li>
            ))}
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{color: "#fff"}}>INFO</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "#fff"}}>
            TREKKING
          </a>
          <ul className="dropdown-menu" style={{backgroundColor: "#007CBE"}}>
            {TrekPages.map((a) => (
                <li><a className="dropdown-item" href="#" style={{color: "#fff"}}>{a.name}</a></li>
            ))}
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "#fff"}}>
            PEAK CLIMBING
          </a>
          <ul className="dropdown-menu" style={{backgroundColor: "#007CBE"}}>
            <li><a className="dropdown-item dropright" href="#" style={{color: "#fff"}}>PEAK CLIMBING</a></li>
            <li><a className="dropdown-item" href="#" style={{color: "#fff"}}>EXPEDITION</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

  )
}
