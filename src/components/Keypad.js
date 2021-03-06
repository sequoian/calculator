import React from 'react'
import Button from './Button'
import './Keypad.css'

const Keypad = ({handleClick}) => (
  <div id="keypad">
    <div>
      <Button
        label="C"
        name="c"
        onClick={handleClick}
      />   
      <Button
        label="←"
        name="b"
        onClick={handleClick}
      />
      <Button
        label="±"
        name="n"
        onClick={handleClick}
      />
      <Button
        label="÷"
        name="/"
        onClick={handleClick}
      />
    </div>
    <div>
      <Button
        name="7"
        onClick={handleClick}
        numeral
      />
      <Button
        name="8"
        onClick={handleClick}
        numeral
      />
      <Button
        name="9"
        onClick={handleClick}
        numeral
      />
      <Button
        label="×"
        name="*"
        onClick={handleClick}
      />
    </div>
    <div>
      <Button
        name="4"
        onClick={handleClick}
        numeral
      />
      <Button
        name="5"
        onClick={handleClick}
        numeral
      />
      <Button
        name="6"
        onClick={handleClick}
        numeral
      />
      <Button
        name="-"
        onClick={handleClick}
      />
    </div>
    <div>
      <Button
        name="1"
        onClick={handleClick}
        numeral
      />
      <Button
        name="2"
        onClick={handleClick}
        numeral
      />
      <Button
        name="3"
        onClick={handleClick}
        numeral
      />
      <Button
        name="+"
        onClick={handleClick}
      />
    </div>
    <div>
      <Button
        name="0"
        onClick={handleClick}
        numeral
        wide
      />
      <Button
        name="."
        onClick={handleClick}
        numeral
      />
      <Button
        name="="
        onClick={handleClick}
      />
    </div>
  </div>
)

export default Keypad