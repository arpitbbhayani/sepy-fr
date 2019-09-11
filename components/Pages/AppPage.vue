<template>
  <BasePage>
    <sui-grid>
      <sui-grid-column :width="5">
        <ProgressAndParts />
      </sui-grid-column>
      <sui-grid-column :width="11">
        <sui-segment basic>
          <slot />
        </sui-segment>
      </sui-grid-column>
    </sui-grid>
  </BasePage>
</template>

<script>
import BasePage from '~/components/Pages/BasePage'
import ProgressAndParts from '~/components/ProgressAndParts'

export default {
  components: {
    BasePage,
    ProgressAndParts
  }
}
</script>
