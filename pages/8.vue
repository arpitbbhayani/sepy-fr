<template>
  <AppPage>
    <sui-segment basic class="center aligned">
      <h1>Term Frequencies</h1>
    </sui-segment>
    <sui-divider hidden />
    <DForm
      :submitprevent="doTermFreq"
      :submitbuttontext="'Fetch term frequencies'"
    >
      <DInput
        v-model="text"
        label="Word"
        isrequired
        placeholder="Word for which you want term frequencies"
      />
      <div v-if="freqs.length">
        {{ freqs }}
      </div>
    </DForm>
  </AppPage>
</template>

<script>
import { mapActions } from 'vuex'

import DForm from '~/components/Form/DForm'
import DInput from '~/components/Form/DInput'
import AppPage from '~/components/Pages/AppPage'

import { status8 } from '~/services/sepy'

export default {
  components: {
    AppPage,
    DForm,
    DInput
  },
  data() {
    return {
      text: '',
      freqs: []
    }
  },
  methods: {
    ...mapActions({
      actPublishMessage: 'messages/publishMessage',
      actStartLoading: 'loading/start',
      actStopLoading: 'loading/stop'
    }),
    doTermFreq() {
      if (!this.text) {
        return
      }
      this.actStartLoading()
      status8(this.text)
        .then(({ frequencies }) => {
          this.actStopLoading()
          this.freqs = frequencies
          if (!this.freqs.length) {
            this.actPublishMessage({
              message: 'The word is not present in any document',
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
