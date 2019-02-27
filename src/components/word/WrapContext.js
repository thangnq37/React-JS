import React, { Component } from 'react';

import ColunmRowApp from './ColunmRowApp';

class WrapContext extends Component {

	constructor(props){
		super(props);
		
	}

	render() {

		return (
			<div className="row">
				<br />
				<ColunmRowApp />
			</div>
		);
	}
}

export default WrapContext;
