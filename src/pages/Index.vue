<template>
  <q-page class="row items-center justify-evenly">
    <example-component
      title="Example component"
      active
    ></example-component>
  </q-page>
</template>

<script lang="ts">
import ExampleComponent from 'components/CompositionComponent.vue'

export default {
  name: 'PageIndex',
  components: { ExampleComponent },
  data () {
    return {}
  }
}
</script>
