<template>
 <div class="container">
    <div class="card">
      <div class="row text-center">
        <div class="col-12">
          <span>Owner information</span>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 mt-3">
          <input v-model="ownerInfo.socialSecurityNumber"  @keyup="changeValueOwner({value: $event.target.value, name: 'socialSecurityNumber'})" class="form-control" placeholder="Social Security Number" autocomplete="off"/>
        </div>
        <div class="col-12 col-md-6 mt-3">
          <input v-model="ownerInfo.name"  @keyup="changeValueOwner({value: $event.target.value, name: 'name'})" class="form-control" placeholder="Name" autocomplete="off"/>
        </div>
        <div class="col-12 col-md-6 mt-3">
          <input v-model="ownerInfo.email"  @keyup="changeValueOwner({value: $event.target.value, name: 'email'})" class="form-control" placeholder="Email" autocomplete="off"/>
        </div>
        <div class="col-12 col-md-6 mt-3">
          <input v-model="ownerInfo.address"  @keyup="changeValueOwner({value: $event.target.value, name: 'address'})" class="form-control" placeholder="Address" autocomplete="off"/>
        </div>
        <div class="col-12 col-md-6 mt-3">
          <input v-model="ownerInfo.city"  @keyup="changeValueOwner({value: $event.target.value, name: 'city'})" class="form-control" placeholder="City" autocomplete="off"/>
        </div>
        <div class="col-12 col-md-6 mt-3">
          <input v-model="ownerInfo.state"  @keyup="changeValueOwner({value: $event.target.value, name: 'state'})" class="form-control" placeholder="State" autocomplete="off"/>
        </div>
        <div class="col-12 mt-3">
          <input v-model="ownerInfo.postalCode"  @keyup="changeValueOwner({value: $event.target.value, name: 'postalCode'})" class="form-control" placeholder="Postal Code" autocomplete="off"/>
        </div>
        <div class="col-6 mt-3">
          <button @click="back()" class="btn btn-block">Back</button>
        </div>
        <div class="col-6 mt-3">
          <button @click="goToDecision()" class="btn btn-block">Apply</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import { mapState, mapMutations } from 'vuex'

export default {
  name: "Owner",
  computed: {
    ...mapState(['ownerInfo'])
  },
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
    },
    back() {
      this.$router.push({ path: "/business" });
    },
     ...mapMutations(['changeValueOwner'])
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