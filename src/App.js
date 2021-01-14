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
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.resizeCanvas.bind(this));

    //get url param
    if (window.location.pathname) {
      //  console.log(window.location.search.substr(5));
      let selected = 0;
      this.props.content.images.forEach(function (value, index) {
        if (value.url === window.location.search.substr(5)) {
          //console.log(value.url + "==" + window.location.pathname.substring(1));
          selected = index;
        }
      });
      this.loadDepthImage(selected);
    }
  }
  loadDepthImage(index) {
    this.setState({
      puzzleSelected: index,
      image: this.props.content.images[index].image,
      depthImage: this.props.content.images[index].depthImage,
    });
  }

  onSelectImageHandler = (val) => {
    if (val.target.id) {
      this.setState({
        puzzleSelected: val.target.id,
        image: this.props.content.images[val.target.id].image,
        depthImage: this.props.content.images[val.target.id].depthImage,
      });

    }
  }

  //update on resize canvas
  resizeCanvas() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }


  render() {
    return (
      <div>
        <MenuTop name="Depth3DViewer"
          content={this.props.content.images}
          onSelectImage={this.onSelectImageHandler}
        />
        <div style={{ position: "absolute", top: "0px", overflow: "hidden" }}>
          <Depth360Viewer image={this.state.image} depthImage={this.state.depthImage} width={this.state.width} height={this.state.height} />
        </div>
      </div>
    );
  }
}

export default Main;