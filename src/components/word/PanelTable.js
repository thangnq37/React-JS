import React, { Component } from 'react';

class PanelTable extends Component {

  btnUpdateRow = (id)=>{
  	this.props.updateRowWork(id);
  }

  btnDeleteRow = (id)=>{
  	this.props.deleteRowWork(id);
  }

  updateStatusWork = (id)=>{
  	this.props.updateStatusWork(id);
  }

  render() {
  	var listData = this.props.listData;
  	var rowListData = listData.map((row,index)=>{
  		return (
  			<tr key={row.id}>
				<td>{index+1}</td>
				<td>{row.name}</td>
				<td className="text-center">
					{row.status===true?<span className="label label-success" onClick={()=>this.updateStatusWork(row.id)}>Kích Hoạt</span>:<span className="label label-danger" onClick={()=>this.updateStatusWork(row.id)}>Xác Nhận</span>}
				</td>
				<td className="text-center">
					<button type="button" onClick={()=>this.btnUpdateRow(row.id)} className="btn btn-warning btn-xs">Sữa</button>	
					<button type="button" onClick={()=>this.btnDeleteRow(row.id)}  className="btn btn-danger btn-xs">Xóa</button>	
				</td>
			</tr>

  		);
  	})
    return (
    	<div className="panel panel-warning">
			<div className="panel-heading">
				<h3 className="panel-title">Bảng công việc</h3>
			</div>
			<div className="panel-body">
				<table className="table table-bordered table-hover">
					<thead>
						<tr>
							<th>STT</th>
							<th>Tên</th>
							<th>Trạng Thái</th>
							<th>Tác Vụ</th>
						</tr>
					</thead>
					<tbody>
						{/* row find */}
						<tr>
							<td></td>
							<td>
								<input type="text" name="" className="form-control" />
							</td>
							<td className="text-center">
								<select name="" className="form-control" >
									<option value={true}>Kích Hoạt</option>
									<option value={false}>Xác Nhận</option>
								</select>
							</td>
							<td className="text-center">	
							</td>
						</tr>

						{rowListData}
					</tbody>
				</table>
			</div>
		</div>
    );
  }
}

export default PanelTable;