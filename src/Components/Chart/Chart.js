import React from 'react'
import { Line  } from 'react-chartjs-2'
import './Chart.css'
function Chart({cases,deaths,label}){

    const data = {
        labels: label,
        datasets: [
          {
            label: 'Cases',
            data: cases,
            backgroundColor: 'black',
            borderColor: 'black',
            fill: false,
            pointRadius:0,
            pointHoverRadius:5,
          }, 
          {
            label: 'Deaths',
            data: deaths,
            backgroundColor: 'red',
            borderColor: 'red',
            fill: false,
            pointRadius:0,
            pointHoverRadius:5,
          },
        ],
      };

      const options = {
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
            
        },  
   
    }

    return (
        <div className='chartAll'>
            <h2 className='last30days'>Last 30 days</h2>
        
        <div className='chartContainer'>
            <Line data={data} options={options}/>
        </div>
        </div>
    )
}

export default Chart