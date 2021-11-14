import React,{createContext,useState,useEffect} from "react";
const Context = createContext()

function ContextProvider({children}){
    const [covid,setCovid]=useState([])
    const [covidYesterday,setCovidYesterday]=useState([])
    const [history,setHistory] =useState([])
    const [continents,setContinents]=useState([])
    const [mostAffected,setMostAffected]=useState([])
    const [isLoading,setIsLoading]=useState(true)

    useEffect(()=>{
        fetch('https://disease.sh/v3/covid-19/all')
        .then(response=>response.json())
        .then(data=>setCovid(data))
        fetch('https://disease.sh/v3/covid-19/all?yesterday=true')
        .then(response=>response.json())
        .then(data=>setCovidYesterday(data))
        fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=30')
        .then(response=>response.json())
        .then(data=>(setHistory(data),setIsLoading(false)))
        fetch('https://disease.sh/v3/covid-19/continents')
        .then(response=>response.json())
        .then(data=>setContinents(data))
        fetch('https://disease.sh/v3/covid-19/countries?sort=cases')
        .then(response=>response.json())
        .then(data=>(setMostAffected(data)))
    },[])

    if(isLoading){
        return <p className='loading'>Loading...</p>
    }
    return(
        <Context.Provider value={{covid,covidYesterday,history,mostAffected,continents,isLoading}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider,Context}