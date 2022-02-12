import React from 'react'
import heart from '../Images/heart.png'
import './Recovered.css'

function Recovered({ recovered,todayRecovered,recoveredPercentage }){

    
    return (
        <div className='recoveredContainer'>
            <div className='recovered'>
                <h2 className='recoveredTitle'>Recovered</h2>
                <img className='recoveredImg' alt={'heart'} src={heart}/>
            </div>
            <p className='recoveredP'><span className='recoveredTotal'>{recovered.toLocaleString()}</span><span className={todayRecovered!==0?'recoveredToday':'recoveredTodayNone'}>+{todayRecovered.toLocaleString()}</span></p>
            <p className='recoveredProcent'>{recoveredPercentage}% recovered</p>
        </div>
    )
}

export default Recovered