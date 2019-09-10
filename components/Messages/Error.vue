<template>
  <sui-container>
    <sui-segment basic class="center aligned">
      <sui-divider hidden class="section" />
      <sui-image
        :src="'/static/img/illustrations/500.svg'"
        class="large centered"
      />
      <h1>Something went wrong :-(</h1>
      <p>Just in case if you were wondering, the error is</p>
      <h3 class="ui red large text">
        {{ error }}
      </h3>
    </sui-segment>
  </sui-container>
</template>

<script>
export default {
  props: {
    error: {
      type: String,
      required: true
    }
  }
}
</script>
