import React, { Component } from 'react';
import dog from '../../images/dog.jpg'
// import './style.css'

class ImageCanvas extends Component {
    componentDidMount() {
      const canvas = this.refs.canvas
      
      const ctx = canvas.getContext("2d")
      const img = this.refs.image
      console.log(canvas.width)
      console.log(img)

      img.onload = () => {
        ctx.drawImage(img, 0, 0, 600, 600)
        ctx.font = "40px Courier"
        ctx.fillText(this.props.text, 210, 75)
      }
    }

    render() {
      // id, label, help를 제외한 값들은
      // 스프레드 연산자를 통해 ...props에 저장 
      var {img, ...props} = this.props
      return(
        <div>
          <canvas ref="canvas" width={600} height={600} />
          <img ref="image" src={dog} className="hidden" />
        </div>
      )
      
    }
}

export default ImageCanvas