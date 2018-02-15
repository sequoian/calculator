import React from 'react'
import './Button.css'

const Button = ({name, label, onClick, numeral, wide}) => {
  const className = [
    numeral ? 'numeral' : '',
    wide ? 'wide' : ''
  ]

  return (
    <button
      id={name}
      className={className.join(' ').trim() || null}
      onClick={() => onClick(name)}
    >
      {label || name}
    </button>
  )

}

export default Button