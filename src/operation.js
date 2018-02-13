const operation = (key, state) => {
  if (key.match(/[0-9]/)) {
    return console.log('digit')
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
      console.log('back')
      break
    case 'c':
      console.log('clear')
      break
    default:
      console.log('invalid')
      break
  }
}

export default operation