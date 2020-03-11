<template>
  <div id="main-content">
    <div class="container">
      <div class="row align-middle align-items-center card-login">
        <div class="col-6 mx-auto">
          <div class="jumbotron">Welcome to the loan simulated system</div>
        </div>
      </div>
    </div>
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
}
#main-content .card-login {
  height: 100vh;
}

.jumbotron {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.jumbotron:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>
