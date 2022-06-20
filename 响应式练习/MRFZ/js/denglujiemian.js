$(document).ready(function () {
  /*登录功能*/
     $("#loginbtn").click(function () {
            var user=window.document.getElementById("user").value;
            var password=window.document.getElementById("password").value;//获取值
            if (user == ""||password ==""){
                window.alert("用户名或密码不能为空!");
                return false;
            }
           if(user!="36"||password!="123456"){//判断用户名密码登录
                window.alert("用户名或密码错误!");
                return false;
           }
                window.location.href="zhujiemian.html";
                window.event.returnValue = false;//原因是 a标签的href跳转会执行在window.location.href设置的跳转之前:如果是表单form的话  也会先执行form提交。提交之后 就已经不在当前页面了。所以 window.location.href无效。这次点击事件不会提交表单，如果放到超链接中则在这次点击事件不执行超链接href属性
     }),
     $("#registerbtn").click(function () {
       alert("暂不支持注册")
     })
  /*注册功能暂无*/
/*登录注册切换 旧 */
// function zindex_login(){
// 	$('#login').addClass("zindex_login");
// }
// function zindex_register(){
// 	$('#register').addClass("zindex_register");
// }


/*获取高度*/
var sectionheight = $(window).height();//浏览器当前窗口可视区域高度
$('section').css("height", sectionheight);//这里-138是为了显示完整



/*登录注册切换 新 */
     //  $("#login").show();
     //  $("#register").hide();

     // $("#zindex_login").click(function () {
     //      $("#login").show(2000);
     //      $("#register").hide(500);
     // })


     // $("#zindex_register").click(function(){
     //      $("#register").show(2000);
     //      $("#login").hide(500);
     // })


     /*登录注册切换 新新 */
     $("#zindex_register").click(function () {
          $('.al').addClass("rotatev");
          setTimeout(function () { $('#login').hide(); }, 600);/*定时器1.5s后隐藏，因为是3d，所以点击正面相当于点击反面，避免冲突 */
          $('#register').show();
          $('.al').removeClass("rotate-reversev");
     })


     $("#zindex_login").click(function () {
          $('.al').addClass("rotate-reversev");
          setTimeout(function () { $('#register').hide(); }, 600);/*********************************出现问题：点击登录按钮，当密码错误提示弹窗后，再次点击登录按钮发生 ‘暂不支持注册’，‘密码错误’ 两个弹窗来回切换……  神奇…… 然后发现问题出在hide前获取注册界面的id忘了加‘#’号了………………*********************************/
          $('#login').show();
          $('.al').removeClass("rotatev");

     })
     
})





     

