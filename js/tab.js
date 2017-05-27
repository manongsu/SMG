function tab($tabLi,tabWrap) {
    var index = $tabLi.index();
    $tabLi.addClass("active").siblings("li").removeClass("active");
    $(tabWrap).eq(index).css("display","block").siblings(tabWrap).css("display","none");
}
<!--JS计算absolute自动撑开-->
function absoluteHeight($tabWrap) {
    $tabWrap.each(function () {
        if($(this).css("display")=="block"){
            var height = $(this).css("height");
            $(".message").css("padding-bottom",height);
        }
    });
}
$(".tab li").click(function () {
    tab($(this),".tabWrap");
    absoluteHeight($(".tabWrap"));
});

$(function () {
    tab($(".tab li").eq(0),".tabWrap");
    absoluteHeight($(".tabWrap"));
});
$(window).resize(function () {
    absoluteHeight($(".tabWrap"));
});
