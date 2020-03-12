<template>
  <div class="container">
    <div class="card">
      <input v-model="businessName" class="form-control" placeholder="Business Name" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Business",
  data: function() {
    return {
      taxId: 0,
      businessName: '',
      businessAddress: '',
      city: '',
      state: '',
      postalCode: 0,
      requestedAmount: 0
    };
  }
};
</script>
<style>
  .card {
    width: 10rem;

  }
</style>