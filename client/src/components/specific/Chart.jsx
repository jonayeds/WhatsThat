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

const DoughnutChart = ()=>{
    return <div>DChart</div>
}

export {LineChart, DoughnutChart}