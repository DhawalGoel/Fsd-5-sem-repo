import React from 'react'

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
useEffect(() => {
},[formData])

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
}
const handleSubmit = (e) => {
  e.preventDefault()
  console.log(formData)
}

  return (
    <div>
      <form action="">
        <input type="text"  placeholder='Enter your name' value={formData.name} onChange={handleChange}/>
        <br />
        <input type="email"  placeholder='Enter your email' value={formData.email} onChange={handleChange}/>
        <br />
        <input type="password"  placeholder='Enter your password' value={formData.password} onChange={handleChange}/>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
