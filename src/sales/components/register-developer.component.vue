<script>
export default {
  name: "register-developer",
  data(){
    return {
      firstname: "",
      lastname: "",
    }
  },
  methods:{
    onSubmit(){
      console.log("Registering developer");
      this.$emit(event: "developer-registered", {
        firstname:
      });
    }
  }
}
</script>

<template>
  <div>new developer</div>
  <div>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="firstmane">Firs Name</label>
        <input type="text" id="firstmane" v-model="firsname" placeholder="first name" />
      </div>

      <div>
        <label for="firstmane">Firs Name</label>
        <input type="text" id="lasttmane" v-model="firsname" placeholder="first name" />
      </div>

      <div>
        <butt type="submit">register developer</butt>
      </div>

    </form>
  </div>
</template>

<style scoped>

</style>