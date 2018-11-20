import React, { Component } from 'react';
import { FormGroup, FormControl, HelpBlock } from 'react-bootstrap'
import './style.css'

class ImageCanvas extends Component {
  
    render() {
      // id, label, help를 제외한 값들은
      // 스프레드 연산자를 통해 ...props에 저장 
      var {img, ...props} = this.props
      return(
        <div>
          
        </div>
      )
      
    }
}

export default ImageCanvas