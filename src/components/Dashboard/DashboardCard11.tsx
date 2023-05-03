import styled from 'styled-components'
import BarChart from '../charts/BarChart03'

function DashboardCard11() {
  const chartData = {
    labels: ['Produto'],
    datasets: [
      {
        label: 'WhatsApp profissional',
        data: [131],
        backgroundColor: '#6366f1',
        hoverBackgroundColor: '#4f46e5',
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Salão VIP - 10 pessoas',
        data: [100],
        backgroundColor: '#3730a3',
        hoverBackgroundColor: '#312e81',
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Salão VIP - 20 pessoas',
        data: [81],
        backgroundColor: '#38bdf8',
        hoverBackgroundColor: '#0ea5e9',
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Salão VIP - 40 pessoas',
        data: [65],
        backgroundColor: '#4ade80',
        hoverBackgroundColor: '#22c55e',
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Outros',
        data: [72],
        backgroundColor: '#e2e8f0',
        hoverBackgroundColor: '#cbd5e1',
        barPercentage: 1,
        categoryPercentage: 1,
      },
    ],
  }

  return (
    <DashBoardCard>
      <ChartHeader>
        <ChartH2>Produtos</ChartH2>
      </ChartHeader>
      <ChartPadding>
        <ChartFlexItemContainer>
          <ChartCounter>449</ChartCounter>
          <ChartTag>-22%</ChartTag>
        </ChartFlexItemContainer>
      </ChartPadding>

      <ChartContainer>
        <BarChart data={chartData} width={595} height={48} />
      </ChartContainer>
    </DashBoardCard>
  )
}

export default DashboardCard11

const DashBoardCard = styled.div`
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 0.125rem;
  grid-column: 1 / -1;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  z-index: 2;

  @media (min-width: 1280px) {
    grid-column: span 6 / span 6;
  }
`

const ChartHeader = styled.header`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  border-bottom: 1px solid #f1f5f9;
`
const ChartH2 = styled.h2`
  font-weight: 600;
  color: #1e293b;
`
const ChartPadding = styled.div`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
`
const ChartFlexItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
`
const ChartCounter = styled.div`
  margin-right: 0.5rem;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  color: #1e293b;
`
const ChartTag = styled.div`
  padding-left: 0.375rem;
  padding-right: 0.375rem;
  background-color: #f59e0b;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  border-radius: 9999px;
`
export const ChartContainer = styled.div`
  flex-grow: 1;
`
