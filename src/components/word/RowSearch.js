import React, { Component } from 'react';

class RowSearch extends Component {

  render() {

    return (
    	<div className="row">
    		<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    			<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
	    			<div className="input-group row">
				        <input type="text" className="form-control" placeholder="Search" id="txtSearch"/>
				        <div className="input-group-btn">
				          <button className="btn btn-primary" type="button">
				            <span className="glyphicon glyphicon-search"></span>
				          </button>
				        </div>
			      	</div>
		      	</div>
		      	<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
			      	<div className="dropdown">
						<button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
						<span className="caret"></span></button>
						<ul className="dropdown-menu">
						    <li>HTML</li>
						    <li>CSS</li>
						    <li>JavaScript</li>
						</ul>
					</div>
				</div>
    		</div>
			
      	</div>
    );
  }
}

export default RowSearch;