import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import TrekPages from '../TrekPages';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Trek() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='trek'>
      <h1>The Treks We Offer</h1>
      <ul>
        {TrekPages.map((a) => (
            <Link to={`/details/${a.id}`}><div data-aos= "fade-right"><li><div className="overlay"></div><img src={a.image} alt="" /><span>{a.name}</span></li></div></Link>
        ))}
      </ul>
    </div>
  )
}
