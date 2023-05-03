import { formatValue } from '@/utils/Utils'
import {
  Chart,
  Filler,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  TimeScale,
  Tooltip,
} from 'chart.js'
import 'chartjs-adapter-moment'
import { useEffect, useRef } from 'react'
import styled from 'styled-components'

Chart.register(
  LineController,
  LineElement,
  Filler,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip
)

function RealtimeChart({ data, width, height }: ChartProps) {
  const canvas = useRef(null)
  const chartValue = useRef(null)
  const chartDeviation = useRef(null)

  useEffect(() => {
    const ctx = canvas.current
    // eslint-disable-next-line no-unused-vars
    // @ts-ignore
    const chart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        layout: {
          padding: 20,
        },
        scales: {
          y: {
            border: {
              display: false,
            },
            suggestedMin: 30,
            suggestedMax: 80,
            ticks: {
              maxTicksLimit: 5,
              // @ts-ignore
              callback: (value) => formatValue(value),
            },
          },
          x: {
            type: 'time',
            time: {
              parser: 'hh:mm:ss',
              unit: 'second',
              tooltipFormat: 'MMM DD, H:mm:ss a',
              displayFormats: {
                second: 'H:mm:ss',
              },
            },
            border: {
              display: false,
            },
            grid: {
              display: false,
            },
            ticks: {
              autoSkipPadding: 48,
              maxRotation: 0,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            titleFont: {
              weight: '600',
            },
            callbacks: {
              label: (context) => formatValue(context.parsed.y),
            },
          },
        },
        interaction: {
          intersect: false,
          mode: 'nearest',
        },
        animation: false,
        maintainAspectRatio: false,
        resizeDelay: 200,
      },
    })
    return () => chart.destroy()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  // Update header values
  useEffect(() => {
    const currentValue = data.datasets[0].data[data.datasets[0].data.length - 1]
    const previousValue =
      data.datasets[0].data[data.datasets[0].data.length - 2]
    const diff = ((currentValue - previousValue) / previousValue) * 100
    // @ts-ignore
    chartValue.current.innerHTML =
      data.datasets[0].data[data.datasets[0].data.length - 1]
    if (diff < 0) {
      // @ts-ignore
      chartDeviation.current.style.backgroundColor = '#eab308'
    } else {
      // @ts-ignore
      chartDeviation.current.style.backgroundColor = '#22c55e'
    }
    // @ts-ignore
    chartDeviation.current.innerHTML = `${diff > 0 ? '+' : ''}${diff.toFixed(
      2
    )}%`
  }, [data])

  return (
    <>
      <PaddingDiv>
        <FlexDiv>
          <ChartValueDiv>
            R$<span ref={chartValue}>57.81</span>
          </ChartValueDiv>
          <ChartDeviationDiv ref={chartDeviation} />
        </FlexDiv>
      </PaddingDiv>
      <ChartFlexGrowDiv>
        {/* @ts-ignore */}
        <canvas ref={canvas} data={data} width={width} height={height}></canvas>
      </ChartFlexGrowDiv>
    </>
  )
}

export default RealtimeChart

const PaddingDiv = styled.div`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
`
const FlexDiv = styled.div`
  display: flex;
  align-items: flex-start;
`
const ChartValueDiv = styled.div`
  color: #1e293b;
  margin-right: 0.5rem;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
`

const ChartDeviationDiv = styled.div`
  padding-left: 0.375rem;
  padding-right: 0.375rem;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  border-radius: 9999px;
`

const ChartFlexGrowDiv = styled.div`
  flex-grow: 1;
`
