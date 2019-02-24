import React, { Component } from 'react';

class Content extends Component {

  constructor(props){
    super(props);
    this.BuyClick = this.BuyClick.bind(this);
  }

  BuyClick(){
    alert(this.props.product.name+"");
  }


  render() {
    return (
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="text-center">
              <img src={this.props.product.url} className="img-responsive" alt="Image" />
            </div>
            <h4>{this.props.product.name}</h4>
            <p>Giá: {this.props.product.price} VNĐ</p>
            <p className="text-center">
              <a className="btn btn-info" onClick={this.BuyClick}>Buy</a>&nbsp;<a className="btn btn-default">Cancel</a>
            </p>
          </div>
        </div>
      </div>
    )}
}

export default Content;
