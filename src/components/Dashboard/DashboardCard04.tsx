import BarChart from '../charts/BarChart01'
import {
  BarChartTitle,
  ChartContainer,
  DashBoardCard,
  LineChartAlignedHeader,
} from './styles'

function DashboardCard04() {
  const chartData = {
    labels: [
      '12-01-2022',
      '01-01-2023',
      '02-01-2023',
      '03-01-2023',
      '04-01-2023',
      '05-01-2023',
    ],
    datasets: [
      // Light blue bars
      {
        label: 'Direto',
        data: [800, 1600, 900, 1300, 1950, 1700],
        backgroundColor: '#60a5fa',
        hoverBackgroundColor: '#3b82f6',
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Blue bars
      {
        label: 'Indireto',
        data: [4900, 2600, 5350, 4800, 5200, 4800],
        backgroundColor: '#6366f1',
        hoverBackgroundColor: '#2563eb',
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  }

  return (
    <DashBoardCard>
      <LineChartAlignedHeader>
        <BarChartTitle>Direto vs Indireto</BarChartTitle>
      </LineChartAlignedHeader>

      <ChartContainer>
        <BarChart data={chartData} width={595} height={248} />
      </ChartContainer>
    </DashBoardCard>
  )
}

export default DashboardCard04
