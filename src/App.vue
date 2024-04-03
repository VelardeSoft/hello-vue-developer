<script>
import RegisterDeveloper from "./sales/components/register-developer.component.vue";

export default {
  name: "app",
  components: {RegisterDeveloper},
  data() {
    return {
      firstname: '',
      lastname: '',
      developerCount: 0
    }
  },
  methods: {
    onDeveloperRegistered(developer) {
      this.firstname + developer.firstname;
      this.lastname = developer.lastname;
      console.log("Developer registered: ", developer);
      this.updateDeveloperCount(developer);
    },
    updateDeveloperCount(developer){
      if(developer.fullname !== "Unknown")
        this.developerCount++;
    }
  }
}
</script>

<template>
  <h1>hello vue developer applications</h1>
  <register-developer v-on:developer-registered="onDevelopersRegister"/>
  <welcome :firstname="firstname"
</template>