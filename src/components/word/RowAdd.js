import React, { Component } from 'react';

class RowAdd extends Component {

	changeColumnRow = (number) => {
		if(number+'' === '8'){
			if(this.props.apply === true){
				this.props.changeColumnRow('12');
			}else{
				this.props.changePanelAdd();
			}
		}else{
			this.props.changeColumnRow('8');
		}
	}

  render() {

    return (
		<div>
			<button type="button" className="btn btn-primary" onClick={() => this.changeColumnRow(this.props.number)}>+ Thêm Công Việc</button> 
		</div>
    );
  }
}

export default RowAdd;
