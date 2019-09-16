<template>
  <AppPage>
    <sui-segment basic class="center aligned">
      <h1>Cleaning the text</h1>
    </sui-segment>
    <sui-divider hidden />
    <DForm :submitprevent="doClean" :submitbuttontext="'Clean'">
      <DInput
        v-model="text"
        label="Text"
        isrequired
        placeholder="Text to clean"
      />
      <DTextarea
        v-if="cleanedText"
        v-model="cleanedText"
        label="Cleaned Text"
        :readonly="true"
      />
    </DForm>
  </AppPage>
</template>

<script>
import { mapActions } from 'vuex'
import DForm from '~/components/Form/DForm'
import DInput from '~/components/Form/DInput'
import DTextarea from '~/components/Form/DTextarea'
import AppPage from '~/components/Pages/AppPage'

import { status2 } from '~/services/sepy'

export default {
  components: {
    AppPage,
    DForm,
    DInput,
    DTextarea
  },
  data() {
    return {
      text: '',
      cleanedText: ''
    }
  },
  methods: {
    ...mapActions({
      actPublishMessage: 'messages/publishMessage',
      actStartLoading: 'loading/start',
      actStopLoading: 'loading/stop'
    }),
    doClean() {
      if (!this.text) {
        return
      }
      this.actStartLoading()
      status2(this.text)
        .then((data) => {
          this.actStopLoading()
          this.cleanedText = data.text
          if (!this.cleanedText) {
            this.actPublishMessage({
              message: 'Empty clean text was generated for the given text',
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
