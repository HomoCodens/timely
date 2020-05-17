<template>
  <div>
    <p>{{ title }}</p>
    <q-select color="lime-11"
              bg-color="green"
              filled
              :options="projectOptions"
              v-model="selected"
              label="Label">
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-select>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from '@vue/composition-api'
import { Project } from './models'

function useProjectOptions ({ root }) {
  const projectOptions = computed(() => root.$store.state.projects.projects.map(({ name, id }: Project) => {
    return {
      label: name,
      value: id
    }
  }))
  const selected = ref('')

  return { projectOptions, selected }
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
  setup (props, context) {
    return { ...useProjectOptions(context) }
  }
})
</script>
