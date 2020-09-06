let scrollAnchor = "anchor-scroll"

const scrollToAnchor = function(anId){
  let aTag = $("#"+anId)
  console.log(aTag);
   $("html,body").animate({ scrollTop: aTag.offset().top }, 18000);
}


//the below script triggers the animation on page load
// $(document).ready(function () {
//   scrollToAnchor(scrollAnchor);
// });

//can you trigger the animation on a click anywhere on the page?
