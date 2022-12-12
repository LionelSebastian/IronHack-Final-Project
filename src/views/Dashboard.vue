
  <template>
    <navbar/>
    SOY EL DASHBOARD
    <foot/>
  </template>
  
  <script>
  import { mapStores } from "pinia"
  import userStore from '../stores/user'

  import foot from '../components/foot.vue'
  import Navbar from '../components/navbar.vue'
  
  export default{

    components: { foot, Navbar },

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
  