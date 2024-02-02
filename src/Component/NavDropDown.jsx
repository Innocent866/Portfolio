import React from 'react'
import { Link } from 'react-router-dom'
import Download from './Download'

const NavDropDown = () => {
    
   
  return (
    <div>
         <ul className='d-flex justify-content-between gap-5 m-2 list-unstyled '>
        <Link className='text-decoration-none text-white' to='/project'><li>Project</li></Link>
         <Download/>
         <Link className='text-decoration-none text-white' to='/contact'><li>Contact</li></Link>
      </ul>
    </div>
  )
}

export default NavDropDown