import React from 'react'
import './Display.css'

const Display = ({active, stored, history}) => (
  <div id="display">
    <div className={history.length > 0 ? 'history' : 'history empty'}>
      {history.join(' ')}
    </div>
    <div className="active">
      {active || stored}
    </div>
  </div>
)

export default Display