<template>
  <div class="tab-com">
    <md-tabs md-sync-route>
      <md-tab id="tab-home" md-label="Home">
        Home Tab
      </md-tab>

      <md-tab id="tab-pages" md-label="Pages">
        Pages tab
        <p>Unde provident nemo reiciendis officia, possimus repellendus. Facere dignissimos dicta quis rem. Aliquam
          aspernatur dolor atque nisi id deserunt laudantium quam repellat.</p>
      </md-tab>

      <md-tab id="tab-posts" md-label="Posts">
        Posts tab
        <p>Qui, voluptas repellat impedit ducimus earum at ad architecto consectetur perferendis aspernatur iste amet ex
          tempora animi, illum tenetur quae assumenda iusto.</p>
      </md-tab>

      <md-tab id="tab-favorites" md-label="Favorites">
        Favorites tab
        <p>Maiores, dolorum. Beatae, optio tempore fuga odit aperiam velit, consequuntur magni inventore sapiente alias
          sequi odio qui harum dolorem sunt quasi corporis.</p>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
export default {
  name: 'TabContent'
}
</script>
<style lang="scss" scoped>
  .tab-com {
    margin-left: 100px;
  }

  .md-content {
    border: red solid 1px;
    margin-top: 200px;
    width: 100%;
  }
</style>
