import React, { Component } from 'react';

class RowSearch extends Component {

  filterDataWork = ()=>{
  	var filter = this.refs.name_search.value;
  	var object = {
  		filterName: filter
  	};
  	this.props.filterDataWork(object);
  }
  sortData = (status) =>{
  	alert(status);
  }

  render() {

    return (
    	<div className="row">
    		<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    			<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
	    			<div className="input-group row">
				        <input type="text" className="form-control" ref="name_search" placeholder="Search" id="txtSearch"/>
				        <div className="input-group-btn">
				          <button className="btn btn-primary" onClick={this.filterDataWork} type="button">
				            <span className="glyphicon glyphicon-search"></span>
				          </button>
				        </div>
			      	</div>
		      	</div>
		      	<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
			      	<div className="dropdown">
						<button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Sắp Xếp
						<span className="caret"></span></button>
						<ul className="dropdown-menu">
						    <li><a onClick={() => this.sortData(0)}>A -> Z</a></li>
						    <li><a onClick={() => this.sortData(1)}>Z -> A</a></li>
						    <li className="divider"></li>
      						<li><a onClick={() =>  this.sortData(2)}>Kích hoạt</a></li>
						</ul>
					</div>
				</div>
    		</div>
			
      	</div>
    );
  }
}

export default RowSearch;