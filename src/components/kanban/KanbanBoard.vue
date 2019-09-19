<template>
	<v-container grid-list-md>
		<h2>Kanban Board</h2>
		<div>
			<p>Create and modify kanban cards.</p>
		</div>
		<v-container>
			<v-layout row>
				<v-flex md2 class="mr-8">
					<v-text-field label="Card Title" required v-model="cardName"></v-text-field>
				</v-flex>
				<v-flex md4 class="mr-8">
					<v-text-field label="Description" required v-model="cardDescription"></v-text-field>
				</v-flex>
				<v-flex md4>
					<v-btn @click="addCard()" color="primary">Add</v-btn>
				</v-flex>
			</v-layout>
		</v-container>
		<v-layout>
			<!-- NEW Column -->
			<v-flex sm4>
				<v-card class="mx-auto">
					<v-app-bar dark color="secondary">
						<v-toolbar-title>New Items</v-toolbar-title>
						<div class="flex-grow-1"></div>
					</v-app-bar>
					<v-container class="pa-2" fluid>
						<draggable v-model="newItems" :options="{ group: 'default' }">
							<v-row v-for="item in newItems" :key="item.id">
								<v-col>
									<v-card class="my-n2">
										<v-card-title>{{ item.text }}</v-card-title>
										<v-card-text>{{ item.description }}</v-card-text>
									</v-card>
								</v-col>
							</v-row>
						</draggable>
					</v-container>
				</v-card>
			</v-flex>
			<!-- InProgress Column -->
			<v-flex sm4>
				<v-card class="mx-auto">
					<v-app-bar dark color="warning">
						<v-toolbar-title>In Progress</v-toolbar-title>
						<div class="flex-grow-1"></div>
					</v-app-bar>
					<v-container class="pa-2" fluid>
						<draggable v-model="inProgressItems" :options="{ group: 'default' }">
							<v-row v-for="item in inProgressItems" :key="item.id">
								<v-col>
									<v-card class="my-n2">
										<v-card-title>{{ item.text }}</v-card-title>
										<v-card-text>{{ item.description }}</v-card-text>
									</v-card>
								</v-col>
							</v-row>
						</draggable>
					</v-container>
				</v-card>
			</v-flex>
			<!-- Done Column -->
			<v-flex sm4>
				<v-card class="mx-auto">
					<v-app-bar dark color="success">
						<v-toolbar-title>Done</v-toolbar-title>
						<div class="flex-grow-1"></div>
					</v-app-bar>
					<v-container class="pa-2" fluid>
						<draggable v-model="doneItems" :options="{ group: 'default' }">
							<v-row v-for="item in doneItems" :key="item.id">
								<v-col>
									<v-card class="my-n2">
										<v-card-title>{{ item.text }}</v-card-title>
										<v-card-text>{{ item.description }}</v-card-text>
									</v-card>
								</v-col>
							</v-row>
						</draggable>
					</v-container>
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
		cardName: '',
		cardDescription: ''
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
		addCard() {
			if (this.cardName) {
				this.$store.commit('kanban/addCard', {
					text: this.cardName,
					description: this.cardDescription
				});

				this.cardName = '';
				this.cardDescription = '';
			}
		}
	}
};
</script>

<style scoped></style>
