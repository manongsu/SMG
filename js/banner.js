/*核心代码*/
$.fn.banner = function (options) {
    var obj={
        toggleTime:1000,
        next:".next",
        prev:".prev",
        time:3000
    };
    var self = this;
    var settings = $.extend(obj, options);
    var liCount = self.children("li").length;
    var num = 0 ;
    function toggle(number) {
        self.children("li").eq(number).fadeIn(obj.toggleTime).siblings("li").fadeOut(obj.toggleTime);
    }
    /*初次加载显示第一张*/
    $(function () {
        toggle(num);
    });
    var waitTime = 0;
    setInterval(function () {
        if(waitTime<obj.time){
            waitTime+=100;
        }
    },100);
    function img_next() {
        waitTime = 0;
        num++;
        if(num == liCount){
            num = 0;
        }
        toggle(num);
    }
    $(obj.next).click(function () {
        img_next();
    });
    function img_prev() {
        waitTime = 0;
        num--;
        if(num == -1){
            num = liCount-1;
        }
        toggle(num);
    }
    $(obj.prev).click(function () {
        img_prev();
    });
    setInterval(function(){
        if(waitTime==obj.time){
            img_next();
        }
    },obj.time);
}