import { useState, useRef, useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Navigate, useNavigate } from "react-router-dom";
import './Create.css'

const Create = () => {
  const [title, setTitle] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')


  const { postData, data } = useFetch('https://jsonplaceholder.typicode.com/users', 'POST')
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    postData({ title, email, phone })
    console.log({ title, email, phone })
  }

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [data])

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>

        <label>
          <span>Recipe title:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe Email:</span>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </label>

        <label>
          <span>Phone:</span>
          <input
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
          />
        </label>

        <button className="btn">submit</button>
      </form>
    </div>

  )
}
export default Create;