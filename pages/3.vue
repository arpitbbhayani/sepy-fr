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
        placeholder="Text content"
      />
      <DTextarea v-model="excerpt" label="Excerpt" :readonly="true" />
    </DForm>
  </AppPage>
</template>

<script>
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
    doExtractExcerpt() {
      status3(this.text).then((excerpt) => {
        this.excerpt = excerpt
      })
    }
  }
}
</script>
