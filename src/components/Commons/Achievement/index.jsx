import React,{useState,useEffect} from 'react'
import "./Achievement.css"
import { FaAward, FaBuilding, FaUsersLine } from 'react-icons/fa6'
import Odometer from 'react-odometerjs'

const Achievement = () => {
    const [clients,setClients] = useState(0);
    const [properties,setProperties] = useState(0);
    const [awards,setAwards] = useState(0);

    useEffect(()=>{
        const timeOutId = setTimeout(()=>{
            setClients(20);
            setProperties(50);
            setAwards(89);
        },3000);

        return ()=>clearTimeout(timeOutId);
    },[])

    return (
    <div className='achievement-container'>
        {/* Start */}
        <div className="card">
            <div className="flex details">
                <div className="flex-center icon-wrapper">
                    <FaUsersLine/>
                </div>
                <div className="flex-center">
                    <Odometer value={clients} className='title'/>
                    <h1 className='title'>k+</h1>
                </div>
            </div>
            <small className="muted">Student</small>
        </div>
        {/* End */}

{/* Start */}
<div className="card">
            <div className='flex details'>
                <div className="flex-center icon-wrapper">
                    <FaBuilding/>
                </div>
                <div className="flex-center">
                    <Odometer value={properties} className='title'/>
                    <h1 className='title'>+</h1>
                </div>
            </div>
            <small className="muted">Seminars</small>
        </div>
        {/* End */}

        {/* Start */}
        <div className="card">
            <div className="flex details">
                <div className="flex-center icon-wrapper">
                    <FaAward/>
                </div>
                <div className="flex-center">
                    <Odometer value={awards} className='title'/>
                    <h1 className="title">+</h1>
                </div>
            </div>
            <small className="muted">Events</small>
        </div>
        {/* End */}


    </div>
    )
}

export default Achievement
