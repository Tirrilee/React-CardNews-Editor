import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import ImageCanvas from '../../components/ImageCanvas';
// import './style.css'

class EditorPage extends Component {
  	render() {
    	return (
      		<div className="EditorPage">
      			<p className="title">EditorPage</p>
      			<ImageCanvas/>
      			<Button bsStyle="info">버튼</Button>
      		</div>
    	)
  	}
}
export default EditorPage;