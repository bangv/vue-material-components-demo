<template>
  <div class="hello-world">
    <div class="md-layout md-gutter">
      <div class="md-layout-item"></div>
      <div class="md-layout-item"></div>
      <div class="md-layout-item"></div>
    </div>
    <div class="elevation-demo">
      <div class="md-contents md-elevation-1">1</div>
      <div class="md-contents md-elevation-2">2</div>
      <div class="md-contents md-elevation-3">3</div>
      <div class="md-contents md-elevation-4">4</div>
      <div class="md-contents md-elevation-5">5</div>
      <div class="md-contents md-elevation-6">6</div>
      <div class="md-contents md-elevation-7">7</div>
      <div class="md-contents md-elevation-8">8</div>
      <div class="md-contents md-elevation-9">9</div>
      <div class="md-contents md-elevation-10">10</div>
      <div class="md-contents md-elevation-11">11</div>
      <div class="md-contents md-elevation-12">12</div>
      <div class="md-contents md-elevation-13">13</div>
      <div class="md-contents md-elevation-14">14</div>
      <div class="md-contents md-elevation-15">15</div>
      <div class="md-contents md-elevation-16">16</div>
      <div class="md-contents md-elevation-17">17</div>
      <div class="md-contents md-elevation-18">18</div>
      <div class="md-contents md-elevation-19">19</div>
      <div class="md-contents md-elevation-20">20</div>
      <div class="md-contents md-elevation-21">21</div>
      <div class="md-contents md-elevation-22">22</div>
      <div class="md-contents md-elevation-23">23</div>
      <div class="md-contents md-elevation-24">24</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "~vue-material/dist/theme/engine";

  .hello-world {
    margin-left: 20px;
  }

  .md-layout-item {
    height: 40px;

    &:after {
      width: 100%;
      height: 100%;
      display: block;
      background: md-get-palette-color(red, 600);
      content: " ";
    }
  }

  .elevation-demo {
    padding: 16px;
    display: flex;
    flex-wrap: wrap;
  }

  .md-content {
    width: 100px;
    height: 100px;
    margin: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .elevation-demo {
    padding: 16px;
    display: flex;
    flex-wrap: wrap;
  }

  div.md-contents {
    width: 100px;
    height: 100px;
    margin: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
