import React from 'react'
import { useParams } from 'react-router-dom'
import TrekPages from '../TrekPages'

export default function Details() {
    let {id} = useParams()
    let display = TrekPages.find((a) => a.id == id)
  return (
    <div>
      <h1>{display.name}</h1>
      <p>{display.desc}</p>
    </div>
  )
}
