<template>
  <div>
    <Error v-if="error" :error="error" />
    <div v-else>
      <slot />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Error from '~/components/Messages/Error'

export default {
  components: {
    Error
  },
  computed: {
    ...mapState({
      error: (state) => state.error
    })
  }
}
</script>
