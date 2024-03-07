import React from 'react'
// import './Performance.css';

function Performance() {
  return (
    <div className='w-[63%] h-[50vh] bg-white rounded py-[12px] px-[12px]'>
        <h1 className=' w-[100%] bg-white text-xl font-semibold'>Performance</h1>
        <div className="w-[100%] flex items-center justify-between bg-white px-[1px] my-[15px]">
            <div className="w-[12%] bg-red-300 flex flex-col">
                <p className='bg-white text-[13px] text-gray-500'>Today's Low</p>
                <p className='bg-white text-[14px] font-medium'>46,930,22</p>
            </div>
            <div className="relative w-[60%] h-[1vh]">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-red-500 rounded-t border border-yellow-500 border-opacity-50"></div>
                <hr className="mt-0 border-t border-white" />
            </div>
            <div className="flex flex-col bg-white ">
                <p className='bg-white text-[13px] text-gray-500'>Today's High</p>
                <p className='bg-white text-[14px] font-medium'>46,343,83</p>
            </div>
        </div>
        <div className="w-[100%] flex items-center justify-between bg-white px-[1px]">
            <div className="w-[12%] bg-red-300 flex flex-col">
                <p className='bg-white text-[13px] text-gray-500'>52W Low</p>
                <p className='bg-white text-[14px] font-medium'>16,930,22</p>
            </div>
            <div className="relative w-[60%] h-[1vh]">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-red-500 rounded-t border border-yellow-500 border-opacity-50"></div>
                <hr className="mt-0 border-t border-white" />
            </div>
            <div className="flex flex-col bg-white ">
                <p className='bg-white text-[13px] text-gray-500'>52W High</p>
                <p className='bg-white text-[14px] font-medium'>49,743,83</p>
            </div>
        </div>
        <div className="w-[100%] my-[12px] mt-[21px] py-[6px] bg-white ">
            <p className='bg-white mb-[12px] text-[16px]'>Fundamentals</p>
            <div className="flex justify-between bg-white">
                <div className="w-[48%] bg-white w-[50%] h-[60vh] bg-red text-[12px]">
                    <div className="w-[100%] flex bg-white justify-between">
                        <p className='bg-white text-gray-400'>Bitcoin Price</p>
                        <p className='bg-white'>$16,815,46</p>
                    </div>
                    <hr className='w-[100%] px-[12px] bg-white my-[12px]'/>
                    <div className="flex bg-white justify-between">
                        <p className='bg-white text-gray-400'>7d Low/7d High</p>
                        <p className='bg-white'>$16,382.07/$16,874.12</p>
                    </div>
                    <hr className='w-[100%] px-[12px] bg-white my-[12px]'/>
                    <div className="flex bg-white justify-between">
                        <p className='bg-white text-gray-400'>7d Low/7d High</p>
                        <p className='bg-white'>$16,382.07/$16,874.12</p>
                    </div>
                    <hr className='w-[100%] px-[12px] bg-white my-[12px]'/>
                    <div className="flex bg-white justify-between">
                        <p className='bg-white text-gray-400'>Trading Volume</p>
                        <p className='bg-white'>$23,249,202,782</p>
                    </div>
                    <hr className='w-[100%] px-[12px] bg-white my-[12px]'/>
                    <div className="flex bg-white justify-between">
                        <p className='bg-white text-gray-400'>Market Cap Rank</p>
                        <p className='bg-white'>$16,815,46</p>
                    </div>
                    <hr className='w-[100%] px-[12px] bg-white'/>
                </div>
                <div className="w-[48%] bg-white w-[50%] h-[60vh] bg-red text-[12px]">
                    <div className="w-[100%] flex bg-white justify-between">
                        <p className='bg-white text-gray-400'>Market Cap</p>
                        <p className='bg-white'>$16,815,46</p>
                    </div>
                    <hr className='w-[100%] px-[12px] bg-white my-[12px]'/>
                    <div className="flex bg-white justify-between">
                        <p className='bg-white text-gray-400'>Market Cap Dominance</p>
                        <p className='bg-white'>$16,382.07/$16,874.12</p>
                    </div>
                    <hr className='w-[100%] px-[12px] bg-white my-[12px]'/>
                    <div className="flex bg-white justify-between">
                        <p className='bg-white text-gray-400'>Volume / Market Cap</p>
                        <p className='bg-white'>$16,382.07/$16,874.12</p>
                    </div>
                    <hr className='w-[100%] px-[12px] bg-white my-[12px]'/>
                    <div className="flex bg-white justify-between">
                        <p className='bg-white text-gray-400'>All-Time High</p>
                        <p className='bg-white'>$23,249,202,782</p>
                    </div>
                    <hr className='w-[100%] px-[12px] bg-white my-[12px]'/>
                    <div className="flex bg-white justify-between">
                        <p className='bg-white text-gray-400'>All-Time Low </p>
                        <p className='bg-white'>$16,815,46</p>
                    </div>
                    <hr className='w-[100%] px-[12px] bg-white'/>
                </div>
            </div>
        </div>
    </div>

  
  )
}

export default Performance
