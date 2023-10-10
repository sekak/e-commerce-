import { useState } from 'react'
import './register.css'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

function Register() {
  const history = useHistory();

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPass]=useState("")
  const [error,setError]=useState(false)
   const handleChange=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:4000/register",{
      name,email,password
    }).then((res)=> {setError(false)}).catch((err)=>setError(true))
    !error && history.push("/login")
  }
  // const user = useSelector(state=> state.stateUser);
  // console.log(user)
  return (
    <div className='contianer'>
        <div className='wrapper'>
            <div className='cart'>
              <form onSubmit={handleChange}>
              <label htmlFor='1'>name
                <input type='text' id="1" required onChange={(e)=>setName(e.target.value)}/>
              </label>
              <label htmlFor='2'>Email
                <input type='email' required id="2" onChange={(e)=>setEmail(e.target.value)}/>
              </label>
              <label htmlFor='3'>Password
                <input type='password' required id="3" onChange={(e)=>setPass(e.target.value)}/>
              </label>
              <input type='submit' value="SUBMIT"/>
              {error  ? <p>email is already exist.</p> : ""}
              </form>
            </div>
        </div>
    </div>
  )
}

export default Register
