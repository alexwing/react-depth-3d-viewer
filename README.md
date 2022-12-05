# react-depth-3d-viewer

Pseudo 3D photo viewer from a depth layer for React using pixi.js.

In 3D computer graphics and computer vision, a depth map is an image or image channel that contains information relating to the distance of the surfaces of scene objects from a viewpoint. The depth map applied to a texture as a displacement filter can achieve a 3D effect, other implementations such as Facebook also allow interpolation of the non-visible areas of the texture when moving in 3D.

The pseudo 3D photo viewer for React uses the pixi.js library and the bit displacement technique from a depth layer to create a 3D effect on photos.

Pixi.js is a widely used JavaScript library in the development of 3D games and applications due to its ease of use and optimized performance. The bit displacement technique is used to apply a displacement filter to the photo's texture, achieving a 3D effect from the information contained in the depth layer.

To apply the displacement filter to the texture, the pixi.js function filters.DisplacementFilter(depthMap, 0) is used. This function takes as parameters the depth map and a displacement on the Z axis, and applies the displacement effect to the texture. In addition, some implementations such as Facebook's also allow interpolation of the non-visible areas of the texture when moving in 3D, increasing the realism of the pseudo 3D photo viewer.

In summary, the pseudo 3D photo viewer for React is a tool that uses the pixi.js library and the bit displacement technique to create a 3D effect on photos using a depth layer. Thanks to its ease of use and optimized performance, this tool is an excellent option for those who want to add a touch of realism to their photos.

![react-depth-3d-viewer](http://mappuzzle.xyz/depth3dviewer/demoimage.jpg)

Test in http://mappuzzle.xyz/depth3dviewer/

## Requirements 

* @inlet/react-pixi
* pixi.js


## Features

* Respect aspect ratio on autofit image to canvas 
* Update on canvas resize
* Mobile touch events
* Select image from url parameters

## TO-DO

* Scroll Mode similar to Facebook wall
* Auto circular move mode
* Loader icon
  


