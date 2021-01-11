import React, { Component } from 'react';
//import { isMobile } from 'react-device-detect';
import { Stage, PixiComponent } from '@inlet/react-pixi';
import { Graphics, Sprite, filters } from 'pixi.js';


export default class Depth3DViewer extends Component {

    render() {
        const Depth3D = PixiComponent('Rectangle', {
            create: props => new Graphics(),
            applyProps: (instance, _, props) => {
                const { image, depthImage, x, y, width, height } = props;

                let img = new Sprite.from(image);
                let depthMap = new Sprite.from(depthImage);
                depthMap.x = img.x = x;
                depthMap.y = img.y = y;
                depthMap.width = img.width = width;
                depthMap.height = img.height = height;
                instance.addChild(img);
                instance.addChild(depthMap);

                let displacementFilter = new filters.DisplacementFilter(depthMap, 0);
                instance.filters = [displacementFilter];
                
                window.onmousemove = function (e) {
                    displacementFilter.scale.x = (window.innerWidth / 2 - e.clientX) / 25;
                    displacementFilter.scale.y = (window.innerHeight / 2 - e.clientY) / 25;
                };
            },
        });

        return <Stage width={this.props.width} height={this.props.height} >
            <Depth3D image={this.props.image} depthImage={this.props.depthImage} x={this.props.x ? this.props.x : 0} y={this.props.y ? this.props.y : 0} width={this.props.width} height={this.props.height} />
        </Stage>
    }

}