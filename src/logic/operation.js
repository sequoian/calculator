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
      return state
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
  const neg = (num) => {
    if (num[0] === '-')
      return num.slice(1)
    else {
      return '-' + num
    }
  }

  const active = state.activeNum
  if (active === '0') return state
  if (active === null && state.storedNum) {
    return {
      ...state,
      storedNum: neg(state.storedNum)
    }
  }
  else {
    return {
      ...state,
      activeNum: neg(active)
    }
  }
}

function clear() {
  return {
    activeNum: '0',
    storedNum: null,
    operation: null,
    error: false,
    history: []
  }
}

function op(key, state) {
  const {activeNum, storedNum, operation} = state
  let result = storedNum
  let history = state.history
  if (storedNum && activeNum && operation) {
    result = calculate(
      operation, 
      parseFloat(storedNum), 
      parseFloat(activeNum)
    )
    history = history.concat([activeNum, key])
  }
  else if (activeNum !== null) {
    result = activeNum
    history = history.concat([activeNum, key])
  }
  else if (storedNum !== null) {
    const lastElem = history[history.length-1]
    if (lastElem && lastElem.match(/[0-9]/)) {
      history = history.concat([key])
    }
    else if (lastElem) {
      history.pop()
      history.push(key)
    }
    else {
      history = history.concat([storedNum, key])
    }
  }

  return {
    activeNum: null,
    storedNum: result === undefined ? 'undefined' : result.toString(),
    operation: key,
    error: result === undefined ? true : false,
    history: history
  }
}

function equals(state) {
  const {activeNum, storedNum, operation} = state
  let result
  if (!operation) return state
  if (activeNum && !storedNum) {
    result = calculate(
      operation, 
      parseFloat(activeNum), 
      parseFloat(activeNum)
    )
  }
  if (storedNum && !activeNum) {
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
    error: result === undefined ? true : false,
    history: []
  }
}