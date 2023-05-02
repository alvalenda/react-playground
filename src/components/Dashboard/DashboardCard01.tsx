import React from 'react'
import { Link } from 'react-router-dom'
import LineChart from '../charts/LineChart01'
// import Icon from '../../images/icon-01.svg'
// import EditMenu from '../EditMenu'

// Import utilities
import { hexToRGB } from '../../utils/Utils'
import {
  DashBoarCardMoneyContainer,
  DashBoardCard,
  DashBoardCardDescription,
  DashBoardCardHeader,
  DashBoardCardMoney,
  DashBoardCardMoneyTag,
  DashBoardCardTitle,
} from './styles'

function DashboardCard01() {
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
          732, 610, 610, 504, 504, 504, 349, 349, 504, 342, 504, 610, 391, 192,
          154, 273, 191, 191, 126, 263, 349, 252, 423, 622, 470, 532,
        ],
        fill: true,
        backgroundColor: `rgba(${hexToRGB('#3b82f6')}, 0.08)`,
        borderColor: '#8b5cf6',
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: '#8b5cf6',
        clip: 20,
      },
      // Gray line
      {
        data: [
          532, 532, 532, 404, 404, 314, 314, 314, 314, 314, 234, 314, 234, 234,
          314, 314, 314, 388, 314, 202, 202, 202, 202, 314, 720, 642,
        ],
        borderColor: '#a5b4fc',
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: '#a5b4fc',
        clip: 20,
      },
    ],
  }

  return (
    <DashBoardCard>
      <DashBoardCardHeader>
        <DashBoardCardTitle>Hyperlocal Plus</DashBoardCardTitle>
        <DashBoardCardDescription>Vendas</DashBoardCardDescription>

        <DashBoarCardMoneyContainer>
          <DashBoardCardMoney>R$ 24,780</DashBoardCardMoney>
          <DashBoardCardMoneyTag>+49%</DashBoardCardMoneyTag>
        </DashBoarCardMoneyContainer>
      </DashBoardCardHeader>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        <LineChart data={chartData} width={389} height={128} />
      </div>
      {/* </div> */}
    </DashBoardCard>
  )
}

export default DashboardCard01
