import React, { Component } from 'react';
import RowAdd from './RowAdd';
import RowSearch from './RowSearch';

class ColunmRowApp extends Component {

	constructor(props){
		super(props);
		this.state = {
			weightRow: '12'
		}
		this.changeColumnRow = this.changeColumnRow.bind(this);
	}

	componentDidMount(){
		this.hiddenRowData(this.state.weightRow);
	}

	hiddenRowData(number){
		if(number+'' === '12'){
			document.getElementById("row-hidden-add").style.display = "none";
		}else{
			document.getElementById("row-hidden-add").style.display = "block";
		}
	}

	changeColumnRow(number){
		this.setState({
			weightRow: number+''
		});
		this.hiddenRowData(number+'');
	}

	render() {

		return (
			<div className="row">
				<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" id="row-hidden-add">
					<div className="panel panel-info">
						<div className="panel-heading">
							<h3 className="panel-title">Thêm Công Việc</h3>
						</div>
						<div className="panel-body">
							Panel content
						</div>
					</div>
				</div>
				<div className={"col-xs-"+this.state.weightRow+ " col-sm-"+this.state.weightRow}>
					<RowAdd number={this.state.weightRow} changeColumnRow={this.changeColumnRow} />
					<br />
					<RowSearch />
					<br />
					<div className="panel panel-warning">
						<div className="panel-heading">
							<h3 className="panel-title">Bảng công việc</h3>
						</div>
						<div className="panel-body">
							Panel content
						</div>
					</div>
				</div>
				
			</div>
		);
	}
}

export default ColunmRowApp;
