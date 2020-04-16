/* --- second try
function changeImage() {
  var element = document.getElementsByClassName("clap");
  var style = window.getComputedStyle(element);
  var index = style.getPropertyValue("z-index");

  if(index > 0)
  {
    document.getElementsByClassName("clap").style.zIndex = "-1";
  }
  else {
    document.getElementsByClassName("clap").style.zIndex = "1";
  }
}
*/

/* --- first try
document.getElementsByClassName('clapping-container').ontouchstart = changeImage;

function changeImage() {
  document.getElementsByClassName('clap_2').style.z-index = 1;
}
*/

/*
function changeImage() {
  var element = document.getElementsByClassName('clap');
  var index = object.getPropertyValue('z-index');

  if(index > 0)
  {
    document.getElementsByClassName('clap').style.zIndex = "-1";
  }
  else
  {
    document.getElementsByClassName('clap').style.zindex = '1';
  }
}
*/

/* --- third try
document.getElementsByClassName("clap").addEventListener("touchstart", myFunction);

function myFunction {
  document.getElementsByClassName("clap").style
}
*/

document.getElementsByClassName("clapping-container").ontouchstart = myFunction;

function myFunction() {
  style.getPropertyValue("z-index") = -1;
}
