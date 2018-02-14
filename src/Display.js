import React from 'react'

const Display = ({active, stored, history}) => (
  <div>
    <div>
      {history.join(' ')}
    </div>
    <div>
      {active || stored}
    </div>
  </div>
)

export default Display