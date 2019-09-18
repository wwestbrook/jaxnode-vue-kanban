import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
	icons: {
		iconfont: 'mdi'
	},
	theme: {
		themes: {
			light: {
				primary: '#003a63',
				secondary: '#0A3854',
				accent: '#015E84',
				error: '#D32F2F',
				info: '#50A2BF',
				success: '#4CAF50',
				warning: '#FFA000'
			},
			dark: {
				primary: '#003a63',
				secondary: '#0A3854',
				accent: '#015E84',
				error: '#D32F2F',
				info: '#50A2BF',
				success: '#4CAF50',
				warning: '#FFA000'
			},
			/* DO NOT ALTER!! */
			default: {
				primary: '#1976D2',
				secondary: '#424242',
				accent: '#82B1FF',
				error: '#FF5252',
				info: '#2196F3',
				success: '#4CAF50',
				warning: '#FFC107'
			}
		}
	}
});
