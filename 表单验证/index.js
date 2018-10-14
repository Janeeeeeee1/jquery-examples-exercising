$(function () {
    $("form :input.required").each(function () {
        let $required = $("<strong class='high'>*</strong>");
        $(this).parent().append($required);
    });
    $("form :input").blur(function () {
        let $parent = $(this).parent();
        $parent.find(".formtips").remove();
        //验证用户名
        if($(this).is("#username")){
            if(this.value === '' || this.value.length <6 ){
                let errorMsg = "请输入至少6位的用户名";
                $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
            }else{
                let okMsg = "输入正确";
                $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
            }
        }
        //验证邮箱
        if($(this).is("#email")){
            if(this.value ==='' || (this.value !== '' && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value))){
                let errorMsg = "请输入正确的E-mail地址";
                $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
            }else{
                let okMsg = "输入正确";
                $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
            }
        }
    }).keyup(function () {                   //实现即时提示
        $(this).triggerHandler("blur");
    }).focus(function () {
        $(this).triggerHandler("blur");
    });
    //提交前对表单元素进行一次整体验证
    $("#send").click(function () {
       $("form :input.required").trigger('blur');
       let numError=$("form .onError").length;
       if(numError){
           alert("输入不正确无法提交");
           return false
       }
       alert("注册成功！");
    })
});