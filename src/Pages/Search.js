import React,{useState,useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../Components/Context/Context";
import globe from '../Components/Images/globe.png'
import './Search.css'
import Header from "../Components/Header/Header";

function Search(){
    const [searchState,setSearchState]=useState('')
    const {mostAffected} = useContext(Context)
    let searchDisplay = mostAffected.filter(item=>item.country.toLowerCase().includes(searchState.toLowerCase())).map((item,index)=>(
        <Link key={index} to={`/country/${item.country}`} className='searchItem'>
            <div className='searchItemFlagContainer'>
            <img alt={`${item.country} flag`} src={item.countryInfo.flag}/>
            <p>{item.country}</p>
            </div>
            <p className='searchItemCases'>Cases</p>
            <p><span className='searchItemCasesNumber'>{item.cases.toLocaleString()}</span>
            <span className={item.todayCases!==0?'searchItemCasesNumberToday':'searchItemCasesNumberTodayNone'}>+{item.todayCases.toLocaleString()}</span></p>
        </Link>
    ))
    return (
        <div className='searchContainer'>
            <Header/>
            <div className='search'>
                <h1>SEARCH</h1>
                <input type='text'
                placeholder='Search country' 
                className='searchInput' 
                onChange={e=>setSearchState(e.target.value)} 
                value={searchState}/>
            </div>
            {searchState.trim()!==''?<div className='searchResultContainer'>{searchDisplay}</div>:
            <div className='searchEmpty'>
                <img alt={'globe'} src={globe}/>
                <p>Search for a country</p>
            </div>}
        </div>
    )
}

export default Search