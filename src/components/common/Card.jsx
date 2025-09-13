import React from 'react'

function Card({ children }) {
  return (
    <div className="w-80 h-96 shadow-2xl rounded-sm">
      {children}
    </div>
  )
}

export default Card