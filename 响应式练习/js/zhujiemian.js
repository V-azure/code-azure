

$(document).ready(function (){
    /*汉堡菜单*/
    $('.menu').hide();
    var rn = true;/*这个判断逻辑绝了*/
    $('.menupic').click(function () {
        if (rn) {
            rn = false;
            $('.menu').show(500);
        }
        else {
            rn = true;
            $('.menu').hide(500);
        }
    })
    $('section').click(function(){/*点击section区域隐藏汉堡菜单 */
        $('.menu').hide(1000);
    })
/*文字前的线的变长效果*/
    /*首页*/ 
    $(".line1").animate({ width: "70%" }, 0);//初始显示
    $(".m1").click(function () {
        $(".line1").animate({ width: "70%" },400);
        $(".line2,.line3,.line4,.line5").animate({ width: "0" }, 400);
    });
    
    /*情报*/
    $(".m2").click(function () {
        $(".line2").animate({ width: "70%" },400);
        $(".line1,.line3,.line4,.line5").animate({ width: "0" }, 400);
    });

    /*世界观*/
    $(".m3").click(function () {
        $(".line3").animate({ width: "70%" },400);
        $(".line1,.line2,.line4,.line5").animate({ width: "0" }, 400);
    });
    
    /*回忆相册*/
    $(".m4").click(function () {
        $(".line4").animate({ width: "70%" },400);
        $(".line1,.line2,.line3,.line5").animate({ width: "0" }, 400);
    });
    
    /*个人中心*/
    $(".m5").click(function () {
        $(".line5").animate({ width: "70%" },400);
        $(".line1,.line3,.line4,.line2").animate({ width: "0" }, 400);
    });
    
    
    
    
    
    /*获取高度*/
    var sectionheight = $(window).height();//浏览器当前窗口可视区域高度
    $('section').css("height", sectionheight);
    $('#img-mask').css("height", sectionheight);
    $('.bigtitle').css("line-height", sectionheight+"px");



    /*音乐停止播放*/
    $("#musicbtn").click(function () {/*jquery选择器获得的是jquery对象，0对象的才是对应的节点对象。 */
        //$("#music")[0].play();播放
        //$("#music")[0].pause();暂停
            var music = document.getElementById("music");
            if (music.paused) {
                music.play();
            } else {
                music.pause();
            }
        }); 


    /*load动画 */
    $('.load').fadeOut(2500);








/*彩蛋 */
    $(".QRlogo").dblclick(function () {
        window.location.href = "hide.html";
    });
    $(".title").dblclick(function () {
        window.location.href = "hide0.html";
    });
})