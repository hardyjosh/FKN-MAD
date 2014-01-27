(function($) {

// Shorthand for $( document ).ready()
$(function() {
    console.log( "ready!" );

    var videos = ['//player.vimeo.com/video/79639345', '//player.vimeo.com/video/80434974'];
	$('.video-container').append('<iframe src="'+videos[0]+'" width="600" height="375" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
    for(var i=0; i < videos.length; i++){
    	$('.controls').append('<a class="'+i+'" href="#">'+i+'</a>');	
    	console.log($('.controls.'+i+''));
    	$('.controls.'+i+'').click(function(){
    		alert('asdasd');
    	});
	}

// Find all YouTube videos
// var $allVideos = $("iframe[src^='http://player.vimeo.com']"),

//     // The element that is fluid width
//     $fluidEl = $("body");

// // Figure out and save aspect ratio for each video
// $allVideos.each(function() {

//   $(this)
//     .data('aspectRatio', this.height / this.width)

//     // and remove the hard coded width/height
//     .removeAttr('height')
//     .removeAttr('width');

// });

// // When the window is resized
// $(window).resize(function() {

//   var newWidth = $fluidEl.width();

//   // Resize all videos according to their own aspect ratio
//   $allVideos.each(function() {

//     var $el = $(this);
//     $el
//       .width(newWidth)
//       .height(newWidth * $el.data('aspectRatio'));

//   });

// // Kick off one resize to fix all videos on page load
// }).resize();

	// $('#carousel').carouFredSel({
	//     responsive: true,      	  
	//     width: "500px" 
	// });


// var carousel = $(".video-container");
// carousel.carouFredSel({
//     width: "100%",
//     height: "auto",
//     responsive: true,
//     auto: false,
//     // scroll: {
//     //     items: 1,
//     //     fx: 'scroll'
//     // },
//     duration: 1000,
//     swipe: {
//         onTouch: true,
//         onMouse: true
//     },

//     onCreate : function () {
//         $(window).on('resize', function(){
//             carousel.parent().add(carousel).css('height', carousel.children().first().height() + 'px');
//         }).trigger('resize');
//     }
// });

});

})(jQuery);

