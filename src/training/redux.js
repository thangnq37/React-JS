import {createStore} from 'redux';

var initialState = {
	status: false,
	sort: {
		name: "test",
		status: true
	}
}

var myReducer = (state = initialState, action) => {
	if(action.type === "APPLY_STATE"){
		state.status = !state.status;
	}

	if(action.type === "ACTION_STATE"){
		
		state.sort = {
			name: action.sort.name,
			status: action.sort.status
		}
	}
	return state;
}

const store = createStore(myReducer);
console.log("Test1",store.getState());

var action = {type: "APPLY_STATE"};



store.dispatch(action);

console.log("Test2",store.getState());

var action2 = {
	type: "ACTION_STATE",
	sort: {
		name: "khoai",
		status: false
	}
}

store.dispatch(action2);

console.log("Test3",store.getState());