
  <template>
    Dashboard.vue
    <footer/>
  </template>
  
  <script>
  import footer from '../components/footer.vue'
  import { mapStores } from "pinia"
  import userStore from '../stores/user'
  
  export default{

    components: footer,

    computed:{
      ...mapStores(userStore)
     },

    methods:{
     login(){
        this.userStore.signUp()
     }   

    },

  }
  </script>
  
  
  <style scoped>
  
  </style>
  