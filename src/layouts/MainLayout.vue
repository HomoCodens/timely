<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Timely
        </q-toolbar-title>

        <div>Defragment your workload!</div>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="Timely" />
        <q-route-tab to="/manager" label="Project manager" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',

  components: {
  },

  data () {
    return {}
  }
}
</script>
