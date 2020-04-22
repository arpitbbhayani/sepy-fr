<template>
  <sui-segment class="left aligned">
    <div v-if="document !== null">
      <div>
        <span class="ui tiny text">Document ID: {{ document.id }}</span>
        <sui-label v-if="score !== -1" class="large right floated">
          Score: {{ score }}
        </sui-label>
      </div>
      <h4 class="ui large text" style="margin: 0.3em 0 0.3em 0;">
        {{ document.title }}
      </h4>
      <p class="ui grey text">
        {{ (document.excerpt || document.body).slice(0, 128) }}
      </p>
    </div>
    <div v-else>
      Document with given id does not exist in the index.
    </div>
  </sui-segment>
</template>

<script>
export default {
  props: {
    document: {
      type: Object,
      required: false,
      default: null
    },
    score: {
      type: Number,
      required: false,
      default: -1
    }
  }
}
</script>
