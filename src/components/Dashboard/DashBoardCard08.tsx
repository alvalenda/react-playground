import LineChart from '../charts/LineChart02'
import {
  DashBoardCard,
  DashBoardCardTitle,
  LineChartAlignedHeader,
} from './styles'

function DashboardCard08() {
  const chartData = {
    labels: [
      '12-04-2021',
      '01-04-2022',
      '02-04-2022',
      '03-04-2022',
      '04-04-2022',
      '05-04-2022',
      '06-04-2022',
      '07-04-2022',
      '08-04-2022',
      '09-04-2022',
      '10-04-2022',
      '11-04-2022',
      '12-04-2022',
      '01-04-2023',
      '02-04-2023',
      '03-04-2023',
      '04-04-2023',
      '05-04-2023',
      '06-04-2023',
      '07-04-2023',
      '08-04-2023',
      '09-04-2023',
      '10-04-2023',
      '11-04-2023',
      '12-04-2023',
      '01-04-2023',
    ],
    datasets: [
      // Indigo line
      {
        label: 'Current',
        data: [
          73, 64, 73, 69, 104, 104, 164, 164, 120, 120, 120, 148, 142, 104, 122,
          110, 104, 152, 166, 233, 268, 252, 284, 284, 333, 323,
        ],
        borderColor: '#6366f1',
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: '#6366f1',
      },
      // Blue line
      {
        label: 'Previous',
        data: [
          184, 86, 42, 378, 42, 243, 38, 120, 0, 0, 42, 0, 84, 0, 276, 0, 124,
          42, 124, 88, 88, 215, 156, 88, 124, 64,
        ],
        borderColor: '#60a5fa',
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: '#60a5fa',
      },
      // Green line
      {
        label: 'Average',
        data: [
          122, 170, 192, 86, 102, 124, 115, 115, 56, 104, 0, 72, 208, 186, 223,
          188, 114, 162, 200, 150, 118, 118, 76, 122, 230, 268,
        ],
        borderColor: '#22c55e',
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: '#22c55e',
      },
    ],
  }

  return (
    <DashBoardCard>
      <LineChartAlignedHeader>
        <DashBoardCardTitle>
          Vendas ao Longo do Tempo (todas as franquias)
        </DashBoardCardTitle>
      </LineChartAlignedHeader>
      <LineChart data={chartData} width={595} height={248} />
    </DashBoardCard>
  )
}

export default DashboardCard08
