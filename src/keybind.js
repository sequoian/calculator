export default function listener(event) {
  switch (event.key) {
    case '0':
      document.getElementById('0').click()
      break
    case '1':
      document.getElementById('1').click()
      break
    case '2':
      document.getElementById('2').click()
      break
    case '3':
      document.getElementById('3').click()
      break
    case '4':
      document.getElementById('4').click()
      break
    case '5':
      document.getElementById('5').click()
      break
    case '6':
      document.getElementById('6').click()
      break
    case '7':
      document.getElementById('7').click()
      break
    case '8':
      document.getElementById('8').click()
      break
    case '9':
      document.getElementById('9').click()
      break
    case 'Decimal':
    case '.':
      document.getElementById('.').click()
      break
    case 'Enter': 
      event.preventDefault()
      document.getElementById('=').click()
      break
    case 'Add':
    case '+':
      document.getElementById('+').click()
      break
    case 'Subtract':
    case '-':
      document.getElementById('-').click()
      break
    case 'Multiply':
    case '*':
      document.getElementById('*').click()
      break
    case 'Divide':
    case '/':
      document.getElementById('/').click()
      break
    case 'Clear':
    case 'c':
      document.getElementById('c').click()
      break
    case "Backspace":
      document.getElementById('b').click()
      break
    case 'n':
      document.getElementById('n').click()
      break
    default:
      return
  }
}