<template>
  <BasePage>
    <sui-divider hidden class="section" />
    <sui-container>
      <sui-grid :columns="2">
        <sui-grid-column>
          <sui-container class="center aligned">
            <sui-list vertical>
              <sui-list-item v-for="part in parts" :key="part.name">
                <sui-button
                  fluid
                  class="left basic aligned"
                  @click="goto(part.id)"
                >
                  <span
                    v-if="!isCompleted(part.id)"
                    style="margin-right: 0.3em;"
                    >➖</span
                  >
                  <span v-if="isCompleted(part.id)" style="margin-right: 0.3em;"
                    >✅</span
                  >
                  <span class="ui medium text" style="margin-right: 0.7em;">{{
                    part.name
                  }}</span
                  >👉<span class="ui medium text" style="margin-left: 0.7em;">{{
                    part.description
                  }}</span>
                </sui-button>
              </sui-list-item>
            </sui-list>
          </sui-container>
        </sui-grid-column>
        <sui-grid-column>
          <sui-divider hidden class="section" />
          <sui-image
            class="large centered"
            src="/static/img/illustrations/search.svg"
          />
        </sui-grid-column>
      </sui-grid>
    </sui-container>
  </BasePage>
</template>

<script>
import { mapState } from 'vuex'
import BasePage from '~/components/Pages/BasePage'

export default {
  components: {
    BasePage
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
    ...mapState({
      progress: (state) => state.progress
    })
  },
  methods: {
    goto(part) {
      this.$router.push(`/${part}`)
    },
    isCompleted(id) {
      return this.progress.parts_completed && this.progress.parts_completed[id]
    }
  }
}
</script>
