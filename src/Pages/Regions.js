import React,{useState,useEffect,useContext} from 'react'
import { Context } from '../Components/Context/Context'
import './Regions.css'
import {useParams} from 'react-router-dom'
import Cards from '../Components/Cards/Cards'
import Chart from '../Components/Chart/Chart'
import Table from '../Components/Table/Table'
import Header from '../Components/Header/Header'

function Regions(){
    const {continentName} = useParams()
    const [continent,setContinent] = useState([])
    const [continentYesterday,setContinentYesterday] = useState([])
    const [continentHistory, setContinentHistory] = useState([])
    let continentCases = ''
    let continentDeaths = ''
    let historyDates = ''

    const {mostAffected} = useContext(Context)
    useEffect(()=>{
        fetch(`https://disease.sh/v3/covid-19/continents/${continentName}?strict=true`)
        .then(response=>response.json())
        .then(data=>(setContinent(data)))
        fetch(`https://disease.sh/v3/covid-19/continents/${continentName}?yesterday=true&strict=true`)
        .then(response=>response.json())
        .then(data=>(setContinentYesterday(data)))
    },[continentName])
    useEffect(()=>{
        fetch(`https://disease.sh/v3/covid-19/historical/${continent||continent.countries.join(',')}?lastdays=30`)
        .then(response=>response.json())
        .then(data=>(setContinentHistory(data)))
    },[])


    if(continentHistory.length>0){
        continentCases=continentHistory.filter(item=>item!==null).map(item=>Object.values(item.timeline.cases)).reduce((r, a) => a.map((b, i) => (r[i] || 0) + b), [])
        continentDeaths=continentHistory.filter(item=>item!==null).map(item=>Object.values(item.timeline.deaths)).reduce((r, a) => a.map((b, i) => (r[i] || 0) + b), [])
        historyDates= Object.keys(continentHistory.filter(item=>item!==null)[0].timeline.cases)
            
    }

    return(
        historyDates.length===0?<div className='loading'>Loading...</div>:
        <div className='regionsContainer'>
            <Header/>
            <div className='regionsTitleContainer'>
                <p>REGION</p>
                <h1>{continentName}</h1>
            </div>
            <Cards 
            totalCases={continent.cases}
            todayCases={continent.todayCases}
            perOneMillion={Math.round(continent.casesPerOneMillion)}
            tests={continent.tests}
            activeTotal={continent.active}
            critical={continent.critical}
            activeYesterday={continentYesterday.active}
            recovered={continent.recovered}
            todayRecovered={continent.todayRecovered}
            recoveredPercentage={Math.round(continent.recovered/continent.cases*100)}
            deaths={continent.deaths}
            todayDeaths={continent.todayDeaths}
            deathsPerOneMillion={continent.deathsPerOneMillion}
            />
            <Chart
            cases={continentCases}
            deaths={continentDeaths}
            label={historyDates}
            />
            <Table
            mostAffected={mostAffected.filter(item=>item.continent===continentName)}
            title={'COUNTRIES'}
            />
        </div>
    )
}

export default Regions