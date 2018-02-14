import React from 'react'
import './Button.css'

const Button = ({name, label, onClick}) => (
  <button
    id={name}
    onClick={() => onClick(name)}
  >
    {label || name}
  </button>
)

export default Button