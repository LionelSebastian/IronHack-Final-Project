 <template>
    <navbar/>
    SOY AUTH PAGE:::
    <RouterLink to="/Dashboard">Go to Dashboard</RouterLink>
    <foot/>
</template>
    
<script>
import { RouterLink } from 'vue-router'
import { mapStores } from "pinia"
import userStore from '../stores/user'

import navbar from '../components/navbar.vue';
import foot from '../components/foot.vue'


export default{
    components: { navbar, foot },
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
    