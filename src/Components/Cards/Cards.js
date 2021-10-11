import React from 'react'
import TotalCases from '../TotalCases/TotalCases'
import Active from '../Active/Active'
import Recovered from '../Recovered/Recovered'
import Deaths from '../Deaths/Deaths'
import './Cards.css'

function Cards({totalCases
    ,todayCases
    ,perOneMillion
    ,tests
    ,activeTotal
    ,critical
    ,activeYesterday
    ,recovered
    ,todayRecovered,
    recoveredPercentage,
    deaths,
    todayDeaths,
    deathsPerOneMillion}){
    return(
        <div className='cardsContainer'>

            <TotalCases totalCases={totalCases} todayCases={todayCases} perOneMillion={perOneMillion} tests={tests}/>
            <Active  activeTotal={activeTotal} critical={critical} activeYesterday={activeYesterday}/>
            <Recovered recovered={recovered} todayRecovered={todayRecovered} recoveredPercentage={recoveredPercentage}/>
            <Deaths deaths={deaths} todayDeaths={todayDeaths} deathsPerOneMillion={deathsPerOneMillion}/>


        </div>
    )
}

export default Cards