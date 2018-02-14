import React from 'react'

const Button = ({name, label, onClick}) => (
  <button
    id={name}
    onClick={() => onClick(name)}
  >
    {label || name}
  </button>
)

export default Button