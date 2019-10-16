<template>
  <div>
    <BaseHeader/>
    <BaseFilterRow/>
    <nuxt />
    <BaseFooter/>
  </div>
</template>

<script>
import BaseHeader from '@/components/BaseHeader.vue'
import BaseFooter from '@/components/BaseFooter.vue'
import BaseFilterRow from '@/components/BaseFilterRow.vue'

export default {
  components: {
    BaseHeader,
    BaseFooter,
    BaseFilterRow
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

</style>
