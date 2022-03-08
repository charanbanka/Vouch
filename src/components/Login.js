import React, { useEffect, useState } from 'react'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import './style.css'

const Login = () => {
    const initialValues = {email:"",password:""}
    const [formData,setFormData] = useState(initialValues)
    const [resData,setResData] = useState(initialValues)
    const [isAuth,setIsAuth] = useState(false)
    const baseUrl = "https://reqres.in/api/login/post";
    const handleChange =(e)=>{
        setFormData({...formData,[e.target.id]:e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        //console.log(formData)
        axios.post(baseUrl,formData).then((res)=>{
            console.log(res.data)
            //var {data} = res.data
            setIsAuth(true)
            setResData(res.data)
            console.log(resData)
            
        }).catch((err)=>console.log(err))
    }   
  useEffect(()=>{
      if(isAuth === true){
      if(resData.password===''){
          console.log("Missing password")
          alert("Missing password")
      } else{
          const token = jwt.sign({email:resData.email},"text")
          alert("token: "+token)
          console.log("token: "+token)
          setFormData(initialValues)
      }}
  },[resData])
  return (
    <div className='conatiner p-3 d-flex justify-content-around align-items-center'>
        <div className="d-flex flex-column align-items-center main" >
            <h2 className='text-dark'>Welcome Back</h2>
            <p>sub title text goes here</p>
        
            <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center" >
                <input type="email" id='email' className='w-100' placeholder="Enter your email" value={formData.email} onChange={handleChange} required/>
                <br/>
                <input type="text" id='password' className='w-100' placeholder="Password" value={formData.password} onChange={handleChange} />
                <br/>
                <button className="btn btn-dark w-100" type='submit' >Login</button>
                <div  className="d-flex justify-content-between">
                    <label className='text-dark' style={{fontSize:"12px",marginRight:"32px"}} >
                        <input type="checkbox" id='remember' defaultChecked value="" /> Remember Password
                    </label>
                    <p style={{fontSize:"12px"}} >Forget Password?</p>
                </div>
            </form>
        </div>
        <div style={{width:"60%",height:"450px"}} className="bg-dark d-none d-sm-block">
            <div>h</div>
        </div>
       
    </div>
  )
}

export default Login