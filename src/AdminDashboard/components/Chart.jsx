import React from 'react'
import { Chart as ChartJS, BarElement, LinearScale, CategoryScale} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
);

const Chart = () => {
  var data = {
     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
     datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            '#3363ad',
        ],
        borderColor: [
            '#3363ad',
        ],
        borderWidth: 1
    }]
}

var  options = {
  maintainAspectRatio: false,
  scales: {
      y: {
          beginAtZero: true
      }
  },
  legend: {
    labels: {
      fontSize: 25,
    },
  },
}
  return (
    <div>
      <Bar
         data={data}
         height={400}
         options={options}
      />
    </div>
  )
}

export default Chart;