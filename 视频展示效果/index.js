$(function(){
    let i = 4,
        page = 1;
    $("span.next").click(function () {
        let $parent = $(this).parents("div.v_show");
        let $v_show = $parent.find("div.v_content_list");
        let $v_content = $parent.find("div.v_content");
        let  v_width = $v_content.width();
        let len = $v_show.find("li").length;
        let page_count = Math.ceil(len/i);
        if(!$v_show.is(":animated")){
            if(page === page_count){
                $v_show.animate({left:"0px"},"slow");
                page = 1;
            }else{
                $v_show.animate({left:'-='+v_width},"slow");
                page ++;
            }
            $(".highlight_tip span").eq((page-1)).addClass("current").siblings().removeClass("current");
        }
    });
    $("span.prev").click(function () {
        let $parent = $(this).parents("div.v_show");
        let $v_show = $parent.find("div.v_content_list");
        let $v_content = $parent.find("div.v_content");
        let v_width = $v_content.width();
        let len = $v_show.find("li").length;
        let page_count = Math.ceil(len/i);
        if(!$v_show.is("animated")){
            if(page === 1){
                $v_show.animate({left:'-='+v_width*(page_count-1)},"slow");
                page = page_count;
            }else{
                $v_show.animate({left:'+='+v_width},"slow");
                page --;
            }
        }
        $parent.find(".highlight_tip span").eq((page-1)).addClass("current").siblings().removeClass("current");
    })

});