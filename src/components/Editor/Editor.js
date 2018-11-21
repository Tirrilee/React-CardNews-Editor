import React, { Component } from 'react';
import ToolBar from './ToolBar'
import Background from './Background'
import InfoBar from './InfoBar'
import Image from './Image'

import './style.css'

class Editor extends Component {
    render() {
      // id, label, help를 제외한 값들은
      // 스프레드 연산자를 통해 ...props에 저장 
      const {id, bgstyle, imgstyle, ...props} = this.props
      return(
        <div className="canvas-wrap" style={this.props.wrapstyle}>
          <ToolBar/>
          <div className="canvas-inner" style={{height:bgstyle.width}}>
            <Background
              style={bgstyle}
            />
            <Image
              style={imgstyle}
            />
          </div>
          <InfoBar
            id={id}
            circle={{first:"#333", second:"#123435", third:"#554321"}}
            layout="SS"
            size={bgstyle.width}
          />
        </div>
      )
      
    }
}

export default Editor