---
# process this file
---

// Slide Show data
var slideData = [
	{% for project in site.projects reversed %}
		{
		  'type': 'project',
		  'imgFile': '{{ project.image }}',
		  'title': '{{ project.title }}',
		  'date': '{{ project.date | date: "%b %Y" }}'
		},
	{% endfor %}
];

// change image on load
changeImg(100);
// change image slide on click
$("#slide-img").click(function() {
	changeImg(100);
})

// change slide every 4 seconds
setInterval(function(){
	changeImg(1000);
}, 5000);

var previousIndex;
var imageIndex;
function changeImg(time) {
  // Randomize the sequence of photos
  previousIndex = imageIndex;
  // on start
  if (previousIndex == null) {
    imageIndex = (Math.floor(Math.random() * 16)) % (slideData.length);
    console.log("SHUFFLE slides ");
  }

  // next image until it is different
  // avoids duplicates and projects without images
  while (previousIndex == imageIndex || slideData[imageIndex]["imgFile"] == null || slideData[imageIndex]["type"] != "project") {
    imageIndex++;
    imageIndex = (imageIndex) % slideData.length;
  }

  var imgText = slideData[imageIndex]["title"] + " - (" + slideData[imageIndex]["date"]  + ")";

	console.log("slide " + imageIndex + ": " + imgText);

  var slideImg = $("#slide-img > img");
  var imgCaption = $("#img-caption");
	next();
  // TweenLite.to(slideImg, (time/1000)/2, {opacity:0, ease:Power2.easeIn, onComplete:next});
  // TweenLite.to(imgCaption, (time/1000)/2, {opacity:0, ease:Power2.easeIn, onComplete:next});
  function next() {
    slideImg
      .attr('src', slideData[imageIndex]["imgFile"])
      .attr('alt', imgText);
    imgCaption.html(imgText);
    // TweenLite.to(slideImg, (time/1000)/2, {opacity:1, ease:Power2.easeIn});
    // TweenLite.to(imgCaption, (time/1000)/2, {opacity:1, ease:Power2.easeIn});
  }
}
