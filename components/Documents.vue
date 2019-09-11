<template>
  <div>
    <sui-list vertical>
      <sui-list-item v-for="document in documents" :key="document.id">
        <DocumentCard :document="document" />
      </sui-list-item>
    </sui-list>
  </div>
</template>

<script>
import DocumentCard from '~/components/Cards/DocumentCard'

export default {
  components: {
    DocumentCard
  },
  props: {
    documents: {
      type: Array,
      required: false,
      default() {
        return []
      }
    }
  }
}
</script>
