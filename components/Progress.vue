<template>
  <sui-container>
    <sui-divider hidden />
    <sui-progress
      state="active"
      indicating
      :percent="(completed * 100) / progress.total_parts"
      :label="
        `You have completed ${completed} of ${progress.total_parts} parts`
      "
    />
    <sui-divider hidden />
  </sui-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState({
      progress: (state) => state.progress
    }),
    ...mapGetters({
      completed: 'completed'
    })
  },
  methods: {}
}
</script>
