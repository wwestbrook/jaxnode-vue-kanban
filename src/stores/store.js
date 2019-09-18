import Vue from 'vue';
import Vuex from 'vuex';
import kanbanModule from './modules/kanban';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	modules: {
		kanban: kanbanModule
	}
});
