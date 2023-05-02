import { hexToRGB } from '../../utils/Utils'
import LineChart from '../charts/LineChart01'
import {
  ChartContainer,
  DashBoardCard,
  DashBoardCardHeader,
  DashBoardCardTitle,
  LineChartMoney,
  LineChartMoneyContainer,
  LineChartNegativeMoneyTag,
  LinearChartDescription,
} from './styles'

function DashboardCard02() {
  const chartData = {
    labels: [
      '12-01-2020',
      '01-01-2021',
      '02-01-2021',
      '03-01-2021',
      '04-01-2021',
      '05-01-2021',
      '06-01-2021',
      '07-01-2021',
      '08-01-2021',
      '09-01-2021',
      '10-01-2021',
      '11-01-2021',
      '12-01-2021',
      '01-01-2022',
      '02-01-2022',
      '03-01-2022',
      '04-01-2022',
      '05-01-2022',
      '06-01-2022',
      '07-01-2022',
      '08-01-2022',
      '09-01-2022',
      '10-01-2022',
      '11-01-2022',
      '12-01-2022',
      '01-01-2023',
    ],
    datasets: [
      // Indigo line
      {
        data: [
          622, 622, 426, 471, 365, 365, 238, 324, 288, 206, 324, 324, 500, 409,
          409, 273, 232, 273, 500, 570, 767, 808, 685, 767, 685, 685,
        ],
        fill: true,
        backgroundColor: `rgba(${hexToRGB('#3b82f6')}, 0.08)`,
        borderColor: '#6366f1',
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: '#6366f1',
        clip: 20,
      },
      // Gray line
      {
        data: [
          732, 610, 610, 504, 504, 504, 349, 349, 504, 342, 504, 610, 391, 192,
          154, 273, 191, 191, 126, 263, 349, 252, 423, 622, 470, 532,
        ],
        borderColor: '#cbd5e1',
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: '#cbd5e1',
        clip: 20,
      },
    ],
  }

  return (
    <DashBoardCard>
      <DashBoardCardHeader>
        <DashBoardCardTitle>HyperLocal Avançado</DashBoardCardTitle>
        <LinearChartDescription>Vendas</LinearChartDescription>
        <LineChartMoneyContainer>
          <LineChartMoney>R$17,489</LineChartMoney>
          <LineChartNegativeMoneyTag>-14%</LineChartNegativeMoneyTag>
        </LineChartMoneyContainer>
      </DashBoardCardHeader>
      <ChartContainer>
        <LineChart data={chartData} width={389} height={128} />
      </ChartContainer>
    </DashBoardCard>
  )
}

export default DashboardCard02
