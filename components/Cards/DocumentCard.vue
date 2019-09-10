<template>
  <sui-segment basic class="left aligned">
    <sui-divider hidden />
    <sui-image
      v-if="item.img"
      :src="item.img"
      onerror="this.style.display = 'none';"
    />
    <h3>
      <a class="ui black text" target="_blank" :href="item.original_url">{{
        item.title
      }}</a>
    </h3>
    <p>
      {{ item.description }}...
      <a target="_blank" :href="item.original_url">Read more</a>
    </p>
    <p>
      <span
        v-if="item.published_at"
        class="ui grey text"
        style="margin-right: 0.3em;"
      >
        {{ publishedAt }}
      </span>
      <span class="ui blue text">
        <a class="ui blue text" target="_blank" :href="item.original_url"
          >Original source</a
        >
      </span>
    </p>
    <sui-divider hidden />
    <sui-button-group>
      <sui-button icon basic>
        <sui-icon name="heart outline" /> Like
      </sui-button>
      <sui-button icon basic>
        <sui-icon name="checkmark" /> Mark as read
      </sui-button>
      <sui-button icon basic> <sui-icon name="clock" /> Read Later </sui-button>
      <sui-button basic @click="openInNewTab"
        ><sui-icon name="twitter" /> Tweet</sui-button
      >
    </sui-button-group>
    <sui-divider hidden />
    <sui-divider />
  </sui-segment>
</template>

<script>
import moment from 'moment'
import { mapActions } from 'vuex'

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    publishedAt() {
      return moment(this.item.published_at).format('MMMM Do, YYYY')
    }
  },
  methods: {
    ...mapActions({
      actPublishMessage: 'messages/publishMessage',
      actStartLoading: 'loading/start',
      actStopLoading: 'loading/stop'
    }),
    openInNewTab() {
      window
        .open(
          `https://twitter.com/intent/tweet?text=Must Read: ${this.item.title} - ${this.item.original_url}`,
          '_blank'
        )
        .focus()
    }
  }
}
</script>
