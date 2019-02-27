import React, { Component } from 'react';
import RowAdd from './RowAdd';
import RowSearch from './RowSearch';
import PanelAdd from './PanelAdd';
import PanelTable from './PanelTable';

class ColunmRowApp extends Component {

	constructor(props){
		super(props);
		this.state = {
			apply:true,//true add false update
			weightRow: '12',
			tasks: []
		}
		this.changeColumnRow = this.changeColumnRow.bind(this);
		this.insertWork = this.insertWork.bind(this);
		this.updateStatusWork = this.updateStatusWork.bind(this);
		this.updateRowWork = this.updateRowWork.bind(this);
		this.changePanelAdd = this.changePanelAdd.bind(this);
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

		this.setLocalStorageTasks(tasks);
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
			weightRow: number+'',
			apply: true
		});
		this.hiddenRowData(number+'');
	}

	insertWork(work){
		var tasks = this.state.tasks;
		var newWork = {
			id: this.guidGenerator(),
			name: work.name.value,
			status: work.status.checked
		}
		tasks.push(newWork); 
		this.setState({
			tasks: [...tasks]
		});
		this.setLocalStorageTasks(tasks);
	}

	setLocalStorageTasks(tasks){
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}

	updateStatusWork(id){
		var tasks = this.state.tasks;
		tasks.forEach((item,index)=>{
			if(item.id === id){
				item.status = !item.status;
				return false;
			}
		})
		this.setState({
			tasks: [...tasks]
		});
		this.setLocalStorageTasks(tasks);
	}

	updateRowWork(id){
		this.changeColumnRow('8');
		this.setState({
			apply: false
		})
	}

	changePanelAdd(){
		alert("1234");
		this.setState({
			apply: false
		})
	}


	render() {
		return (
			<div className="row">
				<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" id="row-hidden-add">
					<PanelAdd changePanelAdd={this.changePanelAdd}  apply={this.state.apply} insertWork={this.insertWork} />
				</div>
				<div className={"col-xs-"+this.state.weightRow+ " col-sm-"+this.state.weightRow}>
					<RowAdd number={this.state.weightRow} changeColumnRow={this.changeColumnRow} />
					<br />
					<RowSearch />
					<br />
					<PanelTable updateRowWork={this.updateRowWork} updateStatusWork={this.updateStatusWork} listData={this.state.tasks} />
				</div>
			</div>
		);
	}
}

export default ColunmRowApp;
