$(".login-form").hide();
$(".login").css("background", "none");

$(".login").click(function(){
    $(".signup-form").hide();
    $(".login-form").show();
    $(".signup").css("background", "none");
    $(".login").css("background", "#fff");
});

$(".signup").click(function(){
    $(".signup-form").show();
    $(".login-form").hide();
    $(".login").css("background", "none");
    $(".signup").css("background", "#fff");
});

$(".btn").click(function(){
    $(".input").val("");
});
$(document).ready(function () {
    let email=$('#email');
    let pass=$('#password');
    let btn=$('#btn');
    btn.click(function () {
        let value1=email.val();
        let value2=pass.val();
        makeGetRequest(value1,value2);
    })
    function makeGetRequest(val1,val2){
        $.ajax({
            url:"/upload",
            method:"post",
            data:{email:val1,password:val2},
            success:function (data) {
                console.log(data);
            }
        })


    }
})

