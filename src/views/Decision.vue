<template>
  <div class="container">
    <div v-if="flagShow" class="card">
      <div class="row text-center">
        <div class="col-12">
          <span>{{status}}</span>
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
  data: function () {
    return {
      status: '',
      nameClass: '',
      flagShow: false
    }
  },
  computed: {
    ...mapState(['businessInfo'])
  },
  methods: {
    back() {
      this.$router.push({ path: "/owner" });
    },
    returnStart() {
      this.$router.push({ path: "/business" });
    },
    defineCass(status) {
        switch(status) {
            case 'Approved': this.nameClass = 'card-aproved';
            break;
            case 'Declined': this.nameClass = 'card-declined';
            break;
            case 'Undecided': this.nameClass = 'card-undeclined';
            break;
            default: this.nameClass = 'card-undeclined';
            break;    
        }
        this.status = status;
        this.flagShow = true;
    }

  },
  mounted () {
    const amount = this.$store.state.businessInfo.requestedAmount; 
    axios
      .get(`http://localhost:8881/request?requested_amount=${amount}`)
      .then(response => this.defineCass(response.data.response));
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

.card-aproved {
  background-color: green;
}

.card-declined {
  background-color: red;
}

.card-undeclined {
  background-color: blue;    
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