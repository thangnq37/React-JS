import React, { Component } from 'react';

class PanelAdd extends Component {

  render() {

    return (
    	<div className="panel panel-info">
			<div className="panel-heading">
				<h3 className="panel-title">Thêm Công Việc</h3>
			</div>
			<div className="panel-body">
				
				<div className="form-group">
					<label>Tên: </label>
					<input type="text" className="form-control"  placeholder="Input field" />
				</div>
				<div className="form-group">
					<label>Trạng thái: <input type="checkbox"  /></label>
				</div>
				<button type="submit" className="btn btn-primary">Thêm</button>
			</div>
		</div>
    );
  }
}

export default PanelAdd;