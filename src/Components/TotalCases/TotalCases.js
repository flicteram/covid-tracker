import React from 'react'
import './TotalCases.css'
import globe from '../Images/earth.png'

function TotalCases({totalCases,todayCases,perOneMillion,tests}){


    return(
        
        <div className='totalContainer'>
            <div className='total'>
                <h2 className='totalTitle'>Total cases</h2>
                <img className='globe' src={globe}/>
            </div>
            <p className='confirmed'><span className='confirmedTotal'>{totalCases.toLocaleString()}</span><span className={todayCases!==0?'todayConfirmed':'todayConfirmedNone'}>+{todayCases.toLocaleString()}</span></p>
            <p>
                <span className='perMilion'>{perOneMillion.toLocaleString()} per million</span>
                <span className='point'>•</span> 
                <span className='tested'>{tests.toLocaleString()} tested</span> 
            </p>
        </div>
    )
}

export default TotalCases
