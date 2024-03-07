import React from 'react'
import ic from '../assests/info.png'
import btc from '../assests/bitcoin.png'

const Sentiment = () => {
  return (
    <>
    <div className='sentimentwrap'><div className='senticont'>Sentiment</div>
    <div className='keyevents'>Key Events <img src={ic} alt='icon' width='15px'/></div>
    <div className='sentiinfowrap'>
        <div className='sentibox'>
            <div className='flexsentibox'>
                <div className='sentiboxicon'><img src={btc} alt='icon' width='40px'/></div>
                <div className='sentiboxcontent'><div className='headsentibox'>Lorem ipsum dolor sit amet consectetur. Dui vel
quis dignissim mattis enim tincidunt.</div><div className='bodysenti'>Lorem ipsum dolor sit amet consectetur. Dui vel
quis dignissim mattis enim tincidunt.</div></div>
            </div>
        </div>

        <div className='sentibox'>
            <div className='flexsentibox'>
                <div className='sentiboxicon'><img src={btc} alt='icon' width='40px'/></div>
                <div className='sentiboxcontent'><div className='headsentibox'>Lorem ipsum dolor sit amet consectetur. Dui vel
            quis dignissim mattis enim tincidunt.</div><div className='bodysenti'>Lorem ipsum dolor sit amet consectetur. Dui vel
            quis dignissim mattis enim tincidunt.</div></div>
            </div>


            



        </div>

        

    </div>
    <div className='keyevents'>Analysts Estimates <img src={ic} alt='icon' width='15px'/></div>
    <div className='aeflex'>
        <div className='circle'>76%</div>
        <div className='aedata'>
            <div className='flexdata'><div className='busy'>Busy</div><div className='bar'></div><div className='nu'>40%</div></div>
            <div className='flexdata'><div className='busy'>Hold</div><div className='bar1'></div><div className='nu'>80%</div></div>
            <div className='flexdata'><div className='busy'>Sell</div><div className='bar2'></div><div className='nu'>25%</div></div>
            {/* <div className='busy'>Hold</div>
            <div>Sell</div> */}
        </div>
    </div>
    </div>
    </>
  )
}

export default Sentiment