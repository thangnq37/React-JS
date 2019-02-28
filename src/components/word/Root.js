import React, { Component } from 'react';
import WrapContext from './WrapContext';


class Root extends Component {

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="alert alert-success text-center">
            <strong>Quản lý công việc</strong>
          </div>
        </div>
        
        {/* A JSX comment */}
        <WrapContext />


      </div>
    );
  }
}

export default Root;
