import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../assets/assets'
import { Context } from '../Context/Context'

function Main() {

    const { onSent, input, recentPrompt, showResult, loading, resultData, setInput } = useContext(Context)

    return (
        <>
            <div className='main'>
                <div className="nav">
                    <p>Gemini</p>
                    <img src={assets.user_icon} alt="" />
                </div>

                <div className="main-container">

                    {!showResult ? <>
                        <div className="greet">
                            <p><span>Hello, Dev</span></p>
                            <p>How can i help you today ?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautiful places to see on a upcoming road trip</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Brefly summarize this concept : Urbanization</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Brainstrom team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>How to improve the redundancy of the production level code</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                        : <div className='result'>
                            <div className="result-title">
                                <img src={assets.user_icon} alt="" />
                                <p>{recentPrompt}</p>
                            </div>

                            <div className="result-data">
                                <img src={assets.gemini_icon} alt="" />
                                {loading ? <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div> : <p className='' dangerouslySetInnerHTML={{ __html: resultData }}></p>}

                            </div>
                        </div>
                    }



                    <div className="main-bottom">
                        <div className="search-box">
                            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter prompt here ' />
                            <div className='flex'>
                                <img src={assets.gallery_icon} alt="" />
                                <img src={assets.mic_icon} alt="" />
                                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                            </div>
                        </div>
                        <p className='bottom-info'>
                            Gemini may display inaccurate info, including about people, so double-check its responses
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main