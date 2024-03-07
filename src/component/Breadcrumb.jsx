import React from 'react'
import Frwd from '../assests/fast-forward.png'

const Breadcrumb = () => {
  return (
    <div className='breadcrumbs'><span className='Cryptocurrencies'>Cryptocurrencies</span> <img className='breadicon' style={{ width: '10px', height: '10px' }} src={Frwd} alt='icon'/> <span className='Bitcoin'>Bitcoin</span> </div>
  )
}

export default Breadcrumb