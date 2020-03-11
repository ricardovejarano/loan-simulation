<template>
  <div id="main-content">
    <div class="container">
      <div class="row align-middle align-items-center card-login">
        <div class="col-6 mx-auto">
          <div class="jumbotron text-center">
            <div class="row mb-3">
              <div class="col-4 offset-4 title-txt">
                <span>Welcome to the loan simulation</span>
              </div>
            </div>
            <div class="row">
              <div class="col-4 offset-4">
                <button class="btn btn-block btn-start">Let's start</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
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
  border-radius: 1rem;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.jumbotron:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.btn-start {
  background-color: grey;
  color: white;
  font-weight: bold;
  border-radius: 1rem;
}

.btn-start:hover {
  background-color: black;
  color: white;
}

span {
  font-size: 1.2rem;
  font-weight: bold;
}

.title-txt {
  line-height: 0.9rem;
}
</style>