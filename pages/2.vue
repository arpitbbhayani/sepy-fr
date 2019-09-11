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
      <DTextarea v-model="cleanedText" label="Cleaned Text" :readonly="true" />
    </DForm>
  </AppPage>
</template>

<script>
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
    doClean() {
      status2(this.text).then((cleanedText) => {
        this.cleanedText = cleanedText
      })
    }
  }
}
</script>
