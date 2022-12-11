import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className="footerboxes">
            <div className="footer-box">
                <h1>QUICK LINKS</h1>
                <ul>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Blog</a></li>
                </ul>
            </div>
            <div className="footer-box">
            <h1>TREKS</h1>
                <ul>
                    <li><a href="">Everest</a></li>
                    <li><a href="">Annapurna</a></li>
                    <li><a href="">Mardi Himal Trek</a></li>
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
                Copyright © 2022- <a href="">Nepal Everest Himalaya Hiking Pvt. Ltd.</a>|  All Rights Reserved.
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
