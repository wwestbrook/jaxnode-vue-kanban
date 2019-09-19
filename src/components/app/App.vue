<template>
	<v-app :color="appColors.app">
		<nav>
			<v-app-bar app dark class="primary" height="50">
				<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
				<v-toolbar-title>
					<span class="font-weight-light">Vue Kan</span>
					<span>Ban</span>
				</v-toolbar-title>
				<v-spacer></v-spacer>
			</v-app-bar>
			<v-navigation-drawer app v-model="drawer">
				<v-list nav dense>
					<!-- Home/Dashboard -->
					<v-list-item :to="{ name: 'HomePage' }" exact>
						<v-list-item-icon>
							<v-icon>mdi-home</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>Home</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<!-- KanBan Board -->
					<v-list-item :to="{ name: 'KanbanBoard' }" exact>
						<v-list-item-icon>
							<v-icon>mdi-view-dashboard-variant</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>Kanban Board</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-navigation-drawer>
		</nav>
		<v-content>
			<router-view></router-view>
		</v-content>
		<v-footer app dark class="primary" height="25">
			<span class="white--text caption">&copy;2019 Jaxnode</span>
		</v-footer>
	</v-app>
</template>

<script>

export default {
	name: 'jaxnodeKanBan',
	data: () => ({
		drawer: false,
		appColors: {
			app: '#F5F5F5'
		}
	})
};
</script>

<style scoped lang="scss">
.nav-link {
	text-decoration: none;
	color: inherit;
}
</style>
