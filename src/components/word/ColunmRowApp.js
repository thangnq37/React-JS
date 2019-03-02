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
			tasks: [],
			objectTask: {}
		};
		this.changeColumnRow = this.changeColumnRow.bind(this);
		this.insertWork = this.insertWork.bind(this);
		this.updateStatusWork = this.updateStatusWork.bind(this);
		this.updateRowWork = this.updateRowWork.bind(this);
		this.changePanelAdd = this.changePanelAdd.bind(this);
		this.deleteRowWork = this.deleteRowWork.bind(this);
		this.btnUpdateWord = this.btnUpdateWord.bind(this);
		this.filterDataWork = this.filterDataWork.bind(this);
	}


	guidGenerator() {
	    var S4 = function() {
	       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
	    };
	    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
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

	getDataLocalStotage(){
		return JSON.parse(localStorage.getItem("tasks"));
	}

	

	componentDidMount(){
		this.hiddenRowData(this.state.weightRow);
		if(localStorage && localStorage.getItem("tasks")){
			this.setState({
				tasks: this.getDataLocalStotage()
			})	
		}else{
			this.setDataTable();
			this.setState({
				tasks: this.getDataLocalStotage()
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
			tasks: [...tasks],
			objectTask: {
				id:'',
				name: '',
				status: false
			}
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

		var tasks = this.state.tasks;
		var objectTask = tasks.find((item)=>{
			return item.id === id;
		})
		
		this.setState({
			apply: false,
			objectTask: objectTask
		})
	}

	changePanelAdd(){
		this.setState({
			apply: true,
			objectTask: {
				id:'',
				name: '',
				status: false
			}
		})
	}


	deleteRowWork(id){
		var tasks = this.state.tasks;
		tasks.forEach((item,index)=>{
			if(item.id === id){
				tasks.splice(index,1);
				return false;
			}
		})
		this.setState({
			tasks: [...tasks]
		});
		this.setLocalStorageTasks(tasks);
	}

	btnUpdateWord(work){
		var tasks = this.state.tasks;

		var newWork = {
			id: work.id.value,
			name: work.name.value,
			status: work.status.checked
		}
		tasks.forEach((item,index)=>{
			if(item.id === work.id.value){
				tasks[index] = newWork;
				return false;
			}
		})
		
		this.setState({
			tasks: [...tasks]
		});
		this.setLocalStorageTasks(tasks);
	}

	filterDataWork(filter){
		var listData = this.getDataLocalStotage();
		var dataFilter = null;
		if(filter.filterName !== ""){
			dataFilter = listData.filter(function(row, index){
				if(row.name.toLowerCase().indexOf(filter.filterName.toLowerCase()) >= 0){
					return true;
				}else{
					return false;
				}
			})
		}else{
			dataFilter = listData;
		}
		if( filter.filterStatus !== "0"){
			var check = filter.filterStatus === "-1"? true: false;
			dataFilter = dataFilter.filter(function(row, index){
				if(row.status === check){
					return true;
				}else{
					return false;
				}
			})
		}
		this.setState({
			tasks: [...dataFilter]
		})

	}


	render() {
		var checkShow = this.state.weightRow === "8";
		var elementShow = checkShow
						? <PanelAdd 
						changePanelAdd={this.changePanelAdd} 
						btnUpdateWord={this.btnUpdateWord} 
						objectTask={this.state.objectTask}  
						apply={this.state.apply} 
						insertWork={this.insertWork} />
						:"";

		return (
			<div className="row">
				<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" id="row-hidden-add">
					{elementShow}
				</div>
				<div className={"col-xs-"+this.state.weightRow+ " col-sm-"+this.state.weightRow}>
					<RowAdd number={this.state.weightRow} apply={this.state.apply} changePanelAdd={this.changePanelAdd} changeColumnRow={this.changeColumnRow} />
					<br />
					<RowSearch />
					<br />
					<PanelTable filterDataWork={this.filterDataWork} deleteRowWork={this.deleteRowWork} updateRowWork={this.updateRowWork} updateStatusWork={this.updateStatusWork} listData={this.state.tasks} />
				</div>
			</div>
		);
	}
}

export default ColunmRowApp;
