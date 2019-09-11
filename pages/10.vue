<template>
  <AppPage>
    <sui-segment basic class="center aligned">
      <h1>Search v2</h1>
    </sui-segment>
    <sui-divider hidden />
    <DForm :submitprevent="doSearchV2" :submitbuttontext="'Search'">
      <DInput
        v-model="text"
        label="Query"
        isrequired
        placeholder="Search Query"
      />
      <div v-if="documents.length">
        <p class="ui large grey text">
          Search results
        </p>
        <Documents :documents="documents" />
      </div>
    </DForm>
  </AppPage>
</template>

<script>
import { mapActions } from 'vuex'

import DForm from '~/components/Form/DForm'
import DInput from '~/components/Form/DInput'
import AppPage from '~/components/Pages/AppPage'
import Documents from '~/components/Documents'

import { status10 } from '~/services/sepy'

export default {
  components: {
    AppPage,
    DForm,
    DInput,
    Documents
  },
  data() {
    return {
      text: '',
      documents: []
    }
  },
  methods: {
    ...mapActions({
      actPublishMessage: 'messages/publishMessage',
      actStartLoading: 'loading/start',
      actStopLoading: 'loading/stop'
    }),
    doSearchV2() {
      this.actStartLoading()
      status10(this.text)
        .then(({ documents }) => {
          this.actStopLoading()
          this.documents = documents
          if (!this.documents.length) {
            this.actPublishMessage({
              message: 'No results',
              type: 'error'
            })
          }
        })
        .catch((err) => {
          this.actStopLoading()
          this.actPublishMessage({
            message: err.message,
            type: 'error'
          })
        })
    }
  }
}
</script>
