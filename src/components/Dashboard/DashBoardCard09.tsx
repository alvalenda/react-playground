import BarChart from '../charts/BarChart02'
import {
  BarChartMoney,
  BarChartTitle,
  ChartContainer,
  DashBoardCard,
  FlexItemsStartContainer,
  LineChartAlignedHeader,
  LineChartHeader,
  LineChartNegativeMoneyTag,
  PaddingContainer,
} from './styles'

function DashboardCard09() {
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
        label: 'Stack 1',
        data: [6200, 9200, 6600, 8800, 5200, 9200],
        backgroundColor: '#6366f1',
        hoverBackgroundColor: '#4f46e5',
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Blue bars
      {
        label: 'Stack 2',
        data: [-4000, -2600, -5350, -4000, -7500, -2000],
        backgroundColor: '#c7d2fe',
        hoverBackgroundColor: '#a5b4fc',
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  }

  return (
    <DashBoardCard>
      <LineChartAlignedHeader>
        <BarChartTitle>Vendas vs Estornos</BarChartTitle>
      </LineChartAlignedHeader>

      <PaddingContainer>
        <FlexItemsStartContainer>
          <BarChartMoney>+R$6,796</BarChartMoney>
          <LineChartNegativeMoneyTag>-34%</LineChartNegativeMoneyTag>
        </FlexItemsStartContainer>
      </PaddingContainer>

      <ChartContainer>
        <BarChart data={chartData} width={595} height={248} />
      </ChartContainer>
    </DashBoardCard>
  )
}

export default DashboardCard09
