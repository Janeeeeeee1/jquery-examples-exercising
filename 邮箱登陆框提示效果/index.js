$(function () {
    let $address = $("#address");
    let $password = $("#password");
    $address.focus(function(){
        let txt_value= $(this).val();
        if(txt_value === "请输入邮箱地址"){
            $(this).val("");
        }
    });
    $address.blur(function () {
        let txt_value = $(this).val();
        if(txt_value === ""){
            $(this).val("请输入邮箱地址");
        }
    });
    $password.focus(function () {
        let txt_value=$(this).val();
        if(txt_value === "请输入邮箱密码"){
            $(this).val("");
        }
    });
    $password.blur(function () {
        let txt_value = $(this).val();
        if(txt_value === ""){
            $(this).val("请输入邮箱密码");
        }
    })
});