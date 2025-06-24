

import React, { useState } from 'react'

const ModernCalculator = () => {

    const keys = ['(', ')', '%', 'AC', 7, 8, 9, '/', 4,5,6, '*',1,2,3,'-', 0, '.', '=', '+' ];
    const [display, setDisplay] = useState("");
    const [history, setHistory] = useState("");
    const [allHistory, setAllHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false)

    const Display = (key) => {

        if (key === "="){

            setHistory(display + " =")
            const result = eval(display)
            setAllHistory(prev => [display + "=" + result, ...prev])
            setDisplay(result)
            return;
        } 
        if(key === "AC"){
            setDisplay("")
            return
        }
        setDisplay((prev) => prev + key)
        
    }

    const displayHistory = () => {

        setShowHistory(prev => !prev)

    }

  return <>

  <button onClick={displayHistory} className='m-5 h-15 w-30 backdrop-brightness-95 bg-gray-700 text-emerald-300 relative'>Show History</button>

  {showHistory && <div className='absolute ml-10 h-60 w-80 bg-gray-500 text-emerald-400 flex flex-col gap-4 items-center pl-3 overflow-auto'>
    <h3 className='bg-black py-2 px-4 fixed mb-6'>All History</h3>

    {allHistory.map((history, index) => {
        return <p>
            {history}
        </p>
    })}
    </div>}

    <section className='bg-black/50 auto w-80 mx-auto my-6'>

<div className="bg-gray-600 w-full h-30 text-white flex flex-col gap-3 p-3 justify-end items-end ">
 <div className='text-emerald-400'>{history}</div>   
  <div> {display} </div>
</div>
        <div className="grid grid-cols-4 pt-5 space-x-4 space-y-4 p-4">
            {
                keys.map((key, index) => {
                    return <div key = {index} className=' bg-dark/90 text-white text-2xl h-10 w-18  flex justify-center border border-blue-200 cursor-pointer' onClick={() => Display(key)}> 
                    <p >{key}</p>
                    </div>
                })
            }

        </div>

    </section>

    </>

}

export default ModernCalculator