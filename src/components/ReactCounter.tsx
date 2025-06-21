import { useState } from 'react';

export default function ReactCounter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #61dafb', 
      borderRadius: '8px',
      backgroundColor: '#f0f8ff'
    }}>
      <h3>React Counter Component</h3>
      <p>This is a React component with client-side interactivity. JS is downloaded as a static resource 
        and executed in the browser, see console log.</p>
      <p>Count: {count}</p>
      <button 
        onClick={() => {
          console.log(`Incrementing counter to ${count + 1} - Executing in browser`)
          setCount(count + 1)
        }}
        style={{
          padding: '8px 16px',
          backgroundColor: '#61dafb',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Increment
      </button>
      <button 
        onClick={() => {
          console.log(`Decrementing counter to ${count - 1} - Executing in browser`)
          setCount(count - 1)
        }}
        style={{
          padding: '8px 16px',
          backgroundColor: '#ff6b6b',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginLeft: '8px'
        }}
      >
        Decrement
      </button>
    </div>
  );
}
