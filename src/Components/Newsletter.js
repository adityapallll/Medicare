import React from 'react'
import OvalCircle from "../images/Oval Copy 3.png"

const Newsletter = () => {
    return (
        <>
            <img src={OvalCircle} alt="loading..." className="oval-absoCircle" />
            <div className='news'>
                <h2>
                    Subscribe to Newsletter
                </h2>
                <p>We have a wide experience in experience design and strategy,</p>
                <div className='text_place'>
                    <input className='textField' type='text' placeholder='Enter your Email address' />
                    <button>Send Now</button>
                </div>
            </div>
        </>
    )
}

export default Newsletter