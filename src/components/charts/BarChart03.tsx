import { useRef, useEffect } from 'react'
import {
  Chart,
  BarController,
  BarElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js'
import 'chartjs-adapter-moment'
import styled from 'styled-components'

Chart.register(
  BarController,
  BarElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
)

function BarChart03({ data, width, height }: ChartProps) {
  const canvas = useRef(null)
  const legend = useRef(null)

  useEffect(() => {
    const reducer = (accumulator: number, currentValue: number) =>
      accumulator + currentValue
    const values = data.datasets.map((x: { data: number[] }) =>
      x.data.reduce(reducer)
    )
    const max = values.reduce(reducer)

    const ctx = canvas.current
    // eslint-disable-next-line no-unused-vars
    // @ts-ignore
    const chart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        indexAxis: 'y',
        layout: {
          padding: {
            top: 12,
            bottom: 12,
            left: 20,
            right: 20,
          },
        },
        scales: {
          x: {
            stacked: true,
            display: false,
            max: max,
          },
          y: {
            stacked: true,
            display: false,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              title: () => false, // Disable tooltip title
              label: (context) => context.parsed.x,
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
              li.style.display = 'flex'
              li.style.justifyContent = 'space-between'
              li.style.alignItems = 'center'
              li.style.paddingTop = '14px'
              li.style.paddingBottom = '14px'
              const wrapper = document.createElement('div')
              wrapper.style.display = 'flex'
              wrapper.style.alignItems = 'center'
              const box = document.createElement('div')
              box.style.width = '12px'
              box.style.height = '12px'
              box.style.borderRadius = '2px'
              box.style.marginRight = '16px'
              // @ts-ignore
              box.style.backgroundColor = item.fillStyle
              const label = document.createElement('div')
              const value = document.createElement('div')
              value.style.fontWeight = '500'
              value.style.marginLeft = '16px'
              // @ts-ignore
              value.style.color =
                item.text === 'Other' ? '#94a3b8' : item.fillStyle
              // @ts-ignore
              const theValue = c.data.datasets[item.datasetIndex].data.reduce(
                (a: number, b: number) => a + b,
                0
              )
              const valueText = document.createTextNode(
                `${parseInt(String((theValue / max) * 100))}%`
              )
              const labelText = document.createTextNode(item.text)
              value.appendChild(valueText)
              label.appendChild(labelText)
              // @ts-ignore
              ul.appendChild(li)
              li.appendChild(wrapper)
              li.appendChild(value)
              wrapper.appendChild(box)
              wrapper.appendChild(label)
            })
          },
        },
      ],
    })
    return () => chart.destroy()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BarChart03DataContainer>
      <div>
        <canvas ref={canvas} width={width} height={height}></canvas>
      </div>
      <PaddingDiv>
        <ul ref={legend}></ul>
        <ul></ul>
      </PaddingDiv>
    </BarChart03DataContainer>
  )
}

export default BarChart03

const BarChart03DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`

const PaddingDiv = styled.div`
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  ul {
    font-size: 0.875rem;
    line-height: 1.25rem;
    border-top-width: 1px;
    border-color: #f1f5f9;
  }
`
