$(document).ready(function() {
    var $toggleButton = $('.ham'),
        $menuWrap = $('.nav');

    $toggleButton.on('click', function() {
        $(this).toggleClass('buttonOpen');
        $menuWrap.toggleClass('menuShow');
    });
});