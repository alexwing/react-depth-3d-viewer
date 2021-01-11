export function getUrl() {

  let url = window.location.href.split('/')[2];
  if (url.includes("localhost")) {
    return "mappuzzle.xyz";
  }
  //console.log("url: "+url);
  return url;
}
