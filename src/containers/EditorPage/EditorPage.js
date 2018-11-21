import React, { Component } from 'react';
import { Button } from 'reactstrap'
import Editor from '../../components/Editor';

import dog from '../../images/dog.jpg'
import btn_create from '../../images/btn-create.png'
import './style.css'

class EditorPage extends Component {
    // state 설정
    constructor(){
      super()
      
      this.state = {
        editorwidth:440,
        editorListWidth: null,
      }
      this.updateDimensions = this.updateDimensions.bind(this)
    }

    updateDimensions() {
      if (window.innerWidth < 480) {
        this.setState({
          editorListWidth: "100%",
          editorwidth:window.innerWidth - 40
        })
      }
      else if (window.innerWidth < 992){
        this.setState({
          editorListWidth: "100%",
          editorwidth:440
        })
      }
      else{
        this.setState({
          editorListWidth:"70%",
          editorwidth:440
        })
      }
    }
    componentWillMount() {
        this.updateDimensions()
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions)
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions)
    }

  	render() {
      const editorwidth = this.state.editorwidth
      const bgstyle = {
        width: editorwidth,
        height: editorwidth,
        top: 0,
        left: 0,
        backgroundColor: 'rgb(0, 203, 255)'
      }
      const imgstyle = {
        width: editorwidth,
        height:editorwidth,
        top: 0,
        left: 0,
        backgroundImage:'url("'+dog+'")',
        backgroundSize:'cover',
        backgroundPosition:'center'
      }
      const wrapstyle = {
        width:editorwidth,
        height:editorwidth + 48
      }
      console.log(this.state.editorListWidth)
    	return (
      		<div className="EditorPage">
      			<p className="title">EditorPage</p>
            <div id="edit-inner">
              <div className="editor-list" style={{width:this.state.editorListWidth}}>
          			<Editor
                  id='1'
                  wrapstyle={wrapstyle}
          				bgstyle={bgstyle}
                  imgstyle={imgstyle}
          			/>
                <div style={{marginTop:60}}>
                  <Button color="secondary" size="lg">
                    <img src={btn_create} width="40"/>
                  </Button>
                </div>
              </div>
            </div>
      		</div>
    	)
  	}
}
export default EditorPage;