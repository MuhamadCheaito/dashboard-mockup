import { createApp } from 'vue'
import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import '@quasar/extras/ionicons-v4/ionicons-v4.css'
import '@quasar/extras/eva-icons/eva-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Import Custom Styles
import './scss/main.scss';

import router from './routes'
import store from './store'
import App from './App.vue'
import VueApexCharts from 'vue3-apexcharts'

const myApp = createApp(App)

myApp.use(router).use(VueApexCharts).use(store).use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')