import React, { Component } from 'react';
import { Button } from 'reactstrap'
import ImageCanvas from '../../components/ImageCanvas';
// import './style.css'

class EditorPage extends Component {
  	render() {
    	return (
      		<div className="EditorPage">
      			<p className="title">EditorPage</p>
      			<ImageCanvas
      				text="ddd"
      			/>
      			<Button>버튼</Button>
      		</div>
    	)
  	}
}
export default EditorPage;