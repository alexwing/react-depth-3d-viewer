export function getUrl() {

  let url = window.location.href.split('/')[2];
  if (url.includes("localhost")) {
    return "mappuzzle.xyz";
  }
  //console.log("url: "+url);
  return url;
}


export function AspectRatio(width, height) {
  let aspectRatioImage = width / height;
  return aspectRatioImage ? aspectRatioImage : null;
}