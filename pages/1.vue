<template>
  <AppPage>
    <sui-segment basic class="center aligned">
      <h1>Reading the corpus</h1>
    </sui-segment>
    <sui-divider hidden />
    <div v-if="status.documents.length">
      <sui-container class="center aligned">
        <h1>{{ status.total_documents }} Document(s) in your corpus</h1>
      </sui-container>
      <p class="ui grey text">
        <i>Some random documents from your corpus</i>
      </p>
      <Documents :documents="status.documents" />
    </div>
    <div v-else>
      <sui-segment basic class="center aligned">
        <h3 class="ui grey text">
          No Documents in your corpus.
        </h3>
        <button
          :class="{ loading: isCorpusLoading }"
          class="ui button primary"
          @click="reloadCorpus"
        >
          Reload Corpus
        </button>
        <sui-divider hidden />
        <p v-if="message" class="ui text grey">{{ message }}</p>
      </sui-segment>
    </div>
  </AppPage>
</template>

<script>
import AppPage from '~/components/Pages/AppPage'
import Documents from '~/components/Documents'

import { status1, status1Reload } from '~/services/sepy'

export default {
  components: {
    AppPage,
    Documents
  },
  data() {
    return {
      status: null,
      documents: [],
      message: '',
      isCorpusLoading: false
    }
  },
  async asyncData({ params, store }) {
    try {
      return {
        status: await status1(),
        message: ''
      }
    } catch (err) {
      store.dispatch('panic', err.message)
      return {
        status: {
          documents: [],
          message: ''
        }
      }
    }
  },
  methods: {
    async reloadCorpus() {
      this.isCorpusLoading = true
      try {
        await status1Reload()
        this.status = await status1()
        this.message = `Last reload at ${new Date()}`
        this.isCorpusLoading = false
      } catch (err) {
        this.message = `Error: ${err.message}`
        this.isCorpusLoading = false
      }
    }
  }
}
</script>
