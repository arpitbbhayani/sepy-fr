<template>
  <AppPage>
    <sui-segment basic class="center aligned">
      <h1>Cleaning the text</h1>
    </sui-segment>
    <sui-divider hidden />
  </AppPage>
</template>

<script>
import AppPage from '~/components/Pages/AppPage'

import { status1 } from '~/services/sepy'

export default {
  components: {
    AppPage
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
