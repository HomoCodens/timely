<!-- TODO: Break this up into several components -->

<template>
  <div>
    <q-table
      title="Projects"
      style="height: 400px"
      :data="this.$store.state.projects.projects"
      :columns="columns"
      row-key="id"
      virtual-scroll
      :pagination.sync="pagination"
      :rows-per-page-options="[0]"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td>
            <q-btn :style="{background: props.row.uiColor, color: 'white'}" icon-right="colorize">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-color :value="props.row.uiColor" @change="(clr) => changeColor(props.row.id, clr)"/>
              </q-popup-proxy>
            </q-btn>
            <q-btn icon-right="casino" @click="() => randomizeColor(props.row.id)" color="grey"/>
          </q-td>
          <q-td key="id">
            <b>{{ props.row.name }}</b>
            <q-popup-edit v-model="editingDummy" @before-show="editingDummy = props.row.name" @save="(val) => setName(props.row.id, val)">
              <q-input v-model="editingDummy" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td>
              <q-btn class="q-ml-sm" color="red" label = "x" @click="() => confirmRemoval(props.row)" />
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <q-btn class="q-ml-sm" color="primary" label="New Project" @click="newProject"/>

    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="signal_wifi_off" color="primary" text-color="white" />
          <span class="q-ml-sm">Permanently remove {{projectToRemove.name}}?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Remove" color="primary" v-close-popup @click="removeProject()"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

function useTable ({ root }) {
  const columns = ref([
    { name: 'label', align: 'left', label: 'Project', field: 'name' }
  ])

  function newProject () {
    root.$store.dispatch('newProject')
  }

  const confirm = ref(false)
  const projectToRemove = ref({})

  function confirmRemoval (row) {
    projectToRemove.value = row
    confirm.value = true
  }

  function removeProject () {
    root.$store.dispatch('removeProject', projectToRemove.value.id)
  }

  const editingDummy = ref('')

  function setName (id: string, newName: string) {
    root.$store.dispatch('renameProject', { id, newName })
  }

  function adjust (color, amount) {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2))
  }

  function changeColor (id: string, color: string) {
    root.$store.dispatch('changeColor', { id, color })
  }

  function randomizeColor (id: string) {
    root.$store.dispatch('randomizeColor', id)
  }

  const pagination = ref({
    rowsPerPage: 0
  })

  return { columns, newProject, confirm, projectToRemove, confirmRemoval, removeProject, editingDummy, setName, adjust, changeColor, randomizeColor, pagination }
}

export default defineComponent({
  name: 'ProjectManager',
  setup (props, context) {
    return { ...useTable(context) }
  }
})
</script>
