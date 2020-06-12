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
  data () {
    return {
      options: {
        scales: {
          xAxes: [{
            type: 'linear',
            position: 'bottom'
          }]
        }
      }
    }
  }
}
</script>
