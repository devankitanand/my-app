import React from 'react'
import {ReactComponent as Getstartedimg} from '../assests/CryptoGuide.svg'
import arrow from '../assests/arrow.png'

const Getstarted = () => {
  return (
    <>
    <div className='getstartedwrap'>

    <div className='getstarted'>Get Started with KoinX </div><div className='getstarted'>for FREE</div>
    <div className='getstartedcontent'>With our range of features that you can equip for
         <div>free, KoinX allows you to be more educated and </div>
         <div>aware of your tax reports.</div>
         </div>
    <div className='Getstartedimg'><Getstartedimg/></div>
    <div className='getstartedbtn'>Get started for FREE <img className='arrow' width='15px'src={arrow} alt='arrow'/></div>
    </div>
    </>
  )
}

export default Getstarted