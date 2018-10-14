$(function () {
    let $div_li = $(".tab_menu ul li");
    $div_li.click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
        let index = $(this).index();  //获取当前单击的<li>元素在全部<li>元素中的索引
        $(".tab_box>div").eq(index).show().siblings().hide();
    })
});