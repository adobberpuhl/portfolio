$(window).load(function() {
   $("section").each(function(index) {
	    $(this).delay(400*index).slideDown(300);
	});
});

// $(document).ready(function() {
//     var $toggleButton = $('.ham'),
//         $menuWrap = $('.nav');

//     $toggleButton.on('click', function() {
//         $(this).toggleClass('buttonOpen');
//         $menuWrap.toggleClass('menuShow');
//     });
// });