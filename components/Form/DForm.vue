<template>
  <sui-form class="medium" @submit.prevent="submitprevent">
    <h1 v-if="title">
      <sui-segment basic class="center aligned">
        <h1>{{ title }}</h1>
      </sui-segment>
    </h1>
    <slot />
    <sui-divider hidden />
    <sui-form-field>
      <sui-button v-if="submitbuttontext" type="submit" class="primary">
        {{ submitbuttontext }}
      </sui-button>
      <sui-button
        v-if="oncancel"
        type="button"
        class="small"
        style="margin-left: 0.5em;"
        @click="onCancelClick"
      >
        Cancel
      </sui-button>
    </sui-form-field>
  </sui-form>
</template>

<script>
export default {
  name: 'DForm',
  components: {},
  props: {
    submitprevent: {
      type: Function,
      required: false,
      default: () => {}
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    submitbuttontext: {
      type: String,
      required: false,
      default: ''
    },
    oncancel: {
      type: Function,
      required: false,
      default: null
    }
  },
  methods: {
    onCancelClick() {
      if (this.oncancel) {
        this.oncancel()
      }
    }
  }
}
</script>
