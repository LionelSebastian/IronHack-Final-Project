<template>
    DASHBOARD
</template>

<script>
import { mapStore } from "pinia"
import userStore from "../stores/users"

export default{
  computed:{
    ...mapStore(userStore)
  },
  methods:{
     login(){
        this.userStore.signUp()
     }   
    },
} ; 
</script>

<style>
</style>