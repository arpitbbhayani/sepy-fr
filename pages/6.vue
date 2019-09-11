<template>
  <AppPage>
    <sui-segment basic class="center aligned">
      <h1>Fetch posting list</h1>
    </sui-segment>
    <sui-divider hidden />
    <DForm :submitprevent="doFetchPostings" :submitbuttontext="'Get postings'">
      <DInput
        v-model="text"
        label="Word"
        isrequired
        placeholder="Word for which you want to get the posting list"
      />
      <div v-if="documents.length">
        <p class="ui large grey text">
          Top {{ documents.length }} in posting list
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

import { status6 } from '~/services/sepy'

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
    doFetchPostings() {
      this.actStartLoading()
      status6(this.text)
        .then(({ documents }) => {
          this.actStopLoading()
          this.documents = documents
          if (!this.documents.length) {
            this.actPublishMessage({
              message: 'No documents in posting list for the given word',
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
