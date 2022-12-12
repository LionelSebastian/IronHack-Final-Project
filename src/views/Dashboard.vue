
  <template>
    <navbar/>
    SOY EL DASHBOARD:::
    <RouterLink to="/">Sign Out</RouterLink>
    <RouterView/>
    <foot/>
  </template>
  
  <script>
  import { mapStores } from "pinia"
  import userStore from '../stores/user'
  import { RouterLink, RouterView} from 'vue-router'

  import foot from '../components/foot.vue'
  import navbar from '../components/navbar.vue'
  
  export default{

    components: {foot, navbar},

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
  