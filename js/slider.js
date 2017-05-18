$(function () {
    var prev = 0;var special = 0;var waitTime;
    var liCount = $(".imgList li").length;
    function goodsBanner() {
        var goodsBannerWidth = $(".goodsBanner").width();
        $(".goodsBannerList").css("width",3*goodsBannerWidth);
        $(".goodsBannerList li").css("width",goodsBannerWidth);
    }
    function nextLi(background) {
        $(".goodsBannerList").children("li").eq(2).css("background",background);
        $(".goodsBannerList").animate({
            left:"-200%"
        },1000,function () {
            $(".goodsBannerList").children("li").eq(1).css("background",background);
            $(".goodsBannerList").css({left:"-100%"});
            $(".goodsBannerList").children("li").eq(2).css("background","none");
        });
    }
    function prevLi(background) {
        $(".goodsBannerList").children("li").eq(0).css("background",background);
        $(".goodsBannerList").animate({
            left:"0"
        },1000,function () {
            $(".goodsBannerList").children("li").eq(1).css("background",background);
            $(".goodsBannerList").css({left:"-100%"});
            $(".goodsBannerList").children("li").eq(0).css("background","none");
        });
    }
    function goodsBannerSlider(next) {
        var background = $(".imgList li").eq(next).css("background");
        $(".goodsBanner ol li").eq(next).addClass("active").siblings("li").removeClass("active");
        if(prev<next){
            if(special==1){
                prevLi(background);
            }else{
                nextLi(background);
            }
        }else if(prev>next){
            if(special==1){
                nextLi(background);
            }else{
                prevLi(background);
            }
        }
        prev = next;
        waitTime=0;
    }
    function ol() {
        for(var i=0;i<liCount;i++){
            $(".goodsBanner ol").append("<li></li>");
        }
        $(".goodsBanner ol").css("marginLeft","-"+$(".goodsBanner ol").width()/2+"px")
    }
    goodsBanner();
    ol();
    goodsBannerSlider(0);
    $("ol>li").click(function () {
        goodsBannerSlider($(this).index());
        $(this).index()
    });
    /*自动*/
    setInterval(function () {
        if(waitTime==7000){
            var next = prev + 1;
            if(next>liCount-1){
                special = 1;
                next = 0;
            }else{
                special = 0;
            }
            goodsBannerSlider(next);
        }
    },7000);
    setInterval(function () {
        if(waitTime<7000){
            waitTime+=100;
        }
    },100);
});
$(window).resize(function(){
    var goodsBannerWidth = $(".goodsBanner").width();
    $(".goodsBannerList").css("width",3*goodsBannerWidth);
    $(".goodsBannerList li").css("width",goodsBannerWidth);
});