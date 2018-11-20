import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

// import './style.css'

class EditorPage extends Component {
  	render() {
    	return (
      		<div className="EditorPage">
      			<p className="title">EditorPage</p>
      			<Button bsStyle="info">버튼</Button>
      		</div>
    	)
  	}
}
export default EditorPage;