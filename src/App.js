import React, { Component } from 'react';
import './App.css';


import Header from './components/Header';
import Content from './components/Content';
import ModalAddProduct from './components/ModalAddProduct';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {index: 4 ,arrayProduct:[
        {
         id: 1,
         name: 'Samsung Galaxy S8',
         price:  '7.960.000',
         url: 'https://cdn.tgdd.vn/Products/Images/42/78479/samsung-galaxy-s8-4-400x460-400x460.png'
        },{
         id: 2,
         name: 'Samsung Galaxy S6++',
         price:  '7.960.000',
         url:'https://cdn.tgdd.vn/Products/Images/42/195314/samsung-galaxy-m20-400x460.png'
        },{
         id: 3,
         name: 'Samsung Galaxy J6',
         price:  '4.960.000',
         url: 'https://cdn.tgdd.vn/Products/Images/42/111107/samsung-galaxy-a7-2018-blue-400x460.png'
        },{
         id: 4,
         name: 'Samsung Galaxy Note 9',
         price:  '22.960.000',
         url: 'https://cdn.tgdd.vn/Products/Images/42/154897/samsung-galaxy-note-9-black-400x460-400x460.png'
        }
      ]
    }
  }

  AddProducts =(name, price, url) => {
    alert("test");
    this.setState({index:this.state.index++,
      arrayProduct: [...this.state.arrayProduct,{id:this.state.index, name: name, price: price, url: url}]
    });
  }


  render() {

    let listProducts = this.state.arrayProduct.map(function(pro, index){
      let result = '';
      result = <Content key={index} product={pro} />;
      return result;
    });

    return (
      <div className="container">
        <Header  />
        <ModalAddProduct clickAddProduct = {this.AddProducts} />
        <div className="row">
          {listProducts}  
        </div>
      </div>
    );
  }
}

export default App;
