import client1 from "./assets/client-1.jpeg";
import client2 from "./assets/client-2.jpeg";
import client3 from "./assets/client-3.jpeg";
import client4 from "./assets/client-4.jpeg";
import client5 from "./assets/client-5.jpeg";
import building1 from "./assets/building-1.jpeg";
import building2 from "./assets/building-2.jpeg";
import building3 from "./assets/building-3.jpeg";
import agent1 from "./assets/agent-1.jpeg";
import agent2 from "./assets/agent-2.jpeg";
import agent3 from "./assets/agent-3.jpeg";
import agent4 from "./assets/agent-4.jpeg";
import agent5 from "./assets/agent-5.jpeg";
import agent6 from "./assets/agent-6.jpeg";
import { IoMdAnalytics} from "react-icons/io";
import { IoCallOutline ,IoLocationOutline } from "react-icons/io5";
import { GrUserExpert,GrUserManager } from "react-icons/gr";
import { MdOutlineSupportAgent,MdOutlineAlternateEmail } from "react-icons/md";
import { RiExchange2Fill } from "react-icons/ri";
import { CiFacebook,CiLinkedin } from "react-icons/ci";
import { FaInstagram, FaXTwitter, FaYoutube,FaDrawPolygon} from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiBlueprint } from "react-icons/si";


export const tabs = [
    {name:"Home",id:'hero'},
    {name:"About Us",id:'about'},
    {name:"Services",id:'services'},
    {name:"Properties",id:'properties'},
    {name:"Agents",id:'agents'}
]

export const whyChooseUs = [
  {
    title:"Unmatched Local Expertise",
    icon:<GrUserExpert/>,
    link:"",
  },
  {
    title:"Comprehensive Market Analysise",
    icon:<IoMdAnalytics/>,
    link:"",
  },
  {
    title:"Dedicated Client Support",
    icon:<MdOutlineSupportAgent/>,
    link:"",
  },
  {
    title:"Innovative Marketing Strategies",
    icon:<RiExchange2Fill/>,
    link:"",
  },
]
export const services = [
  {
    name:"General Contracting",
    icon:<SiBlueprint/>,
    description:`This involves overseeing the entire construction project from start to finish, 
        including hiring subcontractors, managing the budget, scheduling, and ensuring that the
        project meets all specifications and regulations.`,
  },
  {
    name:"Design-Build Services",
    icon:<FaDrawPolygon/>,
    description:`This service combines both the design and construction phases into a single 
       contract, streamlining the process and improving communication between the design and
        construction teams.

    `,
  },
  {
    name:"Project Management",
    icon:<GrUserManager/>,
    description:`Construction companies often provide project management services, which include 
       planning, coordinating, and overseeing projects to ensure they are completed on time, within 
       budget, and to the required quality standards.`,
  },
  
]


export const properties = [
  {
    title:"Spectacular Oceanfront Villa with Private Beach Access",
    image:building1,
    description:` Charming 3-bedroom home with a lush, fully-fenced garden, perfect for outdoor entertaining and relaxation. The property features a spacious living area, modern kitchen, and ample storage space `,
    price:"₹35 Lakhs",
    bedrooms:"2",
    bathrooms:"3",
    location:"Karan Nagar Gole Market Road, Karan Nagar, Srinagar, Jammu and Kashmir 190015",
  },
  {
    title:"Chic Downtown Loft with Panoramic City Views",
    image:building2,
    description:` This charming property boasts a warm and inviting home surrounded by a lush, well-manicured garden, perfect for relaxation and tranquility`,
    price:"₹90 Lakhs",
    bedrooms:"4",
    bathrooms:"6",
    location:"1, Dadri Main Rd, J Block, Block I, Sector 41, Noida, Uttar Pradesh 201303, India",
  },
  {
    title:"Majestic Napa Valley Estate with Vineyard and Winery",
    image:building3,
    description:`A sea-facing bungalow with a minimalist aesthetic, 
    featuring a calming color palette and large windows that frame the stunning ocean views, creating a serene and peaceful atmosphere`,
    price:"₹82 Lakhs",
    bedrooms:"3",
    bathrooms:"4",
    location:"103, Shree Laxmi Narayan, Limda Ln, Jamnagar, Gujarat 361001, India",
  },
]


export const agents = [
  {
    name:"Rahul Kaur",
    position:"team lead",
    profile:agent1,
    socialHandles:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Radhika Vasani",
    position:"Sponsorship head",
    profile:agent2,
    socialHandles:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Gauri Bhalla",
    position:"Marketing head",
    profile:agent3,
    socialHandles:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Kunal Singh",
    profile:agent4,
    position:"Sales head",
    socialHandles:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Daksh Choudhary",
    profile:agent5,
    position:"IT head",
    socialHandles:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Naina Gupta",
    profile:agent6,
    position:"HR head",
    socialHandles:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
]


export const clients = [
  {
    image:client1,
    name:'Kushagra Nigam',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
           veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud 
           exercitation ullamco laboris`
  },
  {
    image:client2,
    name:'Kavya Mathur',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  },
  {
    image:client3,
    name:'Ritesh Sanon',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
           veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud 
           exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`
  },
  {
    image:client4,
    name:'Arnav Mishra',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  },
  {
    image:client5,
    name:'Jaishree Malhotra',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  },

];

export const contactOptions = [
  {
    title:"Email",
    value:"devanshijaiswal7@gmail.com",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    title:"Phone Number",
    value:"+91-9161055529",
    icon:<IoCallOutline/>,
  },
  {
    title:"Address",
    value:"Bennett University, Greater Noida, India",
    icon:<IoLocationOutline/>,
  },
]

export const socialHandles = [
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

export const footer = [
  {
    title:"Explore",
    routes:[
      {name:"Home",id:'hero'},
      {name:"About Us",id:'about'},
      {name:"Services",id:'services'},
    ]
  },
  {
      title:"Properties",
      routes:[
        {name:"Properties",id:'properties'},
        {name:"Agents",id:'agents'},
        {name:"Contact Us",id:'contact'},
      ]
    },
  {
      title:"Quick Links",
      routes:[
        {name:"Privacy Policy"},
        {name:"Terms and Conditions"},
        {name:"Cookie Policy"},
      ]
    },
]

    