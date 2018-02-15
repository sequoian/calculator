export default function calculate(op, a, b) {
  switch (op) {
    case '+': return a + b
    case '-': return a - b
    case '*': return a * b
    case '/':
      if (b === 0) return undefined
      else return a / b
    default: return undefined
  }
}