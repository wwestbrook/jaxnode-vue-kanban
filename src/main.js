import Vue from 'vue';
import App from './components/app/App.vue';
import vuetify from './plugins/vuetify';
import router from './routes/router';
import store from './stores/store';

Vue.config.productionTip = false;

new Vue({
	vuetify,
	render: h => h(App),
	router,
	store
}).$mount('#app');
