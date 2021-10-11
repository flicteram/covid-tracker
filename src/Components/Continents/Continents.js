import React,{useContext} from "react";
import { Context } from "../Context/Context";
import {Link} from 'react-router-dom'
import "./Continents.css"

function Continents(){
    const {continents} = useContext(Context)
    const displayContinents = continents.map((item,index)=>
    <Link to={`/regions/${item.continent}`} key={index} className='continentItem' >
   
        <h2 className='continentTitle'>{item.continent}</h2>
        <h3 className='continentCases'>Cases</h3>
        <p className='continentTotalP'><span className='continentTotal'>{item.cases.toLocaleString()}</span><span className={item.todayCases!==0?'continentToday':'continentTodayNone'}>+{item.todayCases.toLocaleString()}</span></p>
        <p className='continentActiveP'><span className='continentActive'>{item.active.toLocaleString()} active</span><span className='dotContinent'>•</span><span className='continentCritical'>{item.critical.toLocaleString()} critical</span></p>
    
    </Link>)
    return(
        <div className='coneinentContainerAll'>
            <div className='flexRegion'>
                <div className='dotRegions'></div>
                <h2 className='regions'>REGIONS</h2>
            </div>
            <div className='continentContainer'>
            {displayContinents}
            </div>
            
        </div>
    )
}

export default Continents