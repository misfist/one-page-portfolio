$(document).ready(function() {

    console.log( 'main.js loaded' );


    $.scrollTo({margin:true});

    $("nav a").click(function(event){

        event.preventDefault();

        $('li').removeClass('active');
        $(this).closest('li').addClass('active');

        $('html,body').scrollTo(this.hash, this.hash);

    });
  
});