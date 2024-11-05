import React from 'react'
import './SocialHandles.css';
import { FaInstagram, FaXTwitter, FaYoutube,FaLinkedin} from "react-icons/fa6";

const SocialHandles = () => {
  return (
    <div className='handles-container'>
        {
            socialHandles.map((handle, index) => (
                <a href={handle.link} target='_blank' className='flex-center icon-wrapper' key={index}>
                    {handle.icon}
                </a>
            ))
            }
    </div>
  )
}

const socialHandles = [
  {
    name:"Instagram",
    icon:<FaInstagram />,
    link:"https://www.instagram.com/",
  },
  {
    name:"Linkedin",
    icon:<FaLinkedin/>,
    link:"https://www.linkedin.com/in/devanshi-jaiswal-b83774217/",
  },
  {
    name:"Twitter",
    icon:<FaXTwitter/>,
    link:"",
  },
  {
    name:"Youtube",
    icon:<FaYoutube/>,
    link:"httpshttps://www.youtube.com/://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  },
];

export default SocialHandles