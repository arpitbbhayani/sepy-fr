<template>
  <div>
    <LineLoader v-if="isLoading" />
    <TopMenu />
    <Messages />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import LineLoader from '~/components/LineLoader'
import Footer from '@/components/Menus/Footer'
import TopMenu from '@/components/Menus/TopMenu'
import Messages from '@/components/Messages/Messages'

export default {
  scrollToTop: true,
  components: {
    TopMenu,
    Footer,
    Messages,
    LineLoader
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.loading.loading
    })
  }
}
</script>
