 var index=0;
 var img_len=$('.ban ul li').length;
 var img_w=$('.ban ul li img').width();

 $('.ban p span').eq(index).addClass('sp_act');
 $('.ban ul').width(img_len*img_w).css('left',-(index+1)*img_w+'px');

  function mov(){

   	$('.ban ul').animate({
  		left: -(index+1)*img_w+'px',},
  		500, function() {
       if($('.ban ul').css('left')=='-'+(img_len-1)*img_w+'px'){
       	 $('.ban ul').css('left','-'+img_w+'px');
       }
  	});
    if(index==(img_len-2)){
        index=0;
       }
       setButs();
  }

 function setButs(){
       $('.ban p span').eq(index).addClass('sp_act').siblings().removeClass('sp_act');
 }

$('.ban p span').click(function() {
  index=$(this).index();
  mov();
  setButs();
});

var t='';
$('.ban').hover(function() {
  clearInterval(t);
},function() {
 t=setInterval(function(){index++;mov()},3000)
});
$('.ban').mouseout();




