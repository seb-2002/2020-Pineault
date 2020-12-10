//when clicking on .anchorElm, the page scrolls to #scrollToIt
let anchorElm = "img-top-click";
let scrollToIt = "anchor-scroll";

//the speed of the scroll
let speed = 9000;

//when this function is called, the page scrolls to scrollAnchor
const scrollToAnchor = function (anId) {
  let aTag = $("#" + anId);
  $("html,body").animate({ scrollTop: aTag.offset().top }, speed);
};

$(document).ready(function () {
  $("a." + anchorElm).click(function (event) {
    event.preventDefault();
    scrollToAnchor("scrollToIt");
  });
});
