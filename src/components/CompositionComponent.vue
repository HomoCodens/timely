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
      />
      <q-btn
        :color="this.$store.state.timeblocks.paused ? 'green' : 'amber'"
        :label="this.$store.state.timeblocks.paused ? 'Run' : 'Pause'"
        @click="togglePaused"/>
      <q-btn color="red" label="Reset time" @click="resetTime"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import moment from 'moment'

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

  return { projectAggregate, aggregateColumns }
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
  methods: {
    togglePaused: function () {
      this.$store.dispatch('togglePaused')
    },
    resetTime: function () {
      this.$store.dispatch('resetTime')
    }
  },
  setup (props, context) {
    return { ...useProjectOptions(context.root), ...useAggregate(context.root) }
  }
})
</script>
