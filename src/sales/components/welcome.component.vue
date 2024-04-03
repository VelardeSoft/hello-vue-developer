<script>
export default {
  name: "welcome",
  props:{
    firstname: String,
    lastname:String
  },
  methods:{
    developerName(){
      let developer = new Developer(this.firstname, this.lastname);
      return developer.fullname;
    }
  }
}
</script>

<template>
  <p>hello {{developerName()}}</p>
</template>

<style scoped>

</style>