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
      return negate(state)
    case '.':
      return decimal(state)
    case 'b':
      return backspace(state)
    case 'c':
      return clear()
    default:
      console.log('invalid')
  }
}

function digit(key, state) {
  const active = state.activeNum
  let num
  if (active === null || active === "0") {
    num = key
  }
  else {
    num = active + key
  }

  return {
    ...state,
    activeNum: num
  }
}

function backspace(state) {
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

function decimal(state) {
  const active = state.activeNum
  let num = active
  if (active === null)
    num = '0.'
  else if (active.indexOf('.') < 0)
    num = active + '.'
  
  return {
    ...state,
    activeNum: num
  }
}

function negate(state) {
  const active = state.activeNum
  let num
  if (active === '0') return state
  if (active === null && state.storedNum)
    num = state.storedNum
  if (active[0] === '-')
    num = active.slice(1)
  else {
    num = '-' + active
  }
  
  return {
    ...state,
    activeNum: num
  }
}

function clear() {
  return {
    activeNum: '0',
    storedNum: null,
    operation: null
  }
}

export default operation