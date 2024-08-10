/* eslint-disable react/prop-types */
import {Line, Doughnut} from "react-chartjs-2"
import { ArcElement, CategoryScale, Chart as ChartJS, Filler, Legend, LinearScale, LineElement, PointElement, Tooltip } from "chart.js"
import { getLast7Days } from "../../lib/features"

ChartJS.register(CategoryScale, Tooltip, LinearScale, LineElement, PointElement, Filler, ArcElement, Legend)


const lineChartOptions ={
  responsive:true,
  plugins:{
    legend:{
      display: false,
    },
    title:{
      display:false
    }
  },
  scales:{
    x:{
      grid:{
        display:false
      }
    },
    y:{
      beginAtZero:true,
      grid:{
        display:false
      }
    }
  }  
}
const labels = getLast7Days()
const LineChart = ({values=[]}) => {
  const data = {
    labels,
    datasets:[{
      data:values,
      label:"revenue",
      fill:true,
      backgroundColor:"#b6bc9833",
      borderColor: "#B6BC98"
    }]
  }
  return (
    <Line data={data} options={lineChartOptions} />
  )
}
const doughnutChartOptions = {
  responsive:true,
  plugins:{
    legend:{
      display: false,
    },
    title:{
      display:false
    }
  },
  cutout:110
}
const DoughnutChart = ({values=[] , labels=[]})=>{
  const data = {
    labels,
    datasets:[{
      data:values,
      label:"Total chats Vs Group chats",
      backgroundColor:["#B6BC98", "#F0F1EA"],
      borderColor: ["#8d936b", "#B6BC98"],
      offset:30
    }]
  }
    return <Doughnut style={{
      zIndex:"10"
    }} data={data} options={doughnutChartOptions} />
}

export {LineChart, DoughnutChart}