import './login.css'
import { useState } from 'react'
import axios from 'axios'
 import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../../redux/userReducer'
import { useHistory } from "react-router-dom";
  
function Login() {

  const history = useHistory();

  const dispatch = useDispatch()
   const [email,setEmail]=useState("")
  const [password,setPass]=useState("")
  const [error,setError]=useState(false)
  const [login,setLogin]=useState(false)
 
  const handleChange= async (e)=>{
    e.preventDefault()
    console.log(email,password)
    await  axios.post("http://localhost:4000/login",{email,password})
      .then((res)=>setLogin(true))
      .catch((err)=>setError(true))
    if(login)
    {
      dispatch(addUser({email,password,state:true}))
      alert("page loading..")
      setLogin(false)
      history.push('/')
    }
  }
  
  return (
    <div className='contianer'>
        <div className='wrapper'>
            <div className='cart'>
              <form onSubmit={handleChange}>
              <label htmlFor='2'>Email
                <input type='email' required id="2" onChange={(e)=>setEmail(e.target.value)}/>
              </label>
              <label htmlFor='3'>Password
                <input type='password' required id="3" onChange={(e)=>setPass(e.target.value)}/>
              </label>
              <input type='submit' value="SUBMIT"/>
              {error  ? <p>incorrect email or password.</p> : ""}
              </form>
            </div>
        </div>
    </div>
  )
}

export default Login
