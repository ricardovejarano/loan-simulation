<template>
  <div class="container">
    <div class="card">
      <div class="row text-center">
        <div class="col-12">
          <span>Lets start with the information</span>
        </div>
      </div>
      <div class="row">
        <div class="col-6 mt-3">
          <input v-model="taxId" class="form-control" placeholder="Tax Id" autocomplete="off"/>
        </div>
        <div class="col-6 mt-3">
          <input v-model="businessName" class="form-control" placeholder="Business Name" autocomplete="off"/>
        </div>
        <div class="col-6 mt-3">
          <input v-model="businessAddress" class="form-control" placeholder="Business Adress" autocomplete="off"/>
        </div>
        <div class="col-6 mt-3">
          <input v-model="city" class="form-control" placeholder="City" autocomplete="off"/>
        </div>
        <div class="col-6 mt-3">
          <input v-model="state" class="form-control" placeholder="Business Adress" autocomplete="off"/>
        </div>
        <div class="col-6 mt-3">
          <input v-model="postalCode" class="form-control" placeholder="City" autocomplete="off"/>
        </div>
        <div class="col-12 mt-3">
          <input v-model="requestedAmount" class="form-control" placeholder="City" autocomplete="off"/>
        </div>
        <div class="col-12 mt-3">
          <button @click="goToOwner()" class="btn btn-block">Next Step</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Business",
  data: function() {
    return {
      taxId: 0,
      businessName: "",
      businessAddress: "",
      city: "",
      state: "",
      postalCode: 0,
      requestedAmount: 0
    };
  },
  methods: {
    goToOwner() {
      this.$router.push({ path: "/owner" });
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