<script>
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['timeblockData'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  },
  computed: {
    options: function () {
      let xMin = Infinity

      for (const ds of this.chartData.datasets) {
        xMin = Math.min(xMin, ds.data[0].x)
      }

      return {
        scales: {
          xAxes: [{
            display: true,
            type: 'time',
            position: 'bottom',
            gridLines: false,
            ticks: {
              min: xMin
            }
          }],
          yAxes: [{
            display: false,
            ticks: {
              max: 0
            }
          }]
        },
        legend: {
          position: 'bottom',
          labels: {
            fontSize: 12,
            usePointStyle: true
          }
        },
        maintainAspectRatio: false
      }
    }
  }
}
</script>
