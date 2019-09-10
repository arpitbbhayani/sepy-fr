<template>
  <div
    style="position: fixed; top: 5px; right: 75px; width: 500px; z-index: 1001;"
  >
    <Message
      v-for="{ type, message } in messages"
      :id="type"
      :key="message"
      :message="message"
      :type="type"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Message from '~/components/Messages/Message'

export default {
  components: {
    Message
  },
  computed: {
    ...mapState({
      messages: (state) => state.messages.messages
    })
  }
}
</script>
