import React from 'react'
import './style.css'

const Navbar = () => {
  return (
    <div className='container p-3 border-bottom d-flex flex-row justify-content-between' >
        <h4 className='text-dark'>ATools</h4>
        <div className='d-none d-sm-block'>
          <button type='button' className='btn btn-dark' style={{width:"140px",height:"40px",marginRight:"10px"}} > Start Free Trail</button>
          <button type='button'  className='btn btn-warning' style={{width:"140px",height:"40px"}} >Login</button>
        </div>
    </div>
  )
}

export default Navbar