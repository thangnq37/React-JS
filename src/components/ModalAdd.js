import React, { Component } from 'react';

class ModalAdd extends Component {

  constructor(props){
    super(props);
  }

  clickAddProduct =()=>{
    this.props.clickAddProduct(this.refs.name.value, this.refs.price.value, this.refs.url.value);
  }


  render() {
    return (
      <div className="modal fade" id="modal-id">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 className="modal-title">Modal title</h4>
            </div>
            <div className="modal-body">
                <div className="form-group">
                  <label>Name Product</label>
                  <input type="text" className="form-control" ref="name" placeholder="Name product..."/>
                </div>
                <div className="form-group">
                  <label>Price Product</label>
                  <input type="text" className="form-control" ref="price" placeholder="Price product ..."/>
                </div>
                <div className="form-group">
                  <label>Url Image Product</label>
                  <input type="text" className="form-control" ref="url" placeholder="Url image product ..."/>
                </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.clickAddProduct}>Insert Product</button>
            </div>
          </div>
        </div>
      </div>
    )}
}

export default ModalAdd;
