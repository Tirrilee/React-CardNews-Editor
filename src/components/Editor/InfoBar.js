import React, { Component } from 'react';
import { Tooltip } from 'reactstrap';

import edit from '../../images/edit.png'
import layers from '../../images/layers.png'
// import './style.css'

class InfoBar extends Component {
    constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        ColorSet: false,
        LayoutType: false,
        Size:false,
      };
    }

    toggle(e) {
    	if (e.target.id === "ColorSet"){
    		this.setState({
		        ColorSet: !this.state.ColorSet,
				LayoutType: false,
        		Size:false
		    })
    	}
    	else if (e.target.id === "LayoutType"){
    		this.setState({
    			ColorSet:false,
		        LayoutType: !this.state.LayoutType,
		        Size:false
		    })
    	}
    	else{
    		this.setState({
    			ColorSet:false,
		        LayoutType: false,
		        Size:!this.state.Size
		    })
    	}   
    }
    render() {
      // id, label, help를 제외한 값들은
      // 스프레드 연산자를 통해 ...props에 저장 
      var {id, circle, layout, size, ...props} = this.props
      return(
        <div className="canvas-infobar">
          	<span id="InfoID">#{id}</span>
          	
          	<div className="info">
	          	<a id="ColorSet">
	          		<span className="circle" style={{backgroundColor:circle.first}}></span>
	          		<span className="circle" style={{backgroundColor:circle.second}}></span>
	          		<span className="circle" style={{backgroundColor:circle.third}}></span>
	          	</a>
	          	<Tooltip placement="top" isOpen={this.state.ColorSet} target="ColorSet" toggle={this.toggle}>
	            	Change color set
	          	</Tooltip>
	          	&nbsp;|&nbsp;
	          	<a id="LayoutType">
	          		Layout {layout}
	          	</a>
	          	<Tooltip placement="top" isOpen={this.state.LayoutType} target="LayoutType" toggle={this.toggle}>
	            	Change layout type
	          	</Tooltip>
	          	&nbsp;|&nbsp;
	          	<a id="Size">
	          		{size} x {size}
	          	</a>
	          	<Tooltip placement="top" isOpen={this.state.Size} target="Size" toggle={this.toggle}>
	            	Change a size
	          	</Tooltip>
          	</div>
        </div>
      )
      
    }
}

export default InfoBar