<template>
  <div class="container">
    <div v-if="flagShow" v-bind:class="nameClass" class="card">
      <div class="row text-center">
        <div class="col-12">
          <span class="final-decision-txt">{{status}}</span>
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

<style scoped>
.card {
  position: absolute;
  border-radius: 1rem;
  padding: 2rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.card-aproved {
  background-color: #228B22;
}

.card-declined {
  background-color: #B22222;
}

.card-undeclined {
  background-color: #00CED1;    
}

.final-decision-txt {
  font-size: 2.5rem;
  font-weight: bold;
}

.btn {
  border-radius: 1rem;
  background-color: transparent;
  color: white;
  font-weight: bold;
}

.btn:hover {
  background-color: black;
  color: white;
  font-weight: bold;
}
</style>