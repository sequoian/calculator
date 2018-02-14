import React from 'react'

const Display = ({active, stored}) => (
  <div>
    {active || stored}
  </div>
)

export default Display