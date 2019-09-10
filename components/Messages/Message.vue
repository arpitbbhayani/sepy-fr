<template>
  <div>
    <p
      :class="{ red: type === 'error', green: type === 'success' }"
      class="ui message"
      @click="doCloseMessage"
    >
      <span class="ui white text"
        ><b>{{ message }}</b></span
      >
    </p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    message: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  mounted() {
    const self = this
    setTimeout(() => {
      self.actDiscardMessage(self.message)
    }, 5000)
  },
  methods: {
    ...mapActions({
      actDiscardMessage: 'messages/discardMessage'
    }),
    doCloseMessage(e) {
      this.actDiscardMessage(this.message)
    }
  }
}
</script>
