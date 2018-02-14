import calculate from './calculate'

export default function operation(key, state) {
  if (key === 'c') return clear()

  if (state.error) return

  if (key.match(/[0-9]/)) {
    return digit(key, state)
  }
  else if (key.match(/[+\-*/%]/)) {
    return op(key, state)
  }

  switch(key) {
    case '=':
      return equals(state)
    case 'n':
      return negate(state)
    case '.':
      return decimal(state)
    case 'b':
      return backspace(state)
    default:
      console.log('invalid operation')
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
  if (!num || num === '-')
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
    operation: null,
    error: false
  }
}

function op(key, state) {
  const {activeNum, storedNum, operation} = state
  let result = storedNum
  if (storedNum && activeNum) {
    result = calculate(
      operation, 
      parseFloat(storedNum), 
      parseFloat(activeNum)
    )
  }
  else if (activeNum !== null) {
    result = activeNum
  }

  return {
    activeNum: null,
    storedNum: result === undefined ? 'undefined' : result.toString(),
    operation: key,
    error: result === undefined ? true : false
  }
}

function equals(state) {
  const {activeNum, storedNum, operation} = state
  let result
  if (activeNum && !storedNum) return state
  if (storedNum && !activeNum) {
    if (!operation) return state
    result = calculate(
      operation, 
      parseFloat(storedNum), 
      parseFloat(storedNum)
    )
  }
  else if (activeNum && storedNum) {
    result = calculate(
      operation,
      parseFloat(storedNum),
      parseFloat(activeNum)
    )
  }
  
  return {
    activeNum: null,
    operation: null,
    storedNum: result === undefined ? 'undefined' : result.toString(),
    error: result === undefined ? true : false
  }
}