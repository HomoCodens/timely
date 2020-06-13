<!-- TODO: Break this up into several components -->

<template>
  <div>
    <p>{{ title }}</p>
    <q-select color="black"
              bg-color="green"
              filled
              :options="projectOptions"
              v-model="ss"
              label="Label"
              option-value="id"
              option-label="name">
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-select>
      <q-table
        title="Overview"
        :data="projectAggregate"
        :columns="aggregateColumns"
        row-key="id"
        style="height: 400px"
        virtual-scroll
        :rows-per-page-options="[0]"
        :pagination.sync="pagination"
      />
      <q-btn
        :color="this.$store.state.timeblocks.paused ? 'green' : 'amber'"
        :label="this.$store.state.timeblocks.paused ? 'Run' : 'Pause'"
        @click="togglePaused"/>
      <q-btn color="red" label="Reset time" @click="resetTime"/>
      <div class="small">
      <timeline-chart :chart-data="datacollection" :styles="chartStyles"></timeline-chart>
  </div>
  </div>
</template>

<script lang="ts">
import TimelineChart from './TimelineChart.vue'
import { defineComponent, computed, ref } from '@vue/composition-api'
import moment from 'moment'
import { Timeblock } from './models'

function useProjectOptions (root: any) {
  const projectOptions = computed(() => root.$store.state.projects.projects)

  const ss = computed({
    get: () => root.$store.getters.getActiveProject,
    set: (val) => {
      root.$store.dispatch('setActiveProject', { id: val.id })
    }
  })

  return { projectOptions, ss }
}

function useAggregate (root: any) {
  const projectAggregate = computed(() => root.$store.getters.projectAggregate)
  const aggregateColumns = [
    { name: 'project', label: 'Project', field: 'name', sortable: true },
    {
      name: 'time',
      label: 'Time',
      field: 'time',
      sortable: true,
      format: (x: number) => {
        const duration = moment.duration(x)
        return `${Math.floor(duration.asHours())}:${duration.minutes().toString().padStart(2, '0')}:${duration.seconds().toString().padStart(2, '0')}`
      }
    }
  ]

  const pagination = ref({
    rowsPerPage: 0
  })

  return { projectAggregate, aggregateColumns, pagination }
}

function useChart (root: any) {
  const datacollection = computed(() => {
    const blu = root.$store.state.timeblocks.timeblocks.reduce((acc, x: Timeblock) => {
      if (!acc[x.projectId]) {
        acc[x.projectId] = {
          project: root.$store.getters.getProjectById(x.projectId),
          blocks: []
        }
      }

      acc[x.projectId].blocks.push(x)

      return acc
    }, {})

    const datasets = Object.entries(blu).map(([id, x]) => {
      const data = []
      for (const block of x.blocks) {
        data.push({ x: block.start, y: 0 })
        data.push({ x: block.end, y: 0 })
        data.push({ x: NaN, y: 0 })
      }
      data.pop()

      return {
        label: x.project.name,
        backgroundColor: x.project.uiColor,
        borderColor: x.project.uiColor,
        borderWidth: 5,
        pointRadius: 0,
        fill: 'start',
        data
      }
    })


    return { datasets }
  })

  const chartStyles = ref({
    height: '150px',
    position: 'relative'
  })

  return { datacollection, chartStyles }
}

export default defineComponent({
  name: 'CompositionComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean
    }
  },
  components: {
    TimelineChart
  },
  methods: {
    togglePaused: function () {
      this.$store.dispatch('togglePaused')
    },
    resetTime: function () {
      this.$store.dispatch('resetTime')
    }
  },
  setup (props, context) {
    return {
      ...useProjectOptions(context.root),
      ...useAggregate(context.root),
      ...useChart(context.root)
    }
  }
})
</script>
