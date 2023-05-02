import { useRef, useEffect, Children } from 'react'

import {
  Chart,
  BarController,
  BarElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
} from 'chart.js'
import 'chartjs-adapter-moment'
import { formatValue } from '@/utils/Utils'
import {
  ChartContainer,
  DashBoardCardHeader,
  LegendUL,
} from '../Dashboard/styles'

Chart.register(
  BarController,
  BarElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend
)

function BarChart01({ data, width, height }: LineChartProps) {
  const canvas = useRef(null)
  const legend = useRef(null)

  useEffect(() => {
    const ctx = canvas.current
    // eslint-disable-next-line no-unused-vars
    // @ts-ignore
    const chart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        layout: {
          padding: {
            top: 12,
            bottom: 16,
            left: 20,
            right: 20,
          },
        },
        scales: {
          y: {
            border: {
              display: false,
            },
            ticks: {
              maxTicksLimit: 5,
              // @ts-ignore
              callback: (value) => formatValue(value),
            },
          },
          x: {
            type: 'time',
            time: {
              parser: 'MM-DD-YYYY',
              unit: 'month',
              displayFormats: {
                month: 'MMM YY',
              },
            },
            border: {
              display: false,
            },
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              title: () => false, // Disable tooltip title
              label: (context) => formatValue(context.parsed.y),
            },
          },
        },
        interaction: {
          intersect: false,
          mode: 'nearest',
        },
        animation: {
          duration: 500,
        },
        maintainAspectRatio: false,
        resizeDelay: 200,
      },
      plugins: [
        {
          id: 'htmlLegend',
          afterUpdate(c, args, options) {
            const ul = legend.current
            if (!ul) return
            // @ts-ignore
            while (ul.firstChild) {
              // @ts-ignore
              ul.firstChild.remove()
            }
            // @ts-ignore
            const items = c.options.plugins.legend.labels.generateLabels(c)
            items.forEach((item) => {
              const li = document.createElement('li')
              li.style.marginRight = '24px'
              // Button element
              const button = document.createElement('button')
              button.style.display = 'inline-flex'
              button.style.alignItems = 'center'
              button.style.opacity = item.hidden ? '.3' : ''
              button.onclick = () => {
                c.setDatasetVisibility(
                  // @ts-ignore
                  item.datasetIndex,
                  // @ts-ignore
                  !c.isDatasetVisible(item.datasetIndex)
                )
                c.update()
              }
              // Color box
              const box = document.createElement('span')
              box.className = 'box'
              box.style.display = 'block'
              box.style.width = '16px'
              box.style.height = '16px'
              box.style.borderRadius = '9999px'
              box.style.marginRight = '8px'
              box.style.borderWidth = '3px'
              // @ts-ignore
              box.style.borderColor = item.fillStyle
              box.style.pointerEvents = 'none'
              // Label
              const labelContainer = document.createElement('span')
              labelContainer.className = 'labelContainer'
              labelContainer.style.display = 'flex'
              labelContainer.style.alignItems = 'center'
              const value = document.createElement('span')
              value.className = 'value'
              value.style.color = '#1e293b'
              value.style.fontSize = '1.875rem'
              value.style.lineHeight = '2.25rem'
              value.style.fontWeight = '600'
              value.style.marginRight = '8px'
              value.style.pointerEvents = 'none'
              const label = document.createElement('span')
              label.className = 'label'
              label.style.color = '#64748b'
              label.style.fontSize = '0.875rem'
              label.style.lineHeight = '1.25rem'
              // @ts-ignore
              const theValue = c.data.datasets[item.datasetIndex].data.reduce(
                // @ts-ignore
                (a, b) => a + b,
                0
              )
              const valueText = document.createTextNode(formatValue(theValue))
              const labelText = document.createTextNode(item.text)
              value.appendChild(valueText)
              label.appendChild(labelText)
              li.appendChild(button)
              button.appendChild(box)
              button.appendChild(labelContainer)
              labelContainer.appendChild(value)
              labelContainer.appendChild(label)
              // @ts-ignore
              ul.appendChild(li)
            })
          },
        },
      ],
    })
    return () => chart.destroy()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <DashBoardCardHeader>
        <LegendUL ref={legend} />
      </DashBoardCardHeader>
      <ChartContainer>
        <canvas ref={canvas} width={width} height={height}></canvas>
      </ChartContainer>
    </>
  )
}

export default BarChart01
