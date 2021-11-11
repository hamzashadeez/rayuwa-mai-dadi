import React from 'react'
import hamza from '../assets/hamza.jpg'

function Hamza() {
    return (
        <div className='my-3 bg-white shadow-sm rounded p-3 d-flex align-items-center justify-content-center'>
            <img alt='me' src={hamza} className='shadow-sm' style={{objectFit: 'contain',marginRight: "20px", width: '120px', borderRadius: "50%"}} />
            <div className='ml-2'>
                <h4>Hamza Shadeez</h4>
                <p className='text-muted mb-0'>Full Stack Dev/Podcaster</p>
                <p className='text-muted mt-0'><i>Barka da zuwa wannna shafi mai albarka</i></p>
            </div>
        </div>
    )
}

export default Hamza
