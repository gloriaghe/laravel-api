

 require('./bootstrap');

 window.Vue = require('vue');

//importiamo il file App.vue
import App from './components/App.vue';



 const app = new Vue({
     el: '#root',
     render: h => h(App)
 });
