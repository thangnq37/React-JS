import React, { Component } from 'react';

class ModalForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: "Nguyễn Quốc Thắng",
      textarea: "Mình là Thắng đang bước vào mở đầu của sự cố gắng.",
      radio: true
    }
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onSubmitValue = this.onSubmitValue.bind(this);
  }

  onChangeValue(e){
    var target = e.target;
    var name = target.name;
    var type = target.type;
    var value = type==="radio"?target.checked:target.value;
    alert(type);
    this.setState({
      [name]: value
    }) 
  }

  onSubmitValue(e){
    console.log(this.state);
    e.preventDefault();
  }


  render() {
    return (
      <div className="modal fade" id="modal-id-form">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 className="modal-title">Form In React</h4>
            </div>
            <div className="modal-body">
                <form onSubmit={this.onSubmitValue}>
                  <legend>Form Test</legend>
                
                  <div className="form-group">
                    <label >Input Text</label>
                    <input type="text" className="form-control" name="name" onChange={this.onChangeValue} placeholder="Input field"/>
                  </div>
                  <div className="form-group">
                    <label >Textarea</label>
                    <textarea type="text" className="form-control" name="textarea" onChange={this.onChangeValue} placeholder="Input field"></textarea>
                  </div>
                  <div className="form-group">
                    <label >Radio buton</label>
                    <label>
                      <input type="radio" name="radio" value={true} onChange={this.onChangeValue}  checked={this.state.radio}/>Nam
                    </label>
                    <label>
                      <input type="radio" name="radio" value={false} onChange={this.onChangeValue}  checked={this.state.radio}/>Nữ
                    </label>
                  </div>
                
        
                  <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
          </div>
        </div>
      </div>
    )}
}

export default ModalForm;
