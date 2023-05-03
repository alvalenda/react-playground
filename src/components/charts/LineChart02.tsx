import { useRef, useEffect } from 'react'
import {
  LineController,
  LineElement,
  Filler,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip,
} from 'chart.js'
import { Chart } from 'chart.js/auto'
import 'chartjs-adapter-moment'
import { formatValue } from '@/utils/Utils'
import { ChartContainer } from '../Dashboard/styles'

Chart.register(
  LineController,
  LineElement,
  Filler,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip
)

function LineChart02({ data, width, height }: ChartProps) {
  const canvas = useRef(null)
  const legend = useRef(null)

  useEffect(() => {
    const ctx = canvas.current
    if (!ctx) return

    // eslint-disable-next-line no-unused-vars
    const chart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        layout: {
          padding: 20,
        },
        scales: {
          y: {
            beginAtZero: true,
            border: {
              display: false,
            },
            grid: {
              //   beginAtZero: true,
            },
            ticks: {
              maxTicksLimit: 5,
              // @ts-ignore
              callback: (value: number): string => formatValue(value),
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
            callbacks: {
              // @ts-ignore
              title: () => false, // Disable tooltip title
              label: (context) => formatValue(context.parsed.y),
            },
          },
        },
        interaction: {
          intersect: false,
          mode: 'nearest',
        },
        maintainAspectRatio: false,
        resizeDelay: 200,
      },
      plugins: [
        {
          id: 'htmlLegend',
          afterUpdate(c, args, options) {
            const ul: HTMLUListElement | null = legend.current
            if (!ul) return

            // Remove old legend items
            // @ts-ignore
            while (ul.firstChild !== null) {
              // @ts-ignore
              ul.firstChild.remove()
            }
            // Reuse the built-in legendItems generator
            // @ts-ignore
            const items = c.options.plugins.legend.labels.generateLabels(c)
            items.slice(0, 2).forEach((item) => {
              const li = document.createElement('li')
              li.style.marginLeft = '16px'
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
              box.style.display = 'block'
              box.style.width = '16px'
              box.style.height = '16px'
              box.style.borderRadius = '9999px'
              box.style.marginRight = '12px'
              box.style.borderWidth = '3px'
              box.style.borderColor =
                // @ts-ignore
                c.data.datasets[item.datasetIndex].borderColor
              box.style.pointerEvents = 'none'
              // Label
              const label = document.createElement('span')
              label.style.color = '#64748b'
              label.style.fontSize = '0.875rem'
              label.style.lineHeight = '1.25rem'
              const labelText = document.createTextNode(item.text)
              label.appendChild(labelText)
              li.appendChild(button)
              button.appendChild(box)
              button.appendChild(label)
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
      <div
        style={{
          paddingTop: '0.75rem',
          paddingBottom: '0.75rem',
          paddingLeft: '1.25rem',
          paddingRight: '1.25rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div
              style={{
                marginRight: '0.5rem',
                fontSize: '1.875rem',
                lineHeight: '2.25rem',
                fontWeight: '700',
              }}
            >
              R$1,482
            </div>
            <div
              style={{
                paddingLeft: '0.375rem',
                paddingRight: '0.375rem',
                backgroundColor: '#F59E0B',
                color: '#ffffff',
                fontSize: '0.875rem',
                lineHeight: '1.25rem',
                fontWeight: '600',
                borderRadius: '9999px',
              }}
            >
              -22%
            </div>
          </div>
          <div style={{ marginBottom: '0.25rem', marginLeft: '0.5rem' }}>
            <ul
              ref={legend}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
              }}
            ></ul>
          </div>
        </div>
      </div>
      <ChartContainer>
        <canvas ref={canvas} width={width} height={height}></canvas>
      </ChartContainer>
    </>
  )
}

export default LineChart02
