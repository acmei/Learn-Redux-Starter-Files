function postComments(state = [], action) {
	switch(action.type) {
		case 'ADD_COMMENT':
			// return new state with new comment
			return [...state,{
				user: action.author,
				text: action.comment
			}];
		case 'REMOVE_COMMENT':
			// return without deleted comment
			return [
				...state.slice(0, action.index), // from start to deleted comment
				...state.slice(action.index + 1) // after deleted comment to end
			]
		default:
			return state;
	}
}

function comments(state = [], action) {
	if (typeof action.postId !== 'undefined') {
		return {
			// take current state
			...state,
			// overwrite this post with new one
			[action.postId]: postComments(state[action.postId], action)
		}
	}

	return state;
}

export default comments;