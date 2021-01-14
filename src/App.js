import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from "react";

import MenuTop from './components/MenuTop';
import Depth360Viewer from './components/Depth3DViewer';


class Main extends Component {
  constructor(props) {
    super(props);

    let selected = 0;
    //if get url param
    if (window.location.pathname) {
      this.props.content.images.forEach(function (value, index) {
        if (value.url === window.location.search.substr(5)) {
          selected = index;
        }
      });
    }
    this.state = {
      puzzleSelected: selected,
      image: this.props.content.images[selected].image,
      depthImage: this.props.content.images[selected].depthImage,
      width: window.innerWidth,
      height: window.innerHeight
    };

  }

  componentDidMount() {
    window.addEventListener("resize", this.resizeCanvas.bind(this));
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