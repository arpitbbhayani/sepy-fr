<template>
  <sui-container>
    <sui-container class="center aligned">
      <Progress />
      <sui-list vertical>
        <sui-list-item v-for="part in parts" :key="part.name">
          <sui-button
            fluid
            class="left aligned"
            :class="{ basic: !isActive(part.id) }"
            @click="goto(part.id)"
          >
            <span v-if="!isCompleted(part.id)" style="margin-right: 0.1em;"
              >➖</span
            >
            <span v-if="isCompleted(part.id)" style="margin-right: 0.1em;"
              >✅</span
            >
            <span class="ui medium text" style="margin-right: 0.4em;">{{
              part.name
            }}</span
            >👉<span class="ui medium text" style="margin-left: 0.4em;">{{
              part.description
            }}</span>
          </sui-button>
        </sui-list-item>
      </sui-list>
    </sui-container>
  </sui-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Progress from '~/components/Progress'

export default {
  components: {
    Progress
  },
  data() {
    return {
      parts: [
        { id: 1, name: 'Part 01', description: 'Reading the corpus' },
        { id: 2, name: 'Part 02', description: 'Cleaning the text' },
        { id: 3, name: 'Part 03', description: 'Extracting the excerpt' },
        { id: 4, name: 'Part 04', description: 'Tokenize' },
        { id: 5, name: 'Part 05', description: 'Normalize' },
        { id: 6, name: 'Part 06', description: 'Building inverted index' },
        { id: 7, name: 'Part 07', description: 'Search v1' },
        { id: 8, name: 'Part 08', description: 'Building term frequency' },
        { id: 9, name: 'Part 09', description: 'Ranking Function' },
        { id: 10, name: 'Part 10', description: 'Search v2' }
      ]
    }
  },
  computed: {
    ...mapGetters({
      completed: 'completed'
    }),
    ...mapState({
      progress: (state) => state.progress
    })
  },
  methods: {
    isActive(partId) {
      return this.$route.path === `/${partId}`
    },
    goto(part) {
      this.$router.push(`/${part}`)
    },
    isCompleted(id) {
      return this.progress.parts_completed && this.progress.parts_completed[id]
    }
  }
}
</script>
