import Vue from 'vue'
import Axios from 'axios'

Axios.defaults.baseURL = 'https://curso-vue-afaac-default-rtdb.firebaseio.com/'

Vue.use({
    install(Vue){
        Vue.prototype.$http = Axios
    }
})