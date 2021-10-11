import React,{useContext} from 'react'
import {Context} from '../Context/Context'
import death from '../Images/death.png'
import './Deaths.css'

function Deaths({ deaths,todayDeaths,deathsPerOneMillion }){


    return (
        <div className='deathContainer'>
            <div className='death'>
                <h2 className='deathTitle'>Deaths</h2>
                <img className='deathImg' alt={'death image'} src={death} />
            </div>
            <p className='deathP'><span className='deathTotal'>{deaths.toLocaleString()}</span><span className={todayDeaths!==0?'deathToday':'deathTodayNone'}>+{todayDeaths.toLocaleString()}</span></p>
            <p className='deathPerMillion'>{deathsPerOneMillion.toLocaleString()} per million</p>
        </div>
    )
}

export default Deaths