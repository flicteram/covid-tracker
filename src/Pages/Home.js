import React,{useContext} from "react";
import Chart from "../Components/Chart/Chart";
import Cards from "../Components/Cards/Cards";
import Continents from "../Components/Continents/Continents";
import MostA from "../Components/MostAffected/MostA";
import Table from "../Components/Table/Table";
import { Context } from "../Components/Context/Context";
import './Home.css'
import Header from "../Components/Header/Header";

function Home(){
    const {covid,covidYesterday,history,mostAffected} = useContext(Context)
    let currentTime = new Date()
    let updatedLast = new Date(covid.updated).toString()
    let updated = Math.round((currentTime.getTime()-covid.updated)/60000)


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

    return(
        <div className='homeContainer'>
            <Header/>
            <div className='homeTitleContainer'>
                <h1>GLOBAL</h1>
                <p>Affected countries: {covid.affectedCountries}</p>
            </div>
            <Cards
            totalCases={covid.cases}
            todayCases={covid.todayCases}
            perOneMillion={Math.round(covid.casesPerOneMillion)}
            tests={covid.tests}
            activeTotal={covid.active}
            critical={covid.critical}
            activeYesterday={covidYesterday.active}
            recovered={covid.recovered}
            todayRecovered={covid.todayRecovered}
            recoveredPercentage={Math.round(covid.recovered/covid.cases*100)}
            deaths={covid.deaths}
            todayDeaths={covid.todayDeaths}
            deathsPerOneMillion={covid.deathsPerOneMillion}
            />
            <Chart
            cases={Object.values(history.cases)}
            deaths={Object.values(history.deaths)}
            label={Object.keys(history.cases)}/>
            <Continents/>
            <MostA/>
            <Table
            mostAffected={mostAffected}
            title={'ALL COUNTRIES'}
            />
            <div className='updated'>
                <p className='updatedTime'>Last updated {timeAgo(updated)}</p>
                <p className='updatedDate'>{updatedLast}</p>
            </div>
        </div>
        
    )
}

export default Home