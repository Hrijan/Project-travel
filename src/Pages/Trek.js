import React from 'react';
import { Link } from 'react-router-dom';
import TrekPages from '../TrekPages';
export default function Trek() {
  return (
    <div className='trek'>
      <h1>The Treks We Offer</h1>
      <ul>
        {TrekPages.map((a) => (
            <Link to={`/details/${a.id}`}><li><div className="overlay"></div><img src={a.image} alt="" /><span>{a.name}</span></li></Link>
        ))}
      </ul>
    </div>
  )
}
