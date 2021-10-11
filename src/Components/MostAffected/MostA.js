import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import {Context} from '../Context/Context'
import './MostA.css'

function MostA(){
    const {mostAffected,covid} = useContext(Context)


    let displayAffected = mostAffected.slice(0,5).map((item,index)=>
    <Link to={`/country/${item.country}`} key={index}>
        <div  className='mostAffectedItem'>
        <div className='mostAffectedTitle'>
            <img className='mostAffectedImg' alt={item.country} src={item.countryInfo.flag}/>
            <h2 className='mostAffectedName'>{item.country}</h2>
        </div>
        <h3 className='mostAffectedCases'>Cases</h3>
        <p className='mostAffectedCasesNumber'><span>{item.cases.toLocaleString()}</span><span className={item.todayCases!==0?'mostAffectedToday':'mostAffectedTodayNone'}>+{item.todayCases.toLocaleString()}</span></p>
        <p className='mostAffected100'>{Math.round(item.cases/covid.cases*100)}% of world total cases</p>
        </div>
    </Link>)
    return (
        <div className='mostAffectedContainer'>
            <div className='mostAffectedTopContainer'>
            <div className='redDot'></div>
            <h2 className='mostAffectedTop'>MOST AFFECTED COUNTRIES</h2>
            </div>
            <div className='mostAffectedCardsContainer'>   
            {displayAffected}
            </div>
            
        </div>
        
    )
}

export default MostA