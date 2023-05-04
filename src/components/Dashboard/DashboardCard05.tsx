import { useState, useEffect } from 'react'
import RealtimeChart from '../charts/RealtimeChart'
import { hexToRGB } from '@/utils/Utils'
import styled from 'styled-components'

function DashboardCard05() {
  const [counter, setCounter] = useState(0)
  const [increment, setIncrement] = useState(0)
  const [range, setRange] = useState(35)

  // Dummy data
  const data = [
    57.81, 57.75, 55.48, 54.28, 53.14, 52.25, 51.04, 52.49, 55.49, 56.87, 53.73,
    56.42, 58.06, 55.62, 58.16, 55.22, 58.67, 60.18, 61.31, 63.25, 65.91, 64.44,
    65.97, 62.27, 60.96, 59.34, 55.07, 59.85, 53.79, 51.92, 50.95, 49.65, 48.09,
    49.81, 47.85, 49.52, 50.21, 52.22, 54.42, 53.42, 50.91, 58.52, 53.37, 57.58,
    59.09, 59.36, 58.71, 59.42, 55.93, 57.71, 50.62, 56.28, 57.37, 53.08, 55.94,
    55.82, 53.94, 52.65, 50.25,
  ]

  const [slicedData, setSlicedData] = useState(data.slice(0, range))

  const generateDates = () => {
    const now = new Date()
    const dates: Date[] = []
    data.forEach((v, i) => {
      // @ts-ignore
      dates.push(new Date(now - 2000 - i * 2000))
    })
    return dates
  }

  const [slicedLabels, setSlicedLabels] = useState(
    generateDates().slice(0, range).reverse()
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1)
    }, 2000)
    return () => clearInterval(interval)
  }, [counter])

  useEffect(() => {
    setIncrement(increment + 1)
    if (increment + range < data.length) {
      setSlicedData(([x, ...slicedData]) => [
        ...slicedData,
        data[increment + range],
      ])
    } else {
      setIncrement(0)
      setRange(0)
    }
    setSlicedLabels(([x, ...slicedLabels]) => [...slicedLabels, new Date()])
    return () => setIncrement(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter])

  const chartData = {
    labels: slicedLabels,
    datasets: [
      {
        data: slicedData,
        fill: true,
        backgroundColor: `rgba(${hexToRGB('#6366f1')}, 0.08)`,
        borderColor: '#6366f1',
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: '#6366f1',
        clip: 20,
      },
    ],
  }

  return (
    <DashboardCard05Container>
      <DashboardCard05Header>
        <RealtimeValue>Valor em Tempo Real</RealtimeValue>
      </DashboardCard05Header>
      <RealtimeChart data={chartData} width={595} height={248} />
    </DashboardCard05Container>
  )
}

export default DashboardCard05

const DashboardCard05Container = styled.div`
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
  border-radius: 0.125rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  @media (min-width: 640px) {
    grid-column: span 6 / span 6;
  }
`

const DashboardCard05Header = styled.header`
  display: flex;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  border-bottom: 1px solid #f1f5f9;
`

const RealtimeValue = styled.h2`
  font-weight: 600;
  color: #1e293b;
`
