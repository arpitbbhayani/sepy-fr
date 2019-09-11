<template>
  <AppPage>
    <sui-segment basic class="center aligned">
      <h1>Normalization</h1>
    </sui-segment>
    <sui-divider hidden />
    <DForm :submitprevent="doNormalize" :submitbuttontext="'Normalize'">
      <DInput
        v-model="text"
        label="Word"
        isrequired
        placeholder="A word that you want to normalize"
      />
      <DInput
        v-if="normalizedText"
        v-model="normalizedText"
        label="Normalized Word"
        :readonly="true"
      />
    </DForm>
  </AppPage>
</template>

<script>
import { mapActions } from 'vuex'

import DForm from '~/components/Form/DForm'
import DInput from '~/components/Form/DInput'
import AppPage from '~/components/Pages/AppPage'

import { status5 } from '~/services/sepy'

export default {
  components: {
    AppPage,
    DForm,
    DInput
  },
  data() {
    return {
      text: '',
      normalizedText: ''
    }
  },
  methods: {
    ...mapActions({
      actPublishMessage: 'messages/publishMessage',
      actStartLoading: 'loading/start',
      actStopLoading: 'loading/stop'
    }),
    doNormalize() {
      if (!this.text) {
        return
      }
      this.actStartLoading()
      status5(this.text)
        .then(({ text }) => {
          this.actStopLoading()
          this.normalizedText = text
          if (!this.normalizedText) {
            this.actPublishMessage({
              message: 'Empty normalized word was generated for the given word',
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
