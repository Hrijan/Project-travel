import React from 'react';
import { Link } from 'react-router-dom';
import Peak from '../PeakClimb';

export default function PeakClimbing() {
  return (
    <div className='Peak'>
      <h1>PEAK CLIMBING</h1>
      <div className="">
        {Peak.map((a) => (
            <Link to={`/peakdetail/${a.id}`}>
            <div className="peaks">
                <div className="dark peakdark"></div>
                <img src={a.image} alt="" />
                <span className='peakname'>{a.name}</span>
                <span className='peakdescp'>
                    Cost: {a.cost}
                    <br />
                    Duration: {a.duration}
                </span>
                <Link to={`/peakdetail/${a.id}`}><button type="button" class="btn btn-outline-success">READ MORE</button></Link>
            </div>
            </Link>
        ))}
      </div>
      <div className="clear"></div>
    </div>
  )
}
