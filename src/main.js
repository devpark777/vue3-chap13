import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

window.Kakao.init("0bcbfa852cae445f899b061b175f6319"); //발급 받은 앱키
