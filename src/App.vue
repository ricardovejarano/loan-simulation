<template>
  <div id="main-content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>
<style>
#main-content {
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: rgba(226, 226, 226, 1);
  min-height: 100vh;
}
.card {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 1rem;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>

