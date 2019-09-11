<template>
  <AppPage>
    <sui-segment basic class="center aligned">
      <h1>Tokenization</h1>
    </sui-segment>
    <sui-divider hidden />
    <DForm :submitprevent="doExtractTokens" :submitbuttontext="'Extract'">
      <DTextarea
        v-model="text"
        label="Text"
        isrequired
        placeholder="Paste your document body here"
      />
      <div v-if="tokens.length">
        <p class="ui large grey text">
          Tokens generated
        </p>
        <sui-label
          v-for="token in tokens"
          :key="`${token}-${Math.random()}`"
          class="large"
        >
          {{ token }}
        </sui-label>
      </div>
    </DForm>
  </AppPage>
</template>

<script>
import { mapActions } from 'vuex'

import DForm from '~/components/Form/DForm'
import DTextarea from '~/components/Form/DTextarea'
import AppPage from '~/components/Pages/AppPage'

import { status4 } from '~/services/sepy'

export default {
  components: {
    AppPage,
    DForm,
    DTextarea
  },
  data() {
    return {
      text: '',
      tokens: []
    }
  },
  methods: {
    ...mapActions({
      actPublishMessage: 'messages/publishMessage',
      actStartLoading: 'loading/start',
      actStopLoading: 'loading/stop'
    }),
    doExtractTokens() {
      if (!this.text) {
        return
      }
      this.actStartLoading()
      status4(this.text)
        .then(({ tokens }) => {
          this.actStopLoading()
          this.tokens = tokens
          if (!this.tokens.length) {
            this.actPublishMessage({
              message: 'No tokens generated for the given text',
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
