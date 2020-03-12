<template>
  <div class="container">
    <div class="card">
      <div class="row text-center">
        <div class="col-12">
          <span>Decision</span>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-6">
            <button @click="back()" class="btn">Back</button>
        </div>
        <div class="col-6">
            <button @click="returnStart()" class="btn">Again</button>
        </div>
    </div>
    </div>
    
  </div>
</template>
<script>
import axios from 'axios';
import { mapState } from 'vuex'

export default {
  name: "Decision",
   computed: {
    ...mapState(['businessInfo'])
  },
  methods: {
    back() {
      this.$router.push({ path: "/owner" });
    },
    returnStart() {
      this.$router.push({ path: "/business" });
    }
  },
  mounted () {
    const amount = this.$store.state.businessInfo.requestedAmount; 
    axios
      .get(`http://localhost:8881/request?requested_amount=${amount}`)
      .then(response => console.log(response.data.response));
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