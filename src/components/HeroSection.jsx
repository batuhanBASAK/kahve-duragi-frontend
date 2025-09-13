import React from 'react'
import Button from "./common/Button";
import heroBgImg from "../assets/hero-bg-img.jpg";

function HeroSection() {
  return (
    <header className="px-4 py-16 container mx-auto grid place-items-center grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="flex flex-col items-start justify-center gap-4">
        <h1 className="text-6xl font-serif tracking-wider capitalize">Kahveni Al, Sükûnete Dön.</h1>
        <p className="text-lg">Şehrin gürültüsünden uzak, sıcak ve samimi bir mola seni bekliyor.</p>
        <div className="flex flex-col items-start justify-center gap-2">
          <Button style={{ width: "240px" }}>En Yakın Durağı Bul</Button>
          <Button style={{ width: "240px" }}>Bize Ulaşın</Button>
        </div>
      </div>
      <image><img src={heroBgImg} alt="Birisi cezvenin içindeki türk kahvesini fincana koymak için elini uzatıyor" className="w-full object-cover rounded-sm shadow-2xl" /></image>
    </header>
  )
}

export default HeroSection