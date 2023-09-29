import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const labels = ['168', '167', '166', 'April', 'May', 'June', 'July','168', '167', '166', 'April', 'May', 'June', 'July','168', '167', '166', 'April', 'May', 'June', 'July','168', '167', '166', 'April', 'May', 'June', 'July','168', '167', '166', 'April', 'May', 'June', 'July','168', '167', '166', 'April', 'May', 'June', 'July','168', '167', '166', 'April', 'May', 'June', 'July','168', '167', '166', 'April', 'May', 'June', 'July'];

  export const options = {
    responsive: false,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
    },
  };


    const Graphics = ({sparkline_in_7d }) => {

        

        const data = {
            labels,
            datasets: [
              {
                data: sparkline_in_7d,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
              },
            ],
          };

        return (
            <Line options={options} data={data}/>
        )
    };

export default Graphics;