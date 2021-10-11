import React from 'react'
import mask from '../Images/mask.png'
import './Active.css'

function Active({activeTotal,critical,activeYesterday}){


    const todayYesterday = 
    activeTotal-activeYesterday>0?
    `+${(activeTotal-activeYesterday).toLocaleString()}`:
    (activeTotal-activeYesterday).toLocaleString()

    return (
        <div className='activeContainer'>
            <div className='active'>
            <h2 className='activeTitle'>Active cases</h2>
            <img className='mask' alt={'Man with mask'} src={mask}/>
            </div>
            <p className='activeP'><span className='activeToday'>{activeTotal.toLocaleString()}</span>
            <span className={activeTotal-activeYesterday===0?'activeTodayYesterdayNone':activeTotal-activeYesterday>0?'activeTodayYesterday':'activeTodayYesterdayGood'}>{todayYesterday}</span>
            </p>
            <p className='critical'>{critical.toLocaleString()} in critical condition</p>
        </div>
    )
}

export default Active