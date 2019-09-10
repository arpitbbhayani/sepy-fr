<template>
  <sui-container>
    <sui-segment basic class="center aligned">
      <h4 class="ui red large text">
        {{ error }}
      </h4>
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
