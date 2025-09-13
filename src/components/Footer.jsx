import React from 'react'

function Footer() {
  return (
    <footer className="px-4 container mx-auto">
      <div className="py-16 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="grid place-items-center">
          <h2>
            <a className="text-green-800 hover:brightness-75 transition duration-300 ease-in-out font-serif text-4xl" href="#">Kahve Durağım</a>
          </h2>
        </div>

        <div>
          <h3 className="text-center lg:text-start font-semibold text-lg mb-2">Linkler</h3>
          <ul className="flex flex-col items-center lg:items-start justify-center gap-2">
            <li><a className="text-black hover:brightness-75 transition duration-300 ease-in-out" href="#about">Hakkımızda</a></li>
            <li><a className="text-black hover:brightness-75 transition duration-300 ease-in-out" href="#features">Ürünlerimiz</a></li>
            <li><a className="text-black hover:brightness-75 transition duration-300 ease-in-out" href="#gallery">Galeri</a></li>
            <li><a className="text-black hover:brightness-75 transition duration-300 ease-in-out" href="#contact">İletişim</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-center lg:text-start font-semibold text-lg mb-2">Legal</h3>
          <ul className="flex flex-col items-center lg:items-start justify-center gap-2">
            <li><a className="text-black hover:brightness-75 transition duration-300 ease-in-out" href="#">Gizlilik</a></li>
            <li><a className="text-black hover:brightness-75 transition duration-300 ease-in-out" href="#">Çerezler</a></li>
          </ul>
        </div>
      </div>
      <div className="grid place-items-center p-4">
        <small>Kahve Durağım &copy; 2025. Tüm hakları gizlidir.</small>
      </div>
    </footer>
  )
}

export default Footer