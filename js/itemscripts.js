$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  if(wScroll > $('.container').offset().top - ($(window).height() / 1.2)) {

  $('.container figure').each(function(i){

    setTimeout(function(){
      $('.container figure').eq(i).addClass('is-showing');
    }, 150 * (i+1));
  });

};
});
function openInNewTab(url) {
 var win = window.open(url, '_blank');
 win.focus();
}
var inputeditems = $("#iteminput").val();
function additemcart(item,cost){
  var inputeditems = parseFloat($("#iteminput").val());
  $(".cartitems").append("<l1>"+inputeditems+" kgs of "+item+"</li>")
  $(".cartitems").append("<li> cost:ksh "+(inputeditems*cost).toFixed(1)+"</li>")
}
function additemcart1(item,cost){
  var inputeditems1 = parseFloat($("#iteminput1").val());
  $(".cartitems").append("<l1>"+inputeditems1+" kgs of "+item+"</li>")
  $(".cartitems").append("<li> cost:ksh "+(inputeditems1*cost).toFixed(1)+"</li>")
}
function additemcart2(item,cost){
  var inputeditems2 = parseFloat($("#iteminput2").val());
  $(".cartitems").append("<l1>"+inputeditems2+" kgs of "+item+"</li>")
  $(".cartitems").append("<li> cost:ksh "+(inputeditems2*cost).toFixed(1)+"</li>")
}
function additemcart3(item,cost){
  var inputeditems3 = parseFloat($("#iteminput3").val());
  $(".cartitems").append("<l1>"+inputeditems3+" kgs of "+item+"</li>")
  $(".cartitems").append("<li> cost:ksh "+(inputeditems3*cost).toFixed(1)+"</li>")
}
function additemcart4(item,cost){
  var inputeditems4 = parseFloat($("#iteminput4").val());
  $(".cartitems").append("<l1>"+inputeditems4+" kgs of "+item+"</li>")
  $(".cartitems").append("<li> cost:ksh "+(inputeditems4*cost).toFixed(1)+"</li>")
}
function additemcart5(item,cost){
  var inputeditems5 = parseFloat($("#iteminput5").val());
  $(".cartitems").append("<l1>"+inputeditems5+" kgs of "+item+"</li>")
  $(".cartitems").append("<li> cost:ksh "+(inputeditems5*cost).toFixed(1)+"</li>")
}
function additemcart6(item,cost){
  var inputeditems6 = parseFloat($("#iteminput6").val());
  $(".cartitems").append("<l1>"+inputeditems6+" kgs of "+item+"</li>")
  $(".cartitems").append("<li> cost:ksh "+(inputeditems6*cost).toFixed(1)+"</li>")
}
function additemcart7(item,cost){
  var inputeditems7 = parseFloat($("#iteminput7").val());
  $(".cartitems").append("<l1>"+inputeditems7+" kgs of "+item+"</li>")
  $(".cartitems").append("<li> cost:ksh "+(inputeditems7*cost).toFixed(1)+"</li>")
}
function additemcart8(item,cost){
  var inputeditems2 = parseFloat($("#iteminput8").val());
  $(".cartitems").append("<l1>"+inputeditems8+" kgs of "+item+"</li>")
  $(".cartitems").append("<li> cost:ksh "+(inputeditems8*cost).toFixed(1)+"</li>")
}
$(".up").on('click',function(){
      $(".incdec input").val(parseInt($(".incdec input").val())+1);
  });

  $(".down").on('click',function(){
      $(".incdec input").val(parseInt($(".incdec input").val())-1);
  });
$(document).ready(function(){
});
