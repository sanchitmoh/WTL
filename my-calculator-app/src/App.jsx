import { useState } from 'react'
import './App.css'

function App() {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [operation, setOperation] = useState('+')
  const [result, setResult] = useState(null)

  // Handle calculation
  const calculate = () => {
    const num1 = parseFloat(input1)
    const num2 = parseFloat(input2)

    if (isNaN(num1) || isNaN(num2)) {
      alert('Please enter valid numbers')
      return
    }

    let calculatedResult

    switch (operation) {
      case '+':
        calculatedResult = num1 + num2
        break
      case '-':
        calculatedResult = num1 - num2
        break
      case '*':
        calculatedResult = num1 * num2
        break
      case '/':
        if (num2 === 0) {
          alert('Cannot divide by zero!')
          return
        }
        calculatedResult = num1 / num2
        break
      default:
        calculatedResult = 0
    }

    setResult(calculatedResult)
  }

  // Clear all fields
  const clearAll = () => {
    setInput1('')
    setInput2('')
    setOperation('+')
    setResult(null)
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: '50px auto' }}>
      <h1>Calculator</h1>

      <div>
        <label>First Number:</label><br />
        <input
          type="number"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          placeholder="Enter number"
          style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box' }}
        />
      </div>

      <div>
        <label>Operation:</label><br />
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box' }}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </div>

      <div>
        <label>Second Number:</label><br />
        <input
          type="number"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          placeholder="Enter number"
          style={{ width: '100%', padding: '8px', marginBottom: '15px', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={calculate}
          style={{
            flex: 1,
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Calculate
        </button>

        <button
          onClick={clearAll}
          style={{
            flex: 1,
            padding: '10px',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Clear
        </button>
      </div>

      {result !== null && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#e7f3ff', border: '1px solid #ccc' }}>
          <p><strong>Result: {result.toFixed(2)}</strong></p>
        </div>
      )}
    </div>
  )
}

export default App
