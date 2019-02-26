import React, { Component } from 'react';

class RowSearch extends Component {

  render() {

    return (
    	<div className="">
			<div className="input-group  col-sm-3">
		        <input type="text" className="form-control" placeholder="Search" id="txtSearch"/>
		        <div className="input-group-btn">
		          <button className="btn btn-primary" type="button">
		            <span className="glyphicon glyphicon-search"></span>
		          </button>
		        </div>
	      	</div>
      	</div>
    );
  }
}

export default RowSearch;