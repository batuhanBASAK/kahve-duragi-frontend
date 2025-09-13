import React from 'react'

function CardImage({ src, alt }) {
  return (
    <img src={src} alt={alt} className="w-full object-cover max-h-48 rounded-t-sm" />
  )
}

export default CardImage