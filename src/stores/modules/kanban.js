export default {
	namespaced: true,
	state: {
		items: {
			new: [],
			inProgress: [],
			done: []
		},
		nextId: 1
	},
	mutations: {
		addCard(state, newCard) {
			state.items.new.push(Object.assign(newCard, { id: state.nextId }));
			state.nextId += 1;
		},
		updateItems(state, { items, itemType }) {
			if (itemType === 'new') {
				state.items.new = items;
			}
			if (itemType === 'inProgress') {
				state.items.inProgress = items;
			}
			if (itemType === 'done') {
				state.items.done = items;
			}
		}
	}
};
