<!-- TODO: Break this up into several components -->

<template>
  <div>
    <q-table
      title="Projects"
      :data="this.$store.state.projects.projects"
      :columns="columns"
      row-key="id"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="id">
            {{ props.row.name }}
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

  return { columns, newProject, confirm, projectToRemove, confirmRemoval, removeProject, editingDummy, setName }
}

export default defineComponent({
  name: 'ProjectManager',
  setup (props, context) {
    return { ...useTable(context) }
  }
})
</script>
