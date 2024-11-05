import React from 'react'
import "./Logo.css"
import { MdRealEstateAgent } from 'react-icons/md'
import logo_gdg from "../../assets/logo_gdg.png"

const Logo = () => {
  return (
    <div className='logo'>
            <div className="icon">
                <img src={logo_gdg} alt="" />
            </div>
         <h1>GDG BU</h1>
    </div>
  )
}

export default Logo