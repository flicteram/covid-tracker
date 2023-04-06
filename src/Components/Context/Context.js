import React,{createContext,useState,useEffect} from "react";
const Context = createContext()

function ContextProvider({children}){
    const [covid,setCovid]=useState([])
    const [covidYesterday,setCovidYesterday]=useState([])
    const [history,setHistory] =useState([])
    const [continents,setContinents]=useState([])
    const [mostAffected,setMostAffected]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const [error, setError] = useState(false)

    useEffect(()=>{

        const fetchData = async()=>{
            await Promise.all([
                fetch('https://disease.sh/v3/covid-19/all')
                .then(r=>r.json()), 
                fetch('https://disease.sh/v3/covid-19/all?yesterday=true')
                .then(r=>r.json()),
                fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=30')
                .then(r=>r.json()),
                fetch('https://disease.sh/v3/covid-19/continents')
                .then(r=>r.json()),
                fetch('https://disease.sh/v3/covid-19/countries?sort=cases')
                .then(r=>r.json())
                ]).then(([covidData, covidDataYesterday, covidDataHistory, covidDataContinents, covidDataMostAffected])=>{
                    setCovid(covidData)
                    setCovidYesterday(covidDataYesterday)
                    setHistory(covidDataHistory)
                    setContinents(covidDataContinents)
                    setMostAffected(covidDataMostAffected)
                }).then(()=>setIsLoading(false))
                .catch(()=>setError(true))
        }
        fetchData()
    },[])

    if(error){
        return <p className='loading'>We have enocuntered an error, please refresh the page!</p>
    }
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