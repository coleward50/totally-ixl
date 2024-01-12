var iframesrc = document.getElementById("gameframe").src;
iframesrc += "#".repeat(8000);
document.getElementById("gameframe").src = iframesrc;

var elem = document.getElementById("gameframe");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}
