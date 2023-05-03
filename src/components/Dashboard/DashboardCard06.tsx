import styled from 'styled-components'
import DoughnutChart from '../charts/DoughnutChart'

const DashBoard06Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
  background-color: #ffffff;
  border-radius: 0.125rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  @media (min-width: 640px) {
    grid-column: span 6 / span 6;
  }

  @media (min-width: 1280px) {
    grid-column: span 4 / span 4;
  }
`

const Chart06Header = styled.header`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  border-bottom: 1px solid #f1f5f9;
`

const Chart06Title = styled.h2`
  font-weight: 600;
  color: #1e293b;
`

function DashboardCard06() {
  const chartData = {
    labels: [
      'PAYMENTS',
      'AVEC',
      'SALÃOVIP',
      'CROSSX',
      'AVECGO',
      'P. HYPERLOCAL',
    ],
    datasets: [
      {
        label: 'Vendas por Plano',
        data: [35, 30, 31, 21, 9, 41],
        backgroundColor: [
          '#6366f1',
          '#3730a3',
          '#60a5fa',
          '#10b981',
          '#eab308',
          '#f43f5e',
        ],
        hoverBackgroundColor: [
          '#4f46e5',
          '#312e81',
          '#3b82f6',
          '#065f46',
          '#854d0e',
          '#9f1239',
        ],
        hoverBorderColor: '#ffffff',
      },
    ],
  }

  return (
    <DashBoard06Container>
      <Chart06Header>
        <Chart06Title>Vendas por Plano</Chart06Title>
      </Chart06Header>

      <DoughnutChart data={chartData} width={389} height={260} />
    </DashBoard06Container>
  )
}

export default DashboardCard06
