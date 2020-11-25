$(window).scroll(function(){
    var scroll_position = $(window).scrollTop()/5;
    $('section').css({
        'background-position-x' : - scroll_position + 'px'
    })
})