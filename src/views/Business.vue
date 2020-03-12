<template>
  <div class="container">
    <div class="card">
      <div class="row text-center">
        <div class="col-12">
          <span>Business Information</span>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 mt-3">
          <input v-model="businessInfo.taxId" @keyup="changeValueBusiness({value: $event.target.value, name: 'taxId'})" class="form-control" placeholder="Tax Id" autocomplete="off"/>
        </div>
        <div class="col-12 col-md-6 mt-3">
          <input v-model="businessInfo.businessName" @keyup="changeValueBusiness({value: $event.target.value, name: 'businessName'})" class="form-control" placeholder="Business Name" autocomplete="off"/>
        </div>
        <div class="col-12 col-md-6 mt-3">
          <input v-model="businessInfo.businessAddress" @keyup="changeValueBusiness({value: $event.target.value, name: 'businessAddress'})" class="form-control" placeholder="Business Adress" autocomplete="off"/>
        </div>
        <div class="col-12 col-md-6 mt-3">
          <input v-model="businessInfo.city" @keyup="changeValueBusiness({value: $event.target.value, name: 'city'})" class="form-control" placeholder="City" autocomplete="off"/>
        </div>
        <div class="col-12 col-md-6 mt-3">
          <input v-model="businessInfo.state" @keyup="changeValueBusiness({value: $event.target.value, name: 'state'})" class="form-control" placeholder="State" autocomplete="off"/>
        </div>
        <div class="col-12 col-md-6 mt-3">
          <input v-model="businessInfo.postalCode" @keyup="changeValueBusiness({value: $event.target.value, name: 'postalCode'})" class="form-control" placeholder="Postal Cide" autocomplete="off"/>
        </div>
        <div class="col-12 mt-3">
          <input v-model="businessInfo.requestedAmount" @keyup="changeValueBusiness({value: $event.target.value, name: 'requestedAmount'})" class="form-control" placeholder="Requested Amount" autocomplete="off"/>
        </div>
        <div class="col-12 mt-3">
          <button @click="goToOwner()" class="btn btn-block">Next Step</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: "Business",
  computed: {
    ...mapState(['businessInfo'])
  },
  methods: {
    goToOwner() {
      this.$router.push({ path: "/owner" });
    },
    ...mapMutations(['changeValueBusiness']),
    keymonitor(event) {
      console.log(event.target.value)
    }
  }
};
</script>
<style>
.card {
  min-width: 17rem;
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