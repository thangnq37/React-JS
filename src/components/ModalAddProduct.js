import React, { Component } from 'react';
import ModalAdd from './ModalAdd';
import ModalForm from './ModalForm';

class ModalAddProduct extends Component {

  constructor(props){
    super(props);
  }

  clickAddProduct =(name, price, url)=>{
    this.props.clickAddProduct(name, price, url);
  }


  render() {
    return (
      <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">Add Product</h3>
          </div>
          <div className="panel-body">
            <a className="btn btn-primary" data-toggle="modal" href='#modal-id'>Insert Product</a>
            <a className="btn btn-success" data-toggle="modal" href='#modal-id-form'>Form ReactJS</a>

            <ModalAdd clickAddProduct={this.clickAddProduct} />
            <ModalForm />
        </div>
      </div>
    )}
}

export default ModalAddProduct;
