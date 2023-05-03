import { Chart, Tooltip } from 'chart.js'

Chart.register(Tooltip)

// Define Chart.js default settings
Chart.defaults.font.family = '"Inter", sans-serif'
Chart.defaults.font.weight = '500'
Chart.defaults.color = '#94a3b8'
Chart.defaults.scale.grid.color = '#f1f5f9'
Chart.defaults.plugins.tooltip.titleColor = '#1e293b'
Chart.defaults.plugins.tooltip.bodyColor = '#1e293b'
Chart.defaults.plugins.tooltip.backgroundColor = '#ffffff'
Chart.defaults.plugins.tooltip.borderWidth = 1
Chart.defaults.plugins.tooltip.borderColor = '#e2e8f0'
Chart.defaults.plugins.tooltip.displayColors = false
Chart.defaults.plugins.tooltip.mode = 'nearest'
Chart.defaults.plugins.tooltip.intersect = false
Chart.defaults.plugins.tooltip.position = 'nearest'
Chart.defaults.plugins.tooltip.caretSize = 0
Chart.defaults.plugins.tooltip.caretPadding = 20
Chart.defaults.plugins.tooltip.cornerRadius = 4
Chart.defaults.plugins.tooltip.padding = 8

// Register Chart.js plugin to add a bg option for chart area
Chart.register({
  id: 'chartAreaPlugin',
  // eslint-disable-next-line object-shorthand
  beforeDraw: (chart) => {
    if (
      // @ts-ignore
      chart.config.options.chartArea &&
      // @ts-ignore
      chart.config.options.chartArea.backgroundColor
    ) {
      const ctx = chart.canvas.getContext('2d')
      const { chartArea } = chart
      // @ts-ignore
      ctx.save()
      // @ts-ignore
      ctx.fillStyle = chart.config.options.chartArea.backgroundColor
      // eslint-disable-next-line max-len
      // @ts-ignore
      ctx.fillRect(
        chartArea.left,
        chartArea.top,
        chartArea.right - chartArea.left,
        chartArea.bottom - chartArea.top
      )
      // @ts-ignore
      ctx.restore()
    }
  },
})
