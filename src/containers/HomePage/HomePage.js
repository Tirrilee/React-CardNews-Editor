import React, { Component } from 'react';
import { Button } from 'reactstrap'

// import './style.css'

class HomePage extends Component {

  	render() {
    	return (
      		<div className="HomePage">
      			<p className="title">Home</p>
      			{/* VideoItem 컴포넌트에 props로 ref 객체를 넘긴다. */}
			  	<Button bsStyle="info" onClick={() => this.getPermissions()}>
					Get Start
				</Button>
      		</div>
    	);
  	}
}
export default HomePage