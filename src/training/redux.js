import {createStore} from 'redux';

var initialState = {
	status: false
}

var myReducer = (state = initialState, action) => {
	if(action.type === "APPLY_STATE"){
		state.status = !state.status;
	}
	return state;
}

const store = createStore(myReducer);
console.log("Test1",store.getState());

var action = {type: "APPLY_STATE"};

store.dispatch(action);

console.log("Test2",store.getState());