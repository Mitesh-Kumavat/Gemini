import React from 'react'
import { assets } from '../assets/assets'
import './Sidebar.css'
import { useState } from 'react'

function Sidebar() {

    const [extended, setExtended] = useState(false);


    return (
        <div className='sidebar '>
            <div className="top" >
                <img src={assets.menu_icon} onClick={() => {
                    setExtended(!extended)
                }} className='menu' alt="" />
                <div className='new-chat'>
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p className=''>New Chat</p> : null}
                </div>
                {extended ?
                    <div className='recent'>
                        <p className='recent-title'>Recent</p>
                        <div className='recent-entry'>
                            <img src={assets.message_icon} alt="" />
                            <p>what is React...?</p>
                        </div>
                    </div> : null}
            </div>


            <div className="bottom">
                <div className='bottom-item recent-entry'>
                    <img src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={assets.history_icon} alt="" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={assets.setting_icon} alt="" />
                    {extended ? <p>Setting</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar