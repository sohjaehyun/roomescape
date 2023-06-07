$(function(){
    //햄버거 메뉴 슬라이드
    $(".hamburger").click(function(){
       $(".menu").animate({marginLeft:"200px"},300);
    });
   
    $(".cross").click(function(){
       $(".menu").animate({marginLeft:"0"},300);
    })
   
    $(".menu>ul>li>a").click(function(){
       if($(this).next().is(":visible")){
           $(this).next().stop().slideUp(500);
           $(this).children("img").attr("src","img/arrow-down.png");
       }else{
           $(".menu_sub").stop().slideUp(500);
           $(".menu>ul>li>a").children("img").attr("src","img/arrow-down.png");
           $(this).next().stop().slideDown(500);
           $(this).find("img").attr("src","img/arrow-up.png");
       }
    });

    //pc메뉴 슬라이드
    $(".pc-menu>ul>li>a").mouseenter(function(){
       $(this).next().stop().slideDown(500);
    })
    $(".pc-menu>ul>li").mouseleave(function(){
       $(this).children().next().stop().slideUp(500);
    })

})