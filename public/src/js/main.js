$(function () {
    $('.main').css('min-height', ($(window).height() + 'px'));

    //浏览器滚动时，检测滚动高度
    $(window).scroll(function (){
        var scrollTop = $(this).scrollTop();
        if (scrollTop >= 300) {
            $('.go-top').fadeIn();
        } else {
            $('.go-top').fadeOut();
        }
    });

    //点击滚动到头部
    $('.go-top').unbind().bind('click', function () {
        $('body, html').animate({'scrollTop': 0}, 800);
    });
});
