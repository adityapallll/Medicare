import React from 'react'
import OvalL from "../images/Oval Copy 2.png"

const Special = () => {
    return (
        <>
            <img src={OvalL} alt="loading..." className="oval-absol" />
            <div className='services_heading'>
                <p className='head1'>We Have The Best Specialist</p>
                <p className='head2'>We have a wide experience in experience design and strategy, <br /> with locally-rooted knowledge.</p>
            </div>
            <div className='card_holder'>
                <div className='card'>
                    <div className='naming'>
                        <p>Dr. Awaatif Al<br />
                            Dental Care</p>

                    </div>
                </div>
                <div className='card'>
                    <div className='naming'>
                        <p>
                            Dr. Filipa Gaspar<br />
                            Dental Care
                        </p>

                    </div>
                </div>
                <div className='card'>
                    <div className='naming'>
                        <p>
                            Dr. Sukhmeet Gorae<br />
                            Dental Care
                        </p>

                    </div>
                </div>
                <div className='card'>
                    <div className='naming'>
                        <p>
                            Dr. Siri Jakobsson<br />
                            Dental Care
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Special