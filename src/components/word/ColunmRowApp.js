import React, { Component } from 'react';
import RowAdd from './RowAdd';
import RowSearch from './RowSearch';
import PanelAdd from './PanelAdd';
import PanelTable from './PanelTable';

class ColunmRowApp extends Component {

	constructor(props){
		super(props);
		this.state = {
			weightRow: '12',
			tasks: []
		}
		this.changeColumnRow = this.changeColumnRow.bind(this);
		this.insertWork = this.insertWork.bind(this);
	}

	setDataTable(){
		var tasks = [
			{
				id: this.guidGenerator(),
				name: "Laravel",
				status: true
			},
			{
				id: this.guidGenerator(),
				name: "English",
				status: false
			},
			{
				id: this.guidGenerator(),
				name: "PHP",
				status: true
			}
		];

		localStorage.setItem("tasks", JSON.stringify(tasks));
	}

	guidGenerator() {
	    var S4 = function() {
	       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
	    };
	    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
	}

	componentDidMount(){
		this.hiddenRowData(this.state.weightRow);
		if(localStorage && localStorage.getItem("tasks")){
			this.setState({
				tasks: JSON.parse(localStorage.getItem("tasks"))
			})	
		}else{
			this.setDataTable();
			this.setState({
				tasks: JSON.parse(localStorage.getItem("tasks"))
			})
		}
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

	insertWork(work){
		var newWork = {
			id: this.guidGenerator(),
			name: work.name.value,
			status: work.status.checked
		}
		this.setState({
			tasks: [...this.state.tasks ,newWork]
		})
		localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
	}

	render() {
		return (
			<div className="row">
				<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" id="row-hidden-add">
					<PanelAdd insertWork={this.insertWork} />
				</div>
				<div className={"col-xs-"+this.state.weightRow+ " col-sm-"+this.state.weightRow}>
					<RowAdd number={this.state.weightRow} changeColumnRow={this.changeColumnRow} />
					<br />
					<RowSearch />
					<br />
					<PanelTable listData={this.state.tasks} />
				</div>
			</div>
		);
	}
}

export default ColunmRowApp;
