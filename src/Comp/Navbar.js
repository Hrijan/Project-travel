import React, {useState, useEffect} from 'react'
import PageAbout from '../AboutPages'
import TrekPages from '../TrekPages'
import {Routes, Route, Link } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Details from '../Pages/Details'

export default function Navbar() {
  const [fixedClass, setFixedClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 350 ? setFixedClass('fixednav') : setFixedClass('');
    }
  };
  return (
    <>
    <nav className={`navbar navbar-expand-lg ${fixedClass}`} id='navbarprime' style={{backgroundColor: "#007CBE"}}>
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={"/"} className="nav-link active" aria-current="page" style={{color: "#fff"}}>HOME</Link>
        </li>
        <li className="nav-item dropdown">
          <Link to={'/about'} className="nav-link dropdown-toggle" href="#" role="button" aria-expanded="false" style={{color: "#fff"}}>
            ABOUT US
          </Link>
          <ul className="dropdown-menu" style={{backgroundColor: "#007CBE"}}>
            {PageAbout.map((a) => (
                <li><Link to={'/about'} className="dropdown-item" href="#" style={{color: "#fff"}}>{a.name}</Link></li>
            ))}
          </ul>
        </li>
        <li className="nav-item">
          <Link to={'/info'} className="nav-link active" aria-current="page" href="#" style={{color: "#fff"}}>INFO</Link>
        </li>
        <li className="nav-item dropdown">
          <Link to = {"/trek"} className="nav-link dropdown-toggle" href="#" role="button" aria-expanded="false" style={{color: "#fff"}}>
            TREKKING
          </Link>
          <ul className="dropdown-menu" style={{backgroundColor: "#007CBE"}}>
            {TrekPages.map((a) => (
                <li><Link to={`/details/${a.id}`} className="dropdown-item" href="#" style={{color: "#fff"}}>{a.name}</Link></li>
            ))}
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link to = {"/peak"} className="nav-link dropdown-toggle" href="#" role="button" aria-expanded="false" style={{color: "#fff"}}>
            PEAK CLIMBING
          </Link>
          <ul className="dropdown-menu" style={{backgroundColor: "#007CBE"}}>
            <li><Link to = {"/peak"} className="dropdown-item dropright" href="#" style={{color: "#fff"}}>PEAK CLIMBING</Link></li>
            <li><Link to = {"/expedition"} className="dropdown-item" href="#" style={{color: "#fff"}}>EXPEDITION</Link></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<Details />} />        
    </Routes>
    </>
  )
}
