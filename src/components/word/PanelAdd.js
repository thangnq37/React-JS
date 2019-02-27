import React, { Component } from 'react';

class PanelAdd extends Component {


	btnAddWord = () =>{
		this.props.insertWork(this.refs);
	}

  render() {

    return (
    	<div className="panel panel-info">
			<div className="panel-heading">
				<h3 className="panel-title">Thêm Công Việc</h3>
			</div>
			<div className="panel-body">
				
				<div className="form-group">
					<label>Tên: </label>
					<input type="text" ref="name" className="form-control"  placeholder="Input field" />
				</div>
				<div className="form-group">
					<label>Trạng thái: <input type="checkbox" ref="status" /></label>
				</div>
				<button type="button" onClick={this.btnAddWord} className="btn btn-primary">Thêm</button>
			</div>
		</div>
    );
  }
}

export default PanelAdd;