import React, { Component } from 'react';
import { Tooltip } from 'reactstrap';

import edit from '../../images/edit.png'
import layers from '../../images/layers.png'
// import './style.css'

class ToolBar extends Component {
    constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        tooltipOpen: false
      };
    }

    toggle() {
      this.setState({
        tooltipOpen: !this.state.tooltipOpen
      });
    }
    render() {
      // id, label, help를 제외한 값들은
      // 스프레드 연산자를 통해 ...props에 저장 
      // var {...props} = this.props
      return(
        <div className="canvas-toolbar">
          	<div id="LayerBtn" className="tool-btn leftbtn">
	          	<img src={layers} alt="layer"/>
              <Tooltip placement="bottom" isOpen={this.state.tooltipOpen} target="LayerBtn" toggle={this.toggle}>
                Select layers
              </Tooltip>
          	</div>
          	<div className="tool-btn rightbtn">
	          	<img src={edit} alt="edit"/>
          	</div>
        </div>
      )
      
    }
}

export default ToolBar