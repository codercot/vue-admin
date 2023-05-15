<template>
  <div class="dashboard-container">
    <Card></Card>
    <Sale></Sale>
    <observe></observe>
  </div>
</template>

<script>
import Card from './Card//index.vue'
import Sale from './Sale/index.vue'
import observe from './Observe/index.vue'
export default {
  name: 'Dashboard',
  components: {
    Card,
    Sale,
    observe
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }

  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
