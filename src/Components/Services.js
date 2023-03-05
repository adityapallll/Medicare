import React from 'react'
import tooth from "../images/Shape.png"
import lung from "../images/Shape (1).png"
import brain from "../images/Shape (2).png"
import book from "../images/Shape (3).png"

const Services = () => {
    return (
        <>
            <div className='services_heading'>
                <p className='head1'>Our Services</p>
                <p className='head2'>We provide the most full medical services, so every person could <br></br>heave the oppurtunity to receive qualitative medical help.</p>
            </div>
            <div className='card_holder'>
                <div className='cards'>
                    <img className='img-col' src={tooth} alt='loading..' />
                    <p>Dental Care</p>
                </div>
                <div className='cards card2'>
                    <img className='img-col' src={lung} alt='loading..' />
                    <p>Pulmonary</p>

                </div>
                <div className='cards'>
                    <img className='img-col' src={brain} alt='loading..' />
                    <p>Neurological</p>

                </div>
                <div className='cards'>
                    <img className='img-col' src={book} alt='loading..' />
                    <p>Prediatrics</p>
                </div>
            </div>
        </>
    )
}

export default Services