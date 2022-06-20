$(function () {
  /*二级导航*/
  $(".nav_2").hide();
  $(".n2").mouseenter(function () {
    $(".n_1").show(200)
  })
  $(".n2").mouseleave(function () {
    $(".n_1").hide(500)
  })
  /**/
  $(".n3").mouseenter(function () {
    $(".n_2").show(200)
  })
  $(".n3").mouseleave(function () {
    $(".n_2").hide(500)
  })
  /**/
  $(".n4").mouseenter(function () {
    $(".n_3").show(200)
  })
  $(".n4").mouseleave(function () {
    $(".n_3").hide(500)
  })
  /**/
  $(".n5").mouseenter(function () {
    $(".n_4").show(200)
  })
  $(".n5").mouseleave(function () {
    $(".n_4").hide(500)
  })

  /*第三区块hover事件*/
  $(".hide").hide()
  $(".t").hide()
  $(".three .box1").mouseenter(function () {
    $(".h1").show()
    $(".s1").hide()
    $(".t1").show()
  })
  $(".three .box1").mouseleave(function () {
    $(".h1").hide()
    $(".s1").show()
    $(".t1").hide()
  })

  $(".three .box2").mouseenter(function () {
    $(".h2").show()
    $(".s2").hide()
    $(".t2").show()
  })
  $(".three .box2").mouseleave(function () {
    $(".h2").hide()
    $(".s2").show()
    $(".t2").hide()
  })

  $(".three .box3").mouseenter(function () {
    $(".h3").show()
    $(".s3").hide()
    $(".t3").show()
  })
  $(".three .box3").mouseleave(function () {
    $(".h3").hide()
    $(".s3").show()
    $(".t3").hide()
  })

  $(".three .box4").mouseenter(function () {
    $(".h4").show()
    $(".s4").hide()
    $(".t4").show()
  })
  $(".three .box4").mouseleave(function () {
    $(".h4").hide()
    $(".s4").show()
    $(".t4").hide()
  })
})