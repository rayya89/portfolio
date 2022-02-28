import React from 'react'
import Photo from '../Assets/Me.jpg'

export default function About() {
  return (
    <div>
        <h2>About me</h2>
        <p>
        Hi! I'm Raya, a junior frontend developer and network and security engineer from Homs, Syria.
        This is my website, which I use to showcase everything I develope.
        I specialize in React development with a minimalist design and attention to detail.
        Why do I need minimalistic design and attention to detail, you might ask? Well, scroll down and let me convince you.
        </p>
        <img src={Photo} alt="me"/>
    </div>
  )
}
