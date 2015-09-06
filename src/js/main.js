
$('a[href^="#"]').on('click', function(event) {

    // Add active class
    $('li').removeClass('active');
    $(this).closest('li').addClass('active');

    // Get target
    var target = $( $(this).attr('href') );

    //Move to target (-30)
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - 30
        }, 800, 'swing');
    }

    var sectionName = $(this.hash).selector;
    //var sectionName = section.selector

    console.log('sectionName', sectionName);

});
