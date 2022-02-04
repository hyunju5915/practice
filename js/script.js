$(document).ready(function () 
{
    $('.nav-wrap > ul > li.h-over').hover(function(){
        var indexNum = $(this).attr("number");
        console.log(indexNum);
        $(this).addClass("active")
        }, function() {
        $(this).removeClass("active")
    });

    $('.nav-wrap > ul > li').hover(function(){
        var indexNum = $(this).attr("number");
        console.log(indexNum);
        $('.nav-2-depth-content > div.hover-content').eq(indexNum).addClass("active");
        $('.nav-2-depth-content').addClass("acitve");
        }, function() {
        $('.nav-2-depth-content > div.hover-content').removeClass("active");
    });

    $('.nav-2-depth-content > div').hover(function(){
        var indexNum = $(this).index();
        console.log(indexNum);
        $(this).addClass("active");
        $('.nav-wrap > ul > li.content').eq(indexNum).addClass("active")
        }, function() {
        $(this).removeClass("active");
        $('.nav-wrap > ul > li.h-over').removeClass("active")
    });

    $('.nav-wrap > ul > .all-menu-box').click(function(){
        $(this).toggleClass("active");
        $('.nav-2-depth-wrap > .all-menu-content').toggleClass("active");
    });

    $('.all-menu-wrap > .clo-btn').click(function(){
        $('.nav-2-depth-wrap > .all-menu-content').removeClass("active");
        $('.nav-wrap > ul > .all-menu-box').toggleClass("active"); 
    });

    $(".trip-nav > ul > li").click(function(){
        var indexNum = $(".trip-nav > ul > li").index(this);
        console.log(indexNum);
        
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        $(".trip-content > div").eq(indexNum).addClass("active");
        $(".trip-content > div").eq(indexNum).siblings().removeClass("active");
    });

    function getTodayLabel(today) {
    
        if(today > 6){
            today = today - 7
        };

        var week = new Array('일', '월', '화', '수', '목', '금', '토');
        
        // var today = new Date().getDay();
        var todayLabel = week[today];
        // console.log(new Date());
        // console.log(today);
        // console.log(todayLabel);
        
        return todayLabel;
    };

    var loadTime_after = new Date(Date.now() + 1000*60*60*24*3);
    var loadTime = new Date();

    var loadYear = loadTime.getFullYear();
    var loadMonth = loadTime.getMonth()+1;
    var loadDate = loadTime.getDate();
    var today = loadTime.getDay();
    var loadDayLabel = getTodayLabel(today);
    var loadDayLabelEn = getTodayLabel(today+3);

    var loadYear_after = loadTime_after.getFullYear();
    var loadMonth_after = loadTime_after.getMonth()+1;
    var loadDate_after = loadTime_after.getDate();
 

    $(".date-st-btn").text( loadMonth +"." + loadDate + "(" +loadDayLabel+ ")");
    $(".date-en-btn").text( loadMonth_after +"." + loadDate_after + "(" +loadDayLabelEn+ ")");
    $(".date-btn").text( loadYear+"."+ loadMonth +"."+ loadDate + " ~ " + loadYear_after+"."+ loadMonth_after +"."+ loadDate_after );


    $('.main-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".page-box > span").text(nextSlide+1);
      });

      $('.main-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".page-box > span").text(nextSlide+1);
      });

    $(".play").click(function(){
        $('.main-slider').slick('slickPause');
        $(".play").removeClass("active");
        $(".pause").addClass("active");
    });

    $(".pause").click(function(){
        $('.main-slider').slick('slickPlay');
        $(".play").addClass("active");
        $(".pause").removeClass("active");
    });

    $('.hot-box > .slider').slick({
        autoplay : true,
        infinite : true, 
        autoplaySpeed : 1000,
        vertical: true ,
        useTransform : true,
    });

    $('.main-slider').slick({
        autoplay : true,
        infinite : true, 
        autoplaySpeed : 1000,
        useTransform : true,
        prevArrow:$(".prev-btn"),
        nextArrow:$(".next-btn"),
        asNavFor: '.main-color-slider',
        draggable: false,
    });

    $('.main-color-slider').slick({
        asNavFor: ".main-slider",
        fade: true,
        prevArrow: false,
        nextArrow: false,
        draggable: false,
    });

    // section02
    $(".section02 > .main-item > ul >li").click(function(){
        $(this).addClass("active")
        $(this).siblings().removeClass("active")
    });

    $(".section02 > .main-item > ul >li").click(function(){
        var indexNum = $(this).index()
        console.log(indexNum);
        $(".item-wrap > li").eq(indexNum).addClass("active");
        $(".item-wrap > li").eq(indexNum).siblings().removeClass("active");
    });

    // section03

    $('.section03 > .slider').slick({
        autoplaySpeed : 1000,
        useTransform : true,
        slidesToShow : 4,
        prevArrow:$(".left-btn"),
        nextArrow:$(".right-btn"),
    });
   

});


  