import React from 'react'
import {Line} from 'react-chartjs-2'

const data = {
  labels: ['10', '20', '30', '40', '50', '60'],
  datasets: [
    {
      label: '# of one point',
      data: [12, 19, 3, 5, 2, 3],
      fill: true,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
}

const FormGraph = () => (
  
    <div className ="container"> 
        <Line data={data} width={'20%'} height={'10%'}/>
    </div>
 
)
export default FormGraph