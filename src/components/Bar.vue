<template>
  <div>
    <md-progress-bar md-mode="buffer" :md-value="amount" :md-buffer="buffer"></md-progress-bar>
    <md-progress-bar class="md-accent" md-mode="buffer" :md-value="amount" :md-buffer="buffer"></md-progress-bar>
    <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
    <md-progress-spinner class="md-accent" md-mode="indeterminate"></md-progress-spinner>
    <div>
      Progress <br>
      <input type="range" v-model.number="amount"> {{ amount }}%
    </div>

    <div>
      Buffer <br>
      <input type="range" v-model.number="buffer"> {{ buffer }}%
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBarBuffer',
  data: () => ({
    amount: 25,
    buffer: 40
  }),
  methods: {
    changAmout () {
      this.amount = this.amount + 30
      this.buffer = this.buffer + 30
    }
  },
  mounted () {
    this.changAmout()
  }
}
</script>

<style lang="scss" scoped>
  .md-progress-bar {
    margin: 24px;
  }
</style>
