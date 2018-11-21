import React, { Component } from 'react';
// import dog from '../../images/dog.jpg'
// import './style.css'

class Image extends Component {
    render() {
      // id, label, help를 제외한 값들은
      // 스프레드 연산자를 통해 ...props에 저장 
      var {...props} = this.props
      return(
        <div className="canvas-image canvas-block">
          <div {...props}></div>
        </div>
      )
      
    }
}

export default Image