$(function(){
    $('.pl').click(function(){
        $('.click-row').css('display','flex');
        $('.mi').css('display','block');
        $('.pl').css('display','none');
    });
    $('.mi').click(function(){
        $('.click-row').css('display','none');
        $('.pl').css('display','block');
        $('.mi').css('display','none');
    });
    $('.tab-img-1').click(function(){
        $('.tab-txt-1').css('display','block');
        $('.tab-img-1').css('opacity','1');
        $('.tab-txt-2').css('display','none');
        $('.tab-img-2').css('opacity','0.5');
        $('.tab-txt-3').css('display','none');
        $('.tab-img-3').css('opacity','0.5');
    });
    $('.tab-img-2').click(function(){
        $('.tab-txt-1').css('display','none');
        $('.tab-img-1').css('opacity','0.5');
        $('.tab-txt-2').css('display','block');
        $('.tab-img-2').css('opacity','1');
        $('.tab-txt-3').css('display','none');
        $('.tab-img-3').css('opacity','0.5');
    });
    $('.tab-img-3').click(function(){
        $('.tab-txt-1').css('display','none');
        $('.tab-img-1').css('opacity','0.5');
        $('.tab-txt-2').css('display','none');
        $('.tab-img-2').css('opacity','0.5');
        $('.tab-txt-3').css('display','block')
        $('.tab-img-3').css('opacity','1');
    });
    $('.button').click(function(ev){
        ev.preventDefault();
        $(this).toggleClass('active');
    });
});




setInterval(function(){
    $(".slide_box1").delay("1800");
    $(".slide_box1").animate({marginLeft:"-480px"},500);
    $(".slide_box1").delay("1800");
    $(".slide_box1").animate({marginLeft:"0"},500);
});
setInterval(function(){
    $(".slide_box2").delay("1800");
    $(".slide_box2").animate({marginLeft:"-480px"},500);
    $(".slide_box2").delay("1800");
    $(".slide_box2").animate({marginLeft:"0"},500);
});

/**스크롤이 설정한 높이 이상 내려갔을때 스타일추가하기**/
if (jQuery(window).width() > 0) {
jQuery(window).on("scroll",function(ev){
    if(jQuery(window).scrollTop() > 150 ) { /**높이 픽셀 조정**/
        jQuery('.menu_box').addClass('fixed');  /**위의 높이에서 .fixed 클래스를 추가합니다. 스타일에서 자유롭게 수치 조절 가능합니다.**/
    }
    else{
        jQuery('.menu_box').removeClass('fixed');
    }
    return false;
});
}

/**마우스 부드럽게 해당위치로 이동**/
$(function(){
   $('a[href^=#]').click(function() {
      var speed = 800;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});
var mapContainer = document.getElementById('.map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
// marker.setMap(null);    