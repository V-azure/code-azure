
$(document).ready(function(){
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
	$('section').click(function () {/*点击container区域隐藏汉堡菜单 */
		$('.menu').hide(1000);
	})
	/*文字前的线的变长效果*/
	/*首页*/
	$(".line4").animate({ width: "70%" }, 0);//初始显示
	$(".m1").click(function () {
		$(".line1").animate({ width: "70%" }, 400);
		$(".line2,.line3,.line4,.line5").animate({ width: "0" }, 400);
	});

	/*情报*/
	$(".m2").click(function () {
		$(".line2").animate({ width: "70%" }, 400);
		$(".line1,.line3,.line4,.line5").animate({ width: "0" }, 400);
	});

	/*世界观*/
	$(".m3").click(function () {
		$(".line3").animate({ width: "70%" }, 400);
		$(".line1,.line2,.line4,.line5").animate({ width: "0" }, 400);
	});

	/*回忆相册*/
	$(".m4").click(function () {
		$(".line4").animate({ width: "70%" }, 400);
		$(".line1,.line2,.line3,.line5").animate({ width: "0" }, 400);
	});

	/*个人中心*/
	$(".m5").click(function () {
		$(".line5").animate({ width: "70%" }, 400);
		$(".line1,.line3,.line4,.line2").animate({ width: "0" }, 400);
	});
	
	
	
	
	
	
	
	
   //第一列
  /*添加文字*/
  $(function(){
				var rn=true;
				$('#s1').click(function(){
					if(rn){
						rn=false;
						$('#s1').after('<h2 style="color:deepskyblue;"><br><br>#整合运动##塔露拉#</h2>');
					}
					else{
						rn=true;
						$('h2').remove();
					}
				})
		})
  $("#s1").click(function(){
  $(".ck1").toggleClass("sca");
  $("section,.fleximg").toggleClass("over")
  $(".Secondcolumn,.Thirdcolumn,.Fourthcolumn,.Fifthcolumn").toggleClass("dis");
  });
  
  $(function(){
				var rn=true;
				$('#s2').click(function(){
					if(rn){
						rn=false;
						$('#s2').after('<h2 style="color:deepskyblue;"><br><br>#凯尔希##罗德岛医疗中心#</h2>');
					}
					else{
						rn=true;
						$('h2').remove();
					}
				})
			})
  $("#s2").click(function(){
  $(".ck2").toggleClass("sca");
  $("section,.fleximg").toggleClass("over")
  $(".ck1,.Secondcolumn,.Thirdcolumn,.Fourthcolumn,.Fifthcolumn").toggleClass("dis");
  });
  //第二列
  $(function(){
				var rn=true;
				$('#s3').click(function(){
					if(rn){
						rn=false;
						$('#s3').after('<h2 style="color:deepskyblue;"><br><br>#安心院##安洁莉娜#</h2>');
					}
					else{
						rn=true;
						$('h2').remove();
					}
				})
			})
  $("#s3").click(function(){
  $(".ck3").toggleClass("sca");
  $("section,.fleximg").toggleClass("over")
  $(".ck4,.ck5,.ck6,.Firstcolumn,.Thirdcolumn,.Fourthcolumn,.Fifthcolumn").toggleClass("dis");
  });
  
  $(function(){
				var rn=true;
				$('#s4').click(function(){
					if(rn){
						rn=false;
						$('#s4').after('<h2 style="color:deepskyblue;"><br><br>#企鹅物流##休憩#</h2>');
					}
					else{
						rn=true;
						$('h2').remove();
					}
				})
			})
  $("#s4").click(function(){
  $(".ck4").toggleClass("sca");
  $("section,.fleximg").toggleClass("over")
  $(".ck3,.ck5,.ck6,.Firstcolumn,.Thirdcolumn,.Fourthcolumn,.Fifthcolumn").toggleClass("dis");
  });
  
  $(function(){
				var rn=true;
				$('#s5').click(function(){
					if(rn){
						rn=false;
						$('#s5').after('<h2 style="color:deepskyblue;"><br><br>#target##企鹅物流#</h2>');
					}
					else{
						rn=true;
						$('h2').remove();
					}
				})
			})
  $("#s5").click(function(){
  $(".ck5").toggleClass("sca");
  $("section,.fleximg").toggleClass("over")
  $(".ck3,.ck4,.ck6,.Firstcolumn,.Thirdcolumn,.Fourthcolumn,.Fifthcolumn").toggleClass("dis");
  });
  
  $(function(){
				var rn=true;
				$('#s6').click(function(){
					if(rn){
						rn=false;
						$('#s6').after('<h2 style="color:deepskyblue;"><br><br>#谢拉格#</h2>');
					}
					else{
						rn=true;
						$('h2').remove();
					}
				})
			})
  $("#s6").click(function(){
  $(".ck6").toggleClass("sca");
  $("section,.fleximg").toggleClass("over")
  $(".ck3,.ck4,.ck5,.Firstcolumn,.Thirdcolumn,.Fourthcolumn,.Fifthcolumn").toggleClass("dis");
  });
  //第三列
  $(function(){
				var rn=true;
				$('#s7').click(function(){
					if(rn){
						rn=false;
						$('#s7').after('<h2 style="color:deepskyblue;"><br><br>#罗德岛##阿米娅#</h2>');
					}
					else{
						rn=true;
						$('h2').remove();
					}
				})
			})
  $("#s7").click(function(){
  $(".ck7").toggleClass("sca");
  $("section,.fleximg").toggleClass("over")
  $(".ck8,.Firstcolumn,.Secondcolumn,.Fourthcolumn,.Fifthcolumn").toggleClass("dis");
  });
  
  $(function(){
				var rn=true;
				$('#s8').click(function(){
					if(rn){
						rn=false;
						$('#s8').after('<h2 style="color:deepskyblue;"><br><br>#企鹅物流##能天使##作战中#</h2>');
					}
					else{
						rn=true;
						$('h2').remove();
					}
				})
			})
  $("#s8").click(function(){
  $(".ck8").toggleClass("sca");
  $("section,.fleximg").toggleClass("over")
  $(".ck7,.Firstcolumn,.Secondcolumn,.Fourthcolumn,.Fifthcolumn").toggleClass("dis");
  });
  //第四列
  $(function(){
				var rn=true;
				$('#s9').click(function(){
					if(rn){
						rn=false;
						$('#s9').after('<h2 style="color:deepskyblue;"><br><br>#罗德岛##集结#</h2>');
					}
					else{
						rn=true;
						$('h2').remove();
					}
				})
			})
  $("#s9").click(function(){
  $(".ck9").toggleClass("sca");
  $("section,.fleximg").toggleClass("over")
  $(".ck10,.ck11,.ck12,.Firstcolumn,.Secondcolumn,.Thirdcolumn,.Fifthcolumn").toggleClass("dis");
  });
  
  $(function(){
				var rn=true;
				$('#s10').click(function(){
					if(rn){
						rn=false;
						$('#s10').after('<h2 style="color:deepskyblue;"><br><br>#谢拉格##崖心#</h2>');
					}
					else{
						rn=true;
						$('h2').remove();
					}
				})
			})
  $("#s10").click(function(){
  $(".ck10").toggleClass("sca");
  $("section,.fleximg").toggleClass("over")
  $(".ck9,.ck11,.ck12,.Firstcolumn,.Secondcolumn,.Thirdcolumn,.Fifthcolumn").toggleClass("dis");
  });
  
  $(function(){
				var rn=true;
				$('#s11').click(function(){
					if(rn){
						rn=false;
						$('#s11').after('<h2 style="color:deepskyblue;"><br><br>#罗德岛##艾雅法拉#</h2>');
					}
					else{
						rn=true;
						$('h2').remove();
					}
				})
			})
  $("#s11").click(function(){
  $(".ck11").toggleClass("sca");
  $("section,.fleximg").toggleClass("over")
  $(".ck9,.ck10,.ck12,.Firstcolumn,.Secondcolumn,.Thirdcolumn,.Fifthcolumn").toggleClass("dis");
  });
  
  $(function(){
				var rn=true;
				$('#s12').click(function(){
					if(rn){
						rn=false;
						$('#s12').after('<h2 style="color:deepskyblue;"><br><br>#谢拉格##初雪#</h2>');
					}
					else{
						rn=true;
						$('h2').remove();
					}
				})
			})
  $("#s12").click(function(){
  $(".ck12").toggleClass("sca");
  $("section,.fleximg").toggleClass("over")
  $(".ck9,.ck10,.ck11,.Firstcolumn,.Secondcolumn,.Thirdcolumn,.Fifthcolumn").toggleClass("dis");
  });
  //第五列
  $(function(){
				var rn=true;
				$('#s13').click(function(){
					if(rn){
						rn=false;
						$('#s13').after('<h2 style="color:deepskyblue;"><br><br>#整合运动##塔露拉#</h2>');
					}
					else{
						rn=true;
						$('h2').remove();
					}
				})
			})
  $("#s13").click(function(){
  $(".ck13").toggleClass("sca");
  $("section,.fleximg").toggleClass("over")
  $(".ck14,.ck15,.ck16,.Firstcolumn,.Secondcolumn,.Thirdcolumn,.Fourthcolumn").toggleClass("dis");
  });
  
  $(function(){
				var rn=true;
				$('#s14').click(function(){
					if(rn){
						rn=false;
						$('#s14').after('<h2 style="color:deepskyblue;"><br><br>#源石##天灾#</h2>');
					}
					else{
						rn=true;
						$('h2').remove();
					}
				})
			})
  $("#s14").click(function(){
  $(".ck14").toggleClass("sca");
  $("section,.fleximg").toggleClass("over")
  $(".ck13,.ck15,.ck16,.Firstcolumn,.Secondcolumn,.Thirdcolumn,.Fourthcolumn").toggleClass("dis");
  });
  
  $(function(){
				var rn=true;
				$('#s15').click(function(){
					if(rn){
						rn=false;
						$('#s15').after('<h2 style="color:deepskyblue;"><br><br>#谢拉格##全员集结#</h2>');
					}
					else{
						rn=true;
						$('h2').remove();
					}
				})
			})
  $("#s15").click(function(){
  $(".ck15").toggleClass("sca");
  $("section,.fleximg").toggleClass("over")
  $(".ck13,.ck14,.ck16,.Firstcolumn,.Secondcolumn,.Thirdcolumn,.Fourthcolumn").toggleClass("dis");
  });
  
  $(function(){
				var rn=true;
				$('#s16').click(function(){
					if(rn){
						rn=false;
						$('#s16').after('<h2 style="color:deepskyblue;"><br><br>#龙门近卫局#</h2>');
					}
					else{
						rn=true;
						$('h2').remove();
					}
				})
			})
  $("#s16").click(function(){
  $(".ck16").toggleClass("sca");
  $("section,.fleximg").toggleClass("over")
  $(".ck13,.ck14,.ck15,.Firstcolumn,.Secondcolumn,.Thirdcolumn,.Fourthcolumn").toggleClass("dis");
  });



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
	$('.o').animate({ width:"0",height:"0"}, 1000);
	$('.load').fadeOut(1500);
});