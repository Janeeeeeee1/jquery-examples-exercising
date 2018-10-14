$(function(){
    $('span').click(function(){
        let $para = $("#para");
        let thisEle = $para.css("font-size");
        let textFontSize = parseInt(thisEle,10);
        let unit = thisEle.slice(-2);
        let cName = $(this).attr("class");
        if(cName === "bigger"){
            if(textFontSize <=24){
                textFontSize += 2;
            }
        }else if(cName === "smaller"){
            if(textFontSize >= 10){
                textFontSize -=2;
            }
        }
        $para.css("fontSize",textFontSize+unit);
    });
});