import React, { Component } from 'react';
import { FormGroup, FormControl, HelpBlock } from 'react-bootstrap'
import dog from '../../images/dog.jpg'
// import './style.css'

class ImageCanvas extends Component {
    componentDidMount() {
      const canvas = this.refs.canvas
      const ctx = canvas.getContext("2d")
      const img = this.refs.image
    }
    render() {
      // id, label, help를 제외한 값들은
      // 스프레드 연산자를 통해 ...props에 저장 
      var {img, ...props} = this.props
      return(
        <div>
          <canvas ref="canvas" width={640} height={425} />
          <img ref="image" src={dog} className="hidden" />
        </div>
      )
      
    }
}

export default ImageCanvas