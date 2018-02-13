function operation(key, state) {
  if (key.match(/[0-9]/)) {
    return digit(key, state)
  }
  else if (key.match(/[+\-*/%]/)) {
    return console.log('operation')
  }

  switch(key) {
    case '=':
      console.log('equals')
      break
    case 'n':
      console.log('negate')
      break
    case '.':
      console.log('decimal')
      break
    case 'b':
      return backspace(key, state)
    case 'c':
      console.log('clear')
      break
    default:
      console.log('invalid')
      break
  }
}

function digit(key, state) {
  const active = state.activeNum
  let num
  if (active === null || active === "0") {
    num = key
  }
  else {
    num = active.concat(key)
  }

  return {
    ...state,
    activeNum: num
  }
}

function backspace(key, state) {
  const active = state.activeNum
  let num
  if (active === null) return state
  if (active !== '0')
    num = active.slice(0, -1)
  if (!num)
    num = '0'
  return {
    ...state,
    activeNum: num
  }
}

export default operation