import React,{useEffect,useState,useContext} from "react";
import { Context } from "../Components/Context/Context";
import Header from "../Components/Header/Header";
import Table from "../Components/Table/Table";
import globe from '../Components/Images/globe.png'
import './Compare.css'
import Select from 'react-select'
import { Line  } from 'react-chartjs-2'

function Compare(){
    const [compareState,setCompareState]=useState([])
    const [state,setState]= useState([])
    const {mostAffected} = useContext(Context)
    let chartDataCases = {}
    let chartDataDeaths = {}
    let tableArray = []

    const colors = ['green','red','blue','royalblue','yellow','purple','orange','black','grey','pink']
    
    useEffect(()=>{
        if(compareState.length){
            fetch(`https://disease.sh/v3/covid-19/historical/${compareState.map(item=>item.value).join(',')}/?lastdays=30`)
            .then(response=>response.json())
            .then(data=>setState(data))
        }
    },[compareState])

    const options = mostAffected.map(item=>{
       return {value:item.country,label:item.country}
        }
    )   
    for(let i =0;i<compareState.length;i++){
        tableArray.push(...mostAffected.filter(item=>item.country===compareState[i].value))
    }

    if(state.length===undefined){
    chartDataCases = {
        labels: Object.keys(state.timeline.cases),
        datasets: [
                {
                    label:state.country,
                    data:Object.values(state.timeline.cases),
                    backgroundColor:'green',
                    borderColor:'green',
                    fill: false,
                    pointRadius:0,
                    pointHoverRadius:5,
                }
            ]
        ,
      };
    chartDataDeaths = {
        labels: Object.keys(state.timeline.deaths),
        datasets: [
                {
                    label:state.country,
                    data:Object.values(state.timeline.deaths),
                    backgroundColor:'green',
                    borderColor:'green',
                    fill: false,
                    pointRadius:0,
                    pointHoverRadius:5,
                }
            ]
        ,
      };
    }
    
    else if(state.length>1){

        chartDataCases = {
            labels: Object.keys(state[0].timeline.cases),
            datasets: state.map((item,index)=>{
                return {
                    label:item.country,
                    data:Object.values(item.timeline.cases),
                    backgroundColor:colors[index],
                    borderColor:colors[index],
                    fill: false,
                    pointRadius:0,
                    pointHoverRadius:5,
                }
            })
        }
        chartDataDeaths = {
            labels: Object.keys(state[0].timeline.deaths),
            datasets: state.map((item,index)=>{
                return {
                    label:item.country,
                    data:Object.values(item.timeline.deaths),
                    backgroundColor:colors[index],
                    borderColor:colors[index],
                    fill: false,
                    pointRadius:0,
                    pointHoverRadius:5,
                }
            })
        }
    }

    const optionsDataCases = {
        responsive:true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
              mode: 'index',
              intersect: false
          },
          legend:{
              labels:{
                usePointStyle:true,
                pointStyle:'circle',
              },
                position:'top'
          },
          title:{
              font:{
                  size:15,
              },
              align:'start',
              display:true,
              text:'Last 30 days cases'
          }
      },  
  }
  const optionsDataDeaths = {
    responsive:true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
          mode: 'index',
          intersect: false
      },
      legend:{
          labels:{
            usePointStyle:true,
            pointStyle:'circle',
          },
            position:'top'
      },
      title:{
          font:{
              size:15,
          },
          align:'start',
          display:true,
          text:'Last 30 days deaths'
      }
  },  
}

    return(
        <div className="compareContainer">
            <Header/>
            <h1>COMPARE</h1>
            <div className='compareSelect'>
                <Select className='select' backspaceRemovesValue={true} onChange={option=>setCompareState(option)} closeMenuOnScroll={true} isMulti={true} options={options}/>
            </div>
            <div className={compareState.length===0?'imgContainer':'imgContainerNoDisplay'}>
                <img className="globeCompare" src={globe} alt='globe'/>
                <p>Select countries to compare</p>
            </div>
            <div className={compareState.length>0?'lineChartContainerCases':'lineChartConainerNone'}>
                <Line options={optionsDataCases} data={chartDataCases}/>
            </div>
            <div className={compareState.length>0?'lineChartContainerDeaths':'lineChartConainerNone'}>
                <Line options={optionsDataDeaths} data={chartDataDeaths}/>
            </div>
                {compareState.length>0&&
                <Table
                mostAffected={tableArray}
                title={'More informations'}
                />
            }

            
        </div>
    )
}

export default Compare