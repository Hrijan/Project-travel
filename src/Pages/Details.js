import React from 'react'
import { useParams } from 'react-router-dom'
import TrekPages from '../TrekPages'

export default function Details() {
    let {id} = useParams()
    let display = TrekPages.find((a) => a.id == id)
  return (
    <div className='details'>
      <div className="image-part">
        <img src={display.image} alt="" />
        <div className="overlay"></div>
        <h1>{display.name}</h1>
      </div>
      <p>{display.desc}</p>

      <div className="book-now">
        <button type="button" class="btn btn-outline-success">Book This Trek Now!</button>
      </div>
    </div>
  )
}
