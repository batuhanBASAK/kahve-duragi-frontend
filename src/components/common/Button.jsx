import React from 'react'

function Button({ children, onClick, style }) {
  return (
    <button className="cursor-pointer border border-blue-500 rounded-sm px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold transition duration-300 ease-in-out" onClick={onClick} style={style}>{children}</button>
  )
}

export default Button;