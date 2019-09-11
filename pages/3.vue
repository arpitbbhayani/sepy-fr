<template>
  <AppPage>
    <sui-segment basic class="center aligned">
      <h1>Extracting the excerpt</h1>
    </sui-segment>
    <sui-divider hidden />
    <DForm :submitprevent="doExtractExcerpt" :submitbuttontext="'Extract'">
      <DTextarea
        v-model="text"
        label="Text"
        isrequired
        placeholder="Paste your document body here"
      />
      <DTextarea
        v-if="excerpt"
        v-model="excerpt"
        label="Excerpt"
        :readonly="true"
      />
    </DForm>
  </AppPage>
</template>

<script>
import { mapActions } from 'vuex'

import DForm from '~/components/Form/DForm'
import DTextarea from '~/components/Form/DTextarea'
import AppPage from '~/components/Pages/AppPage'

import { status3 } from '~/services/sepy'

export default {
  components: {
    AppPage,
    DForm,
    DTextarea
  },
  data() {
    return {
      text: '',
      excerpt: ''
    }
  },
  methods: {
    ...mapActions({
      actPublishMessage: 'messages/publishMessage',
      actStartLoading: 'loading/start',
      actStopLoading: 'loading/stop'
    }),
    doExtractExcerpt() {
      if (!this.text) {
        return
      }
      this.actStartLoading()
      status3(this.text)
        .then(({ excerpt }) => {
          this.actStopLoading()
          this.excerpt = excerpt
          if (!this.excerpt) {
            this.actPublishMessage({
              message: 'Empty excerpt was generated for the given text',
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
