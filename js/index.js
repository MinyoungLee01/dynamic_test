$(document).ready(function () {
    $('.scrollbtn.right').click(function () {
        $('main .I-flexbox').addClass('move')
        $('.scrollbtn.left').removeClass('none')
        $(this).addClass('none')
    })
    $('.scrollbtn.left').click(function () {
        $('main .I-flexbox').removeClass('move')
        $('.scrollbtn.right').removeClass('none')
        $(this).addClass('none')
    })
    $('.xbtn').click(function () {
        if(!$(this).hasClass('help')){
            $('section.popup').addClass('none')
            $(this).text('?').addClass('help')
            $('body').addClass('unset')
        }else{
            $('section.popup').removeClass('none')
            $(this).text('X').removeClass('help')
            $('body').removeClass('unset')
        }
    })
})