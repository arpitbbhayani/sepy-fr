<template>
  <AppPage>
    <sui-segment basic class="center aligned">
      <h1>Ranking function</h1>
    </sui-segment>
    <sui-divider hidden />
    <DForm :submitprevent="doRankingFunc" :submitbuttontext="'Get Score'">
      <DInput
        v-model="text"
        label="Query"
        isrequired
        placeholder="Search Query"
      />
      <DInput
        v-model="docId"
        label="Document ID"
        isrequired
        placeholder="Document ID"
      />
      <DInput v-if="score" v-model="score" label="Score" :readonly="true" />
    </DForm>
  </AppPage>
</template>

<script>
import { mapActions } from 'vuex'

import DForm from '~/components/Form/DForm'
import DInput from '~/components/Form/DInput'
import AppPage from '~/components/Pages/AppPage'

import { status9 } from '~/services/sepy'

export default {
  components: {
    AppPage,
    DForm,
    DInput
  },
  data() {
    return {
      text: '',
      docId: '',
      score: ''
    }
  },
  methods: {
    ...mapActions({
      actPublishMessage: 'messages/publishMessage',
      actStartLoading: 'loading/start',
      actStopLoading: 'loading/stop'
    }),
    doRankingFunc() {
      if (!this.text || !this.docId) {
        return
      }
      this.actStartLoading()
      status9(this.text, this.docId)
        .then(({ score }) => {
          this.actStopLoading()
          this.score = `${score}`
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
