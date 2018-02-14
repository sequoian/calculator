import React from 'react'
import Button from './Button'

const Keypad = ({handleClick}) => (
  <div>
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
      />
      <Button
        name="8"
        onClick={handleClick}
      />
      <Button
        name="9"
        onClick={handleClick}
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
      />
      <Button
        name="5"
        onClick={handleClick}
      />
      <Button
        name="6"
        onClick={handleClick}
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
      />
      <Button
        name="2"
        onClick={handleClick}
      />
      <Button
        name="3"
        onClick={handleClick}
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
      />
      <Button
        name="."
        onClick={handleClick}
      />
      <Button
        name="="
        onClick={handleClick}
      />
    </div>
  </div>
)

export default Keypad