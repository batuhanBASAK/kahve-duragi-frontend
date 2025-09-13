import React from 'react'

function CardTitle({ as = "p", children }) {
  const Tag = as;
  return (<Tag className="font-semibold text-lg font-serif">{children}</Tag>)
}

export default CardTitle