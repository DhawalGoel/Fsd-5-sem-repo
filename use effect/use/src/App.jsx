    import React,{useState , useEffect} from 'react'

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

useEffect(() => {
  console.log('Form Data Updated:', formData)
},[formData])

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
}
const handleSubmit = (e) => {
  e.preventDefault()
  alert('Form submitted successfully!')
  console.log(formData)
}

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="name"  placeholder='Enter your name' value={formData.name} onChange={handleChange}></input>
        <br />
        <input type="email" name="email"  placeholder='Enter your email' value={formData.email} onChange={handleChange}></input>
        <br />
        <input type="password" name="password"  placeholder='Enter your password' value={formData.password} onChange={handleChange}></input>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
