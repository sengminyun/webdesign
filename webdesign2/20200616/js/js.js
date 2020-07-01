$(function(){
    $("#slide_box > div:gt(0)").hide();

    setInterval(function(){
        $('#slide-box>div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slide-box');
    },3000);
});

$(function(){
    $('.popup-btn').click(function(){
        $('.popup').css('display','block')
    })
    $('.팝업닫기').click(function(){
        $('.popup').css('display','none')
    })
})
