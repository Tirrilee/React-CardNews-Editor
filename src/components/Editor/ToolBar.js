import React, { Component } from 'react';
import { Tooltip } from 'reactstrap'
// import dog from '../../images/dog.jpg'
// import './style.css'

class ToolBar extends Component {
    render() {
      // id, label, help를 제외한 값들은
      // 스프레드 연산자를 통해 ...props에 저장 
      var {...props} = this.props
      return(
        <div className="canvas-toolbar">
          <div {...props}>
          	<a className="tool-btn leftbtn">
	          	<img src="https://tyle.io/re/layers.png" alt=""/>
          	</a>
          	<a className="tool-btn rightbtn">
	          	<img src="https://tyle.io/re/edit.png" alt=""/>
          	</a>
          </div>
        </div>
      )
      
    }
}

export default ToolBar