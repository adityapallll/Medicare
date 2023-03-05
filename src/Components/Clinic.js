import React from 'react'
import doc1 from "../images/doctor-woman.png"
import doc2 from "../images/doctor-woman copy.png"
import doc3 from "../images/doctor-woman copy 2.png"

const Clinic = () => {
    return (
        <div className='holder2'>
            <div className='headings'>
                <p className='text2'>Clinic With Innovative</p>
                <p className='text3'>We provide the most full medical services, so every person could heave the oppurtunity to receive qualitative medical help.</p>
                <div className='Btn'>
                    <button className='btn1'>
                        Learn More
                    </button>
                </div>
            </div>
            <div className='card_log'>
                <div className='docf'>
                    <img className='doc-img1' src={doc1} alt="Loading" />
                    <p>Qualified Doctors</p>
                </div>
                <div className='docm'>
                    <img className='doc-img2' src={doc2} alt="Loading" />
                    <p>Emergency Care</p>
                </div>
                <div className='amb'>
                    <img className='doc-img3' src={doc3} alt="Loading" />
                    <p>24 Hours Service </p>
                </div>
            </div>
        </div>
    )
}

export default Clinic