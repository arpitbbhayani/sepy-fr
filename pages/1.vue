<template>
  <AppPage>
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
      </sui-segment>
    </div>
  </AppPage>
</template>

<script>
import AppPage from '~/components/Pages/AppPage'
import Documents from '~/components/Documents'

import { status1 } from '~/services/sepy'

export default {
  components: {
    AppPage,
    Documents
  },
  async asyncData({ params, store }) {
    try {
      return {
        status: await status1()
      }
    } catch (err) {
      store.dispatch('panic', err.message)
      return {}
    }
  }
}
</script>
