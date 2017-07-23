
$(".waterFall img").load(function () {
    function waterFall() {
        var height1 = 0,height2 = 0,height3 = 0;
        var mB = parseInt($("body").css("font-size"))/2;
        $(".waterFall li").each(function () {
            var index = $(this).index() + 1;
            if(index<=3){
                check($(this),index);
            }else{
                insert($(this));
            }
        });
        function check($this,index) {
            switch (index){
                case 1:
                    $this.css({
                        "top":height1,
                        "left":0,
                    });
                    height1 = height1 + $this.height()+mB;
                    break;
                case 2:
                    $this.css({
                        "top":height2,
                        "left":"6.7rem",
                    });
                    height2 = height2 + $this.height()+mB;
                    break;
                case 3:
                    $this.css({
                        "top":height3,
                        "left":"13.4rem",
                    });
                    height3 = height3 + $this.height()+mB;
                    break;
            }
            $(".waterFall ul").css("height",Math.max(height1,height2,height3))
        }
        function insert($this) {
            var min =  Math.min(height1,height2,height3);
            var minCol;
            if(min==height1){
                minCol=1;
            }else if(min==height2){
                minCol=2;
            }else if(min==height3){
                minCol=3;
            }
            check($this,minCol)
        }

    }
    waterFall();
});
$(window).resize(function () {
    waterFall();
});