import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from "react";

import MenuTop from './components/MenuTop';
import Depth360Viewer from './components/Depth3DViewer';


class Main extends Component {
  constructor() {
    super();
    this.state = {
      puzzleSelected: 0,     
      image: "./images/test01.jpg",     
      depthImage: "./images/test01_depth.jpg",     
    };
  }
  onSelectImageHandler = (val) => {
    if (val.target.id) {
      this.setState({ puzzleSelected: val.target.id , 
                      image:  this.props.content.images[val.target.id].image,
                      depthImage:  this.props.content.images[val.target.id].depthImage,
                    });
    
    }
  }


  render() {
    return (
      <div>
        <MenuTop name="Depth3DViewer"
          content={this.props.content.images}
          onSelectImage={this.onSelectImageHandler}
        />
        <div style={{  position: "fixed" }}>
          <Depth360Viewer image={this.state.image} depthImage={this.state.depthImage} width={window.innerWidth} height={window.innerHeight} />
        </div>
      </div>
    );
  }
}

export default Main;