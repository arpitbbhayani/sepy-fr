<template>
  <BasePage>
    <sui-divider hidden class="section" />
    <sui-container>
      <sui-grid :columns="2">
        <sui-grid-column>
          <ProgressAndParts />
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
import BasePage from '~/components/Pages/BasePage'
import ProgressAndParts from '~/components/ProgressAndParts'

export default {
  components: {
    BasePage,
    ProgressAndParts
  }
}
</script>
