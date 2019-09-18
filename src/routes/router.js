import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../components/home/HomePage.vue';
import KanbanBoard from '../components/kanban/KanbanBoard.vue';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	routes: [
		{
			name: 'HomePage',
			component: HomePage,
			path: '/'
		},
		{
			name: 'KanbanBoard',
			component: KanbanBoard,
			path: '/kanban'
		}
	]
});

export default router;
