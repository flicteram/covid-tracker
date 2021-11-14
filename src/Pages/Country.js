import React,{useContext,useEffect,useState} from "react";
import Chart from '../Components/Chart/Chart'
import Cards from "../Components/Cards/Cards";
import Header from "../Components/Header/Header";
import {Context} from '../Components/Context/Context'
import {useParams} from 'react-router-dom'
import './Country.css'

function Country(){
    const [countryYesterday,setCountryYesterday]=useState([])
    const [countryHistory, setCountryHistory] = useState([]) 
    const {mostAffected} = useContext(Context)
    const [loading,setLoading]=useState(true)
    let {countryName} = useParams()
    let country = mostAffected.filter(country=>country.country===countryName)


    let currentTime = new Date()
    let updatedLast = new Date(country[0].updated).toString()
    let updated = Math.round((currentTime.getTime()-country[0].updated)/60000)

    
    function timeAgo(num){ 
    const hours = Math.floor(num / 60);  
    const minutes = num % 60;
        if(num<=60){
            return `${minutes} minutes ago`
        }
        else if (num<=120){
            return `${hours} hour and ${minutes} minutes ago`; 
        }
        else{
            return `${hours} hours and ${minutes} minutes ago`;
        }     
    }
   
    useEffect(()=>{
        fetch(`https://disease.sh/v3/covid-19/countries/${countryName}?yesterday=true&strict=true`)
        .then(response=>response.json())
        .then(data=>setCountryYesterday(data))
        fetch(`https://disease.sh/v3/covid-19/historical/${countryName}?lastdays=30`)
        .then(response=>response.json())
        .then(data=>(setCountryHistory(data),setLoading(false)))
    },[])

    return (
        loading?<p className='loading'>Loading...</p>:
        <div className='countryDetailsContainer'>
            <Header/>
            <div className='countryDetailsTitle'>
                <div className='countryDetailsTitleTop'>
                    <img src={country[0].countryInfo.flag}/>
                    <h1>{country[0].country}</h1>
                </div>
                <h2>POPULATION: {country[0].population.toLocaleString()}</h2>
            </div>
        <Cards
            totalCases={country[0].cases}
            todayCases={country[0].todayCases}
            perOneMillion={Math.round(country[0].casesPerOneMillion)}
            tests={country[0].tests}
            activeTotal={country[0].active}
            critical={country[0].critical}
            activeYesterday={countryYesterday.active}
            recovered={country[0].recovered}
            todayRecovered={country[0].todayRecovered}
            recoveredPercentage={Math.round(country[0].recovered/country[0].cases*100)}
            deaths={country[0].deaths}
            todayDeaths={country[0].todayDeaths}
            deathsPerOneMillion={country[0].deathsPerOneMillion}/>
        
        {countryHistory.message?<div className='noHistoricalData'><p>No historical data</p></div>:<Chart
            cases={Object.values(countryHistory.timeline.cases)}
            deaths={Object.values(countryHistory.timeline.deaths)}
            label={Object.keys(countryHistory.timeline.cases)}/>}
        <div className='updatedCountry'>
            <p className='countryUpdatedTime'>Last updated {timeAgo(updated)}</p>
            <p className='countryUpdatedDate'>{updatedLast}</p>
        </div>
        </div>
    )
}

export default Country