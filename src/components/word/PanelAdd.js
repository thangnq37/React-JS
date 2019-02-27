import React, { Component } from 'react';

class PanelAdd extends Component {


	btnAddWord = () =>{
		this.props.insertWork(this.refs);
	}

	btnUpdateWord = () =>{
		
	}

	changePanelAdd = () =>{
		this.props.changePanelAdd();
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
						<input type="text" ref="name"  className="form-control"  placeholder="Input field" />
					</div>
					<div className="form-group">
						<label>Trạng thái: <input type="checkbox" ref="status" /></label>
					</div>
					<button type="button" onClick={apply === true?this.btnAddWord:this.btnUpdateWord} className={apply === true?"btn btn-info":"btn btn-warning"}>{apply === true?"Thêm":"Sữa"}</button>
					{button}
				</div>
			</div>
		);
	}
}

export default PanelAdd;