import {
  ArcElement,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from 'chart.js'
import { PolarArea } from 'react-chartjs-2'
import { EmotionChartContainer } from './styled'

ChartJS.register(
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler
)

// colocar eixo x com label de negativo a positivo e eixo y com label de inativo até ativo
export const data = {
  labels: ['Ansiedade', 'Angústia', 'Depressão', 'Ideação Suicida'],
  datasets: [
    {
      label: 'Intensidade em %',
      data: [43, 33, 46, 20],
      backgroundColor: [
        'rgba(255, 206, 86, 0.5)',
        // 'rgba(255, 206, 86, 0.5)',
        // 'rgba(255, 206, 86, 0.5)',

        'rgba(54, 162, 235, 0.5)',
        // 'rgba(54, 162, 235, 0.5)',
        // 'rgba(54, 162, 235, 0.5)',

        'rgba(153, 102, 255, 0.5)',
        // 'rgba(153, 102, 255, 0.5)',
        // 'rgba(153, 102, 255, 0.5)',

        'rgba(255, 99, 132, 0.5)',
        // 'rgba(255, 99, 132, 0.5)',
        // 'rgba(255, 99, 132, 0.5)',

        // 'rgba(75, 192, 192, 0.5)',
        // 'rgba(75, 192, 192, 0.5)',
        // 'rgba(255, 206, 86, 0.5)',

        // 'rgba(153, 102, 255, 0.5)',
        // 'rgba(255, 159, 64, 0.5)',
      ],
      borderWidth: 1,
    },
  ],
}

const option = {
  scales: {
    r: {
      angleLines: {
        display: true,
        color: 'rgba(0, 0, 0, 0.1)',
      },
      suggestedMin: 0,
      suggestedMax: 100,
      ticks: {
        stepSize: 1,
      },
    },
  },
  layout: {
    padding: 20,
  },
}

export function PolarChart({}: Props) {
  return (
    <EmotionChartContainer>
      <PolarArea data={data} options={option} />
    </EmotionChartContainer>
  )
}

type Props = {}
