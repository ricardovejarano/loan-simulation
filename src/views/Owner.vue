<template>
 <div class="container">
    <div class="card">
      <div class="row text-center">
        <div class="col-12">
          <span>Owner information</span>
        </div>
      </div>
      <div class="row">
        <div class="col-6 mt-3">
          <input v-model="socialSecurityNumber" class="form-control" placeholder="Social Security Number" autocomplete="off"/>
        </div>
        <div class="col-6 mt-3">
          <input v-model="name" class="form-control" placeholder="Name" autocomplete="off"/>
        </div>
        <div class="col-6 mt-3">
          <input v-model="email" class="form-control" placeholder="Email" autocomplete="off"/>
        </div>
        <div class="col-6 mt-3">
          <input v-model="address" class="form-control" placeholder="Address" autocomplete="off"/>
        </div>
        <div class="col-6 mt-3">
          <input v-model="city" class="form-control" placeholder="City" autocomplete="off"/>
        </div>
        <div class="col-6 mt-3">
          <input v-model="state" class="form-control" placeholder="State" autocomplete="off"/>
        </div>
        <div class="col-12 mt-3">
          <input v-model="postalCode" class="form-control" placeholder="Postal Code" autocomplete="off"/>
        </div>
        <div class="col-12 mt-3">
          <button @click="goToDecision()" class="btn btn-block">Apply For</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Owner",
  data: function() {
    return {
      socialSecurityNumber: 0,
      name: "",
      email: "",
      address: "",
      city: "",
      postalCode: 0,
      state: ""
    };
  },
  methods: {
    goToDecision() {
      this.$router.push({ path: "/decision" });
    }
  }
};
</script>

<style>
.card {
  position: absolute;
  border-radius: 1rem;
  padding: 2rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.btn {
  border-radius: 1rem;
  background-color: grey;
  color: white;
  font-weight: bold;
}

.btn:hover {
  background-color: black;
  color: white;
  font-weight: bold;
}
</style>