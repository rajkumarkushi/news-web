import React from 'react'
import loading from './loading.gif'

const Spinner=()=> {
    return (
      <div className='text-center'>
        <img style={{width:'50px'}} src={loading} alt="download"/>
      </div>
    )
}

export default Spinner;
