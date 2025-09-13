import React from 'react'
import Carousel from './common/Carousel'
import { ShopsImages } from "../shops";

function Gallery() {
  return (
    <section id="gallery" className="container mx-auto py-16">
      <h2 className="font-bold font-serif text-2xl mb-16 text-center">Galeri</h2>
      <Carousel shops={ShopsImages} />
    </section>
  )
}

export default Gallery