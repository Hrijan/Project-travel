import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import TrekCarousel from '../TrekCarousel.js';

export default function Home() {
  return (
    <div>
      <div className="carousel">
        <OwlCarousel className='owl-theme' loop items={1}>
          {TrekCarousel.map((a) => (
            <div className="carousel-img">
              <div className="overlay"></div>
              <img src={a.image} alt="" />
              <span className="carouseltext">BEST OFFERS</span>
              <span className="carouseltext-large">{a.name}</span>
              <Link to={`/details/${a.id}`}><button type="button" class="btn btn-info">BOOK NOW</button></Link>
            </div>
          ))}
        </OwlCarousel>
      </div>

      <div className="description">
        <h1>Welcome to Nepal Everest Himalayan Hiking</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti asperiores similique, dolore ducimus eligendi consequuntur quasi aliquam molestiae assumenda omnis! Ab esse fugit repellat nemo quia praesentium cumque. Aliquam temporibus ea quaerat, ut facilis debitis dolorum ex iusto repellendus molestias ipsa dicta commodi alias eaque adipisci. Sit saepe, officia voluptas adipisci animi excepturi necessitatibus? Officia architecto qui voluptatibus eum ullam! Facilis laboriosam ut adipisci fugit tempore quos vel repudiandae ea hic dolor libero labore quo velit sapiente necessitatibus, molestiae amet obcaecati, id soluta, fugiat doloremque! Recusandae veritatis harum autem? Temporibus blanditiis in repudiandae itaque adipisci accusamus quisquam a officia officiis natus illum, rem minima distinctio ipsa doloremque, hic iusto tempore modi sit fugiat vel ullam, magnam voluptatum! Vitae eum earum magni porro non aut amet excepturi rem, quod vero dolore reprehenderit dolor eius voluptatum, dolorem inventore! Autem cupiditate minus sit molestiae inventore! Praesentium ad doloribus ut ratione cumque numquam quisquam laudantium sequi cum incidunt, animi suscipit expedita, voluptatem corrupti odio nulla excepturi quo, sit saepe cupiditate eveniet explicabo similique labore. Aliquam tenetur dolorem ipsa nam veniam ratione eaque iusto. Dolore doloribus iste, iusto non quas blanditiis rerum qui, quidem, tempore sapiente pariatur necessitatibus! Ducimus voluptatibus quam ea tenetur placeat ratione!</p>

        <Link to={'/about'}><button type="button" class="btn btn-outline-success">Read More</button></Link>
      </div>

      <div className="homeviews">
        <div className="imgview">
          <Link to={'/details/3'}>
            <div className="dark"></div>
            <img src={require("../images/everest.jpg")} alt="" />
            <span>Everest</span>
          </Link>
        </div>
        <div className="imgview">
          <Link to={'/details/7'}>
            <div className="dark"></div>
            <img src={require("../images/poonhill.jpeg")} alt="" />
            <span>Poonhill</span>
          </Link>
        </div>
        <div className="imgview">
          <Link to={'/details/4'}>
            <div className="dark"></div>
            <img src={require("../images/manaslu.jpg")} alt="" />
            <span>Manaslu</span>
          </Link>
        </div>
        <div className="imgview">
          <Link to={'/details/1'}>
            <div className="dark"></div>
            <img src={require("../images/mardi.jpeg")} alt="" />
            <span>Mardi</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
