import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <header>
      <div className='headleft'>
        <div className="logo">
            <Link to={'/'}><img src={require("../img/logo.png")} alt="" /></Link>
        </div>
      </div>
      <div className='headright'>
        <div className="call">
            <img src="https://www.attractivetravelnepal.com/wp-content/themes/ultrabyte/images/telephone.png" alt="" />
            <div>
                <h3>Call Us</h3>
                <p>+9779800000000</p>
            </div>
        </div>

        <div className="email">
            <img src="https://www.attractivetravelnepal.com/wp-content/themes/ultrabyte/images/sdas4.png" alt="" />
            <div>
                <h3>Email Us</h3>
                <p>nepalhimalayanhiking@gmail.com</p>
            </div>
        </div>

        <div className="design">
            <button type="button" class="btn btn-outline-success">Design Your Trip</button>
        </div>
      </div>
    </header>

  )
}
