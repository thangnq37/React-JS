import React, { Component } from 'react';

class PanelAdd extends Component {


	constructor(props){
		super(props);
		this.state = {
			objectTask: {
				id:'',
				name: '',
				status: false
			}
		}
		this.onChangeData = this.onChangeData.bind(this);
	}

	componentWillMount(){
		var objectTask = this.props.objectTask;
		this.setState({
			objectTask: objectTask
		})
	}

	componentWillReceiveProps(nextProps){
		var objectTask = nextProps.objectTask;
		this.setState({
			objectTask: objectTask
		})
	}

	btnAddWord = () =>{
		this.props.insertWork(this.refs);
	}

	btnUpdateWord = () =>{
		this.props.btnUpdateWord(this.refs);
	}

	changePanelAdd = () =>{
		this.props.changePanelAdd();
	}

	onChangeData(){
		var work = this.refs;
		var newWork = {
			id: work.id.value,
			name: work.name.value,
			status: work.status.checked
		}
		this.setState({
			objectTask: newWork
		})
	}



	render() {
		var apply = this.props.apply;
		var button = apply === true?'':<button type="button" onClick={this.changePanelAdd}  className="btn btn-danger">Hủy</button>;
		return (
			<div className={apply === true?"panel panel-info":"panel panel-danger"}>
				<div className="panel-heading">
					<h3 className="panel-title">{apply === true?"Thêm Công Việc":"Sữa Công Việc"}</h3>
				</div>
				<div className="panel-body">
					<div className="form-group">
						<label>Tên: </label>
						<input type="text" ref="name"  className="form-control"  value={this.state.objectTask.name} onChange={this.onChangeData} placeholder="Input field" />
						<input type="hidden" ref="id" value={this.state.objectTask.id} />
					</div>
					<div className="form-group">
						<label>Trạng thái: <input type="checkbox" ref="status" checked={this.state.objectTask.status} onChange={this.onChangeData} /></label>
					</div>
					<button type="button" onClick={apply === true?this.btnAddWord:this.btnUpdateWord} className={apply === true?"btn btn-info":"btn btn-warning"}>{apply === true?"Thêm":"Sữa"}</button>
					{button}
				</div>
			</div>
		);
	}
}

export default PanelAdd;