import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    businessInfo:
    {
      taxId: null,
      businessName: "",
      businessAddress: "",
      city: "",
      state: "",
      postalCode: null,
      requestedAmount: null
    },
    ownerInfo:
    {
      socialSecurityNumber: null,
      name: "",
      email: "",
      address: "",
      city: "",
      postalCode: null,
      state: ""
    }
  },
  mutations: {
    changeValueBusiness(state, value) {
      switch (value.name) {
        case 'taxId': state.businessInfo.taxId = value.value;
          break;
        case 'businessName': state.businessInfo.businessName = value.value;
          break;
        case 'businessAddress': state.businessInfo.businessAddress = value.value;
          break;
        case 'city': state.businessInfo.city = value.value;
          break;
        case 'state': state.businessInfo.state = value.value;
          break;
        case 'postalCode': state.businessInfo.postalCode = value.value;
          break;
        case 'requestedAmount': state.businessInfo.requestedAmount = value.value;
          break;
        default: state.businessInfo.taxId = value.value;
          break;
      }
    },
    changeValueOwner(state, value) {
      switch (value.name) {
        case 'socialSecurityNumber': state.ownerInfo.socialSecurityNumber = value.value;
          break;
        case 'name': state.ownerInfo.name = value.value;
          break;
        case 'email': state.ownerInfo.email = value.value;
          break;
        case 'address': state.ownerInfo.address = value.value;
          break;
        case 'city': state.ownerInfo.city = value.value;
          break;
        case 'postalCode': state.ownerInfo.postalCode = value.value;
          break;
        case 'state': state.ownerInfo.state = value.value;
          break;
        default: state.ownerInfo.taxId = value.value;
          break;
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
