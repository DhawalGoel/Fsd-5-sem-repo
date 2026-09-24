import React from 'react'
import Student from './components/Student.jsx'
 const App = () => {
  return (
    <div style={{ display :'flex', gap:'10px' }}>

      <Student name="Alice" class="10th Grade" roll={1} />
      <br />
      <Student name="Bob" class="11th Grade" roll={2} />
      <br />
      <Student name="Charlie" class="12th Grade" roll={3} />
      <br />

    </div>
  )
}
export default App
