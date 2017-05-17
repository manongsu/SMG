function tab($tabLi,tabWrap) {
    var index = $tabLi.index();
    $tabLi.addClass("active").siblings("li").removeClass("active");
    $(tabWrap).eq(index).css("display","block").siblings(tabWrap).css("display","none");
}
$(".tab li").click(function () {
    tab($(this),".tabWrap");
});
$(function () {
    tab($(".tab li").eq(0),".tabWrap");
});
