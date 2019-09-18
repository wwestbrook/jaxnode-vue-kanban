<template>
	<v-container grid-list-md>
		<h2>Kanban Board</h2>
		<div>
			<p>Create and modify kanban cards.</p>
		</div>
		<v-layout>
			<v-form action="#" method="post" v-on:submit.prevent="submitForm">
				<v-text-field label="Add Card" required v-model="cardName"></v-text-field>
			</v-form>
		</v-layout>
		<v-layout>
			<!-- NEW Column -->
			<v-flex md3>
				<v-card>
					<v-toolbar color="secondary" dark>
						<v-toolbar-title>New Items</v-toolbar-title>
						<v-spacer></v-spacer>
					</v-toolbar>
					<v-list>
						<draggable v-model="newItems" :options="{ group: 'default' }">
							<v-list-item v-for="item in newItems" :key="item.id">
								<v-list-item-content>
									<v-list-item-title v-text="item.text"></v-list-item-title>
								</v-list-item-content>
								<v-list-item-action>
									<v-btn icon>
										<v-icon color="grey lighten-1">mdi-emoticon-happy</v-icon>
									</v-btn>
								</v-list-item-action>
							</v-list-item>
						</draggable>
					</v-list>
				</v-card>
			</v-flex>
			<!-- InProgress Column -->
			<v-flex md3>
				<v-card>
					<v-toolbar color="warning" dark>
						<v-toolbar-title>In Progress</v-toolbar-title>
						<v-spacer></v-spacer>
					</v-toolbar>
					<draggable v-model="inProgressItems" :options="{ group: 'default' }">
						<v-list-item v-for="item in inProgressItems" :key="item.id">
							<v-list-item-content>
								<v-list-item-title v-text="item.text"></v-list-item-title>
							</v-list-item-content>
							<v-list-item-action>
								<v-btn icon>
									<v-icon color="grey lighten-1">mdi-emoticon-happy</v-icon>
								</v-btn>
							</v-list-item-action>
						</v-list-item>
					</draggable>
				</v-card>
			</v-flex>
			<!-- Done Column -->
			<v-flex md3>
				<v-card>
					<v-toolbar color="success" dark>
						<v-toolbar-title>Done</v-toolbar-title>
						<v-spacer></v-spacer>
					</v-toolbar>
					<draggable v-model="doneItems" :options="{ group: 'default' }">
						<v-list-item v-for="item in doneItems" :key="item.id">
							<v-list-item-content>
								<v-list-item-title v-text="item.text"></v-list-item-title>
							</v-list-item-content>
							<v-list-item-action>
								<v-btn icon>
									<v-icon color="grey lighten-1">mdi-emoticon-happy</v-icon>
								</v-btn>
							</v-list-item-action>
						</v-list-item>
					</draggable>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import { mapState } from 'vuex';
import Draggable from 'vuedraggable';

export default {
	name: 'KanbanBoard',
	data: () => ({
		cardName: ''
	}),
	components: {
		draggable: Draggable
	},
	computed: {
		...mapState('kanban', ['items']),
		newItems: {
			get() {
				return this.items.new;
			},
			set(items) {
				this.$store.commit('kanban/updateItems', {
					items,
					itemType: 'new'
				});
			}
		},
		inProgressItems: {
			get() {
				return this.items.inProgress;
			},
			set(items) {
				this.$store.commit('kanban/updateItems', {
					items,
					itemType: 'inProgress'
				});
			}
		},
		doneItems: {
			get() {
				return this.items.done;
			},
			set(items) {
				this.$store.commit('kanban/updateItems', {
					items,
					itemType: 'done'
				});
			}
		}
	},
	methods: {
		submitForm() {
			if (this.cardName) {
				this.$store.commit('kanban/addCard', {
					text: this.cardName
				});

				this.cardName = '';
			}
		}
	}
};
</script>

<style scoped></style>
