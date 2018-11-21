import React, { Component } from 'react';
import ToolBar from './ToolBar'
import Background from './Background'
import Image from './Image'

import dog from '../../images/dog.jpg'
import './style.css'

class Editor extends Component {
    render() {
      // id, label, help를 제외한 값들은
      // 스프레드 연산자를 통해 ...props에 저장 
      var {bgstyle, imgstyle, ...props} = this.props
      return(
        <div>
          <ToolBar/>
          <div className="canvas-inner">
            <Background
              style={bgstyle}
            />
            <Image
              style={imgstyle}
            />
          </div>
          
        </div>
      )
      
    }
}

export default Editor