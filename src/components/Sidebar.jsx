import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import './Sidebar.css'
import { useState } from 'react'
import { Context } from '../Context/Context';

function Sidebar() {

    const [extended, setExtended] = useState(false);
    const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

    const loadPrompt = async (prompt) => {
        console.log('load prompt called');

        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    return (
        <div className='sidebar '>
            <div className="top" >
                <img src={assets.menu_icon} onClick={() => {
                    setExtended(!extended)
                }} className='menu' alt="" />
                <div onClick={() => newChat()} className='new-chat'>
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p className=''>New Chat</p> : null}
                </div>
                {extended ?
                    <div className='recent'>
                        <p className='recent-title'>Recent</p>
                        {
                            prevPrompts.map((item, idx) => {
                                return (
                                    <div onClick={() => loadPrompt(item)} className='recent-entry'>
                                        <img src={assets.message_icon} alt="" />
                                        <p>{item.slice(0, 15)}...</p>
                                    </div>
                                )
                            })
                        }
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