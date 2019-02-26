import React, { Component } from 'react';

class ModalForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: "Nguyễn Quốc Thắng",
      textarea: "Mình là Thắng đang bước vào mở đầu của sự cố gắng.",
      radio: "true",
      select: 0,
      checkbox: true
    }
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onSubmitValue = this.onSubmitValue.bind(this);
  }

  onChangeValue(e){
    var target = e.target;
    var name = target.name;
    var type = target.type;
    var value = type === "checkbox"?target.checked: target.value;
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
                    <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChangeValue} placeholder="Input field"/>
                  </div>
                  <div className="form-group">
                    <label >Textarea</label>
                    <textarea type="text" className="form-control" value={this.state.textarea} name="textarea" onChange={this.onChangeValue} placeholder="Input field"></textarea>
                  </div>
                  <label>Select</label>
                  <select name="select" className="form-control" onChange={this.onChangeValue} value={this.state.select}>
                    <option value={0}>Value 1</option>
                    <option value={1}>Value 2</option>
                    <option value={2}>Value 3</option>
                  </select>
                  <br/>
                  <div className="form-group">
                    <label >Radio buton</label>
                    <br/>
                    <label>
                      <input type="radio" name="radio" value="true" onChange={this.onChangeValue}  checked={this.state.radio === "true"}/>Nam
                    </label>
                    <label>
                      <input type="radio" name="radio" value="false" onChange={this.onChangeValue}  checked={this.state.radio === "false"}/>Nữ
                    </label>
                  </div>

                  <div className="checkbox">
                    <label>
                      <input type="checkbox" name="checkbox" checked={this.state.checkbox} onChange={this.onChangeValue} />
                      Checkbox
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
