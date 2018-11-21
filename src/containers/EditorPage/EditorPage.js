import React, { Component } from 'react';
import { Button } from 'reactstrap'
import Editor from '../../components/Editor';

import dog from '../../images/dog.jpg'
// import './style.css'

class EditorPage extends Component {

  	render() {
      const bgstyle = {
        width: 440,
        height: 440,
        top: 0,
        left: 0,
        backgroundColor: 'rgb(0, 203, 255)'
      }
      const imgstyle = {
        width:440,
        height:440,
        top: 0,
        left: 0,
        backgroundImage:'url("'+dog+'")',
        backgroundSize:'cover',
        backgroundPosition:'center'
      }
    	return (
      		<div className="EditorPage">
      			<p className="title">EditorPage</p>
      			<Editor
      				bgstyle={bgstyle}
              imgstyle={imgstyle}
      			/>
      			<Button color="secondary" size="lg">+</Button>
      		</div>
    	)
  	}
}
export default EditorPage;