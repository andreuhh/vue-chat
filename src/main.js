import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '../src/assets/main.css'

// import firerbase auth service
import {projectAuth} from './firebase/config'
let app

// keep the same page after redirect
projectAuth.onAuthStateChanged(() => {
    if(!app){
    app = createApp(App)
      .use(router)
      .mount('#app')
    }
})

