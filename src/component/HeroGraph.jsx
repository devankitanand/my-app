import React, { useState, useEffect } from 'react';
import TradingViewWidget from './TradingViewWidget'; // Import the TradingViewWidget component
import { IoMdArrowDropup } from "react-icons/io";


const HeroGraph = () => {
  const [bitcoinData, setBitcoinData] = useState(null);
  // const [chartData, setChartData] = useState(null);
//   const [dates, setDates] = useState([]);
//   const [prices, setPrices] = useState([]);

  useEffect(() => {
    const fetchBitcoinData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch Bitcoin data');
        }
        const data = await response.json();
        setBitcoinData(data.bitcoin);
      } catch (error) {
        console.error('Error fetching Bitcoin data:', error);
      }
    };

    fetchBitcoinData();
  }, []);

  console.log(bitcoinData);
  return (
    <div className='w-[60%] h-[100vh] bg-white px-[30px] my-[21px] pt-[30px]'>
      <div className="flex items-center gap-2 bg-white">
        <img className="bg-white w-[36px] h-[36px] rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaqsX3-4VXmRrtGSqnD3lq2FPsge5NmPgJaAOTV2CLjQ&s" alt="" />
        <div className="flex gap-3 bg-white">
            <p className='bg-white text-2xl font-bold'>Bitcoin</p>
            <p className='bg-white text-[15px]'>BTC</p>
        </div>
        <p className='text-white border-none bg-gray-400 rounded px-[3px] ml-[15px]'>Rank #1</p>
      </div>
      {bitcoinData && (
        <div className='bg-white'>
          <div className="bg-white flex mt-[21px] gap-3 items-center">
            <p className='bg-white text-2xl font-bold'>${bitcoinData.usd}</p>
            <div className="border-none flex bg-green-100 items-center px-[4px] rounded">
                <IoMdArrowDropup className='text-green-500 bg-green-100' />
                <p className='text-[12px] font-semibold text-green-500 bg-green-100 py-[3px]'>2.51%</p>
            </div>
            <p className='bg-white text-[12px] text-bold text-gray-400'>(24H)</p>
          </div>
          <p className='bg-white text-[15px] font-semibold'>₹ {bitcoinData.inr}</p>
          {/* <p>24h Change: {bitcoinData.usd_24h_change}%</p> */}
          <div className="bg-white border-b mt-[6px] px-[6px]"></div>
        </div>
      )}
      {/* Render the TradingViewWidget component */}
      <div className="w-[100%] h-[66vh] p-[12px] bg-white">
        <div className="bg-white w-[100%] h-[100%]">
            <div className="bg-white flex justify-between">
                <h1 className='bg-white text-[15px] font-semibold mb-[12px]'>Bitcoin Price Chart (USD)</h1>
                <div className="bg-white flex gap-2">
                    <p className="bg-white">1H</p>
                    <p className="bg-white">24H</p>
                    <p className="bg-white">7D</p>
                    <p className="bg-white">1M</p>
                    <p className="bg-white">3M</p>
                    <p className="bg-white">6M</p>
                    <p className="bg-white">1Y</p>
                    <p className="bg-white">ALL</p>
                </div>
            </div>
            <TradingViewWidget className="bg-red-400" />
        </div>
      </div>
    </div>
  );
};

export default HeroGraph;
