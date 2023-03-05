import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Testi = () => {
    const [data, SetData] = useState([])

    useEffect(() => {
        axios.get("https://admin.tomedes.com/api/v1/get-reviews?page=1")
            .then(res => {
                console.log(res.data.data)
                SetData(res.data.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <div className='shell'>
                <h2 className='speech'>What Our Customers Say</h2>

                <div className='box-to-box'>
                    {data.map(rev => {
                        return (
                            <div key={rev.ID} className='reviews'>
                                <p>{rev.Reviews}</p>

                                <div className='detailing'>
                                    <img src={rev.Link} alt="loading....." />
                                    <div className="work">
                                        <p>{rev.Name}</p>
                                        <p className='comp'>{rev.Company} </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>

            </div>
        </>
    )
}

export default Testi