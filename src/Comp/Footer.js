import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
        <div className="footerboxes">
            <div className="footer-box">
                <h1>QUICK LINKS</h1>
                <ul>
                    <li><Link to={"/about"}>About Us</Link></li>
                    <li><Link to={"/contact"}>Contact Us</Link></li>
                    <li><Link to={"blog"}>Blog</Link></li>
                </ul>
            </div>
            <div className="footer-box">
            <h1>TREKS</h1>
                <ul>
                    <li><Link to={"/details/3"}>Everest</Link></li>
                    <li><Link to={"/details/2"}>Annapurna</Link></li>
                    <li><Link to={"/details/1"}>Mardi Himal Trek</Link></li>
                </ul>
            </div>
            <div className="footer-box contact-footer">
            <h1>CONTACT US</h1>
                <ul>
                    <li><i class="bi bi-geo-alt-fill"></i> Bouddha, Kathmandu, Nepal</li>
                    <li><i class="bi bi-telephone-fill"></i> +977 9800000000</li>
                    <li><i class="bi bi-envelope-fill"></i> nepalhimalayanhiking@gmail.com</li>
                </ul>
            </div>
        </div>
        <div className="copyrights">
            <div className="copyright">
                Copyright © 2022- <Link to={"/"}>Nepal Everest Himalaya Hiking Pvt. Ltd.</Link>|  All Rights Reserved.
            </div>

            <div className="sociallinks">
                <div className="social-box">
                    <a href=""><i class="fa-brands fa-facebook"></i></a>
                </div>
                <div className="social-box">
                    <a href=""><i class="fa-brands fa-twitter"></i></a>
                </div>
                <div className="social-box">
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                </div>
                <div className="social-box">
                    <a href=""><i class="fa-brands fa-youtube"></i></a>
                </div>
                <div className="social-box">
                    <a href=""><i class="fa-brands fa-tumblr"></i></a>
                </div>
            </div>
        </div>
    </footer>
  )
}
