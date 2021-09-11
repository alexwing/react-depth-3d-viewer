import React, { Component } from 'react';
//import { isMobile } from 'react-device-detect';
import { Stage, PixiComponent } from '@inlet/react-pixi';
import { Graphics, Sprite, Texture, BaseTexture,filters  } from 'pixi.js';
import { AspectRatio } from "../lib/Utils"
;

export default class Depth3DViewer extends Component<any, any> {
    render() {
        var img: Sprite;
        var depthMap: Sprite;
        const Depth3D = PixiComponent('Rectangle', {
            create: props => new Graphics(),
            applyProps: (instance, _, props) => {
                const { image, depthImage, x, y, width, height } = this.props;
                let imageTexture = new BaseTexture(image);
                let depthImageTexture = new BaseTexture(depthImage);
                //loaders
                if (imageTexture.valid) {
                    CreateDepth3D(instance, imageTexture, depthImageTexture, x, y, width, height);
                } else {
                    imageTexture.on('loaded', function () {
                        CreateDepth3D(instance, imageTexture, depthImageTexture, x, y, width, height); // or this
                    });
                }

                if (depthImageTexture.valid) {
                    CreateDepth3D(instance, imageTexture, depthImageTexture, x, y, width, height);
                } else {
                    depthImageTexture.on('loaded', function () {
                        CreateDepth3D(instance, imageTexture, depthImageTexture, x, y, width, height); // or this
                    });
                }
            },
        });

        function CreateDepth3D(instance:any, imageTexture:BaseTexture, depthImageTexture:BaseTexture, x:number, y:number, width:number, height:number) {
            //Only create if two images has loaded
            if (!imageTexture.valid || !depthImageTexture.valid) {
                return;
            }
            //remove old photos view
            if (depthMap) {
                instance.removeChild(depthMap)
            }
            if (img) {
                instance.removeChild(img)
            }

            img =  Sprite.from(new Texture(imageTexture));
            depthMap = Sprite.from(new Texture(depthImageTexture));

            FitToScreen(width, height);

            let displacementFilter:any =  new filters.DisplacementFilter(depthMap, 0);
            //displacementFilter. blendMode  = BLEND_MODES.DIFFERENCE;
            displacementFilter.resolution   = 2;
            instance.filters = [displacementFilter];

            instance.addChild(img);
            instance.addChild(depthMap);


            //img.hitArea = new Rectangle(img.x, img.y, img.width, img.height);
            img.interactive = true;
            //img.buttonMode = true;
            img.on('pointermove', function (e:any) {
                displacementFilter.scale.x = (img.width / 2 - e.data.global.x) / 25;
                displacementFilter.scale.y = (img.height / 2 - e.data.global.y) / 25;
            });



        }

        function FitToScreen(width:number, height:number) {
            console.log(AspectRatio(img.width, img.height) + "- " + AspectRatio(width, height) + " - " + window.devicePixelRatio);
            if (AspectRatio(width, height) >= AspectRatio(img.width, img.height)) {
                //console.log("Horizontal");
                //fit to canvas height
                img.height = height;
                depthMap.height = height;

                //scale width
                depthMap.scale.x = depthMap.scale.y;
                img.scale.x = img.scale.y;

                //center image
                img.x = img.x = -(img.width - width) * 0.5;
                depthMap.x = depthMap.x = -(depthMap.width - width) * 0.5;
            }
            else {
                //console.log("vertical");
                //fit to canvas width
                img.width = width;
                depthMap.width = width;

                //scale height
                depthMap.scale.y = depthMap.scale.x;
                img.scale.y = img.scale.x;

                //center image
                img.y = img.y = -(img.height - height) * 0.5;
                depthMap.y = depthMap.y = -(depthMap.height - height) * 0.5;
            }
        }

        return <Stage width={this.props.width} height={this.props.height} options={{ resolution: 1  }} >
            <Depth3D image={this.props.image} depthImage={this.props.depthImage} x={this.props.x ? this.props.x : 0} y={this.props.y ? this.props.y : 0} width={this.props.width} height={this.props.height}  {...(this.props as any)}/>
        </Stage>
    }

}