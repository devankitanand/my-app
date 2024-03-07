import React from 'react'
import bitcoinlogo from '../assests/bitcoin.png'
import uparrow from '../assests/sort-up.png'
import eth from '../assests/ethereum.png'

const TrendingCoins = () => {
  return (
    <>
    <div className='trendingwrap'>
        <div className='tc'>TrendingCoins (24h)</div>
        <div className='chartwrap'>
            <div className='wrappertrend'>
            <img src={bitcoinlogo} width='30px' alt='bitcoin'/>
            <div className='cryptoinfo'>Bitcoin(BTC)</div>
            </div>
            
            <div className='priceinfo'> <img className='sortup' src={uparrow} width='20px' alt='arrow'/>8.24%</div>

            
        </div>

        <div className='chartwrap'>
            <div className='wrappertrend'>
            <img src={eth} width='30px' alt='bitcoin'/>
            <div className='cryptoinfo'>Ethereum(ETH)</div>
            </div>
            
            <div className='priceinfo'> <img className='sortup' src={uparrow} width='20px' alt='arrow'/>6.24%</div>

            
        </div>


        
    </div>
    </>
  )
}

export default TrendingCoins