<template>
  <sui-container>
    <sui-segment basic>
      <sui-progress
        state="active"
        indicating
        :percent="(completed * 100) / progress.total_parts"
        :label="
          `You have completed ${completed} of ${progress.total_parts} parts`
        "
      />
    </sui-segment>
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
