<template>
  <sui-segment class="left aligned">
    <h3>{{ document.title }}</h3>
    <p>
      {{ document.excerpt.slice(0, 128) || document.body.slice(0, 128) }}...
    </p>
  </sui-segment>
</template>

<script>
export default {
  props: {
    document: {
      type: Object,
      required: true
    }
  }
}
</script>
