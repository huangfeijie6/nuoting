$(function() {



$('.fixRbox .gotop').on('click', function(){
    $('html,body').animate({scrollTop : 0}, 500);
    return false;
});




$(".banner").slide({titCell:'.hd ul',mainCell:'.bd ul',autoPlay:true,autoPage:true,trigger:'click',effect:'leftLoop',prevCell:".banner_prev",nextCell:".banner_next",delayTime:1000,interTime: 5000,});
$('.ipro_slide .sslide').slide({titCell:'.hd ul', mainCell:'.bd ul', autoPage:true, effect:'left', trigger:'click', vis:3});
$('.ipro_slide').slide({titCell:'.parhd ul li', mainCell:'.parbd', trigger:'click'});
$('.prov_slide').slide({titCell:'.hd ul li', mainCell:'.bd ul', effect:'left', trigger:'click', prevCell:".sprev", nextCell:".snext"});
$('.prov_slide .sslide').slide({mainCell:'ul', effect:'left', trigger:'click', vis:5, prevCell:".sprev", nextCell:".snext"});
$('.application_slide').slide({mainCell:'.bd ul', effect:'left', trigger:'click', prevCell:".aprev", nextCell:".anext"});
$('.net_slide').slide({mainCell: '.bd ul', trigger:'click', effect:'top', vis:4, prevCell:".Nprev", nextCell:".Nnext",});


// var ipro_li = $('.ipro_box .list_box');
// $(ipro_li).on('mouseenter', function(){
//     var img = $(this).find('.item .img_box img');
//     var src = $(img).attr('srco');
//     $(img).attr('src', src);
// });
// $(ipro_li).on('mouseleave', function(){
//     var img = $(this).find('.item .img_box img');
//     var src = $(img).attr('srcd');
//     $(img).attr('src', src);
// });




// if($('.iabout').length > 0){
//    var offset_top = $('.iabout').offset().top - 100;
//     $('.cur').on('click', function(){
//         $('body,html').animate({scrollTop: offset_top}, 500);
//     }); 
// }



// var net_box = $('.net_box');
// var gettext = $('.gettext');
// var list = $('.entli');
// var lx = $(list).width() / 2;
// var ly = ($(list).height() + 25) /2;
// $(net_box).on('dblclick', function(){
//     $('.gettext').show();
//     $('.entli').show();
//     setedit();
// });



// function setedit(){
//     $(net_box).on('click', function(e){  
//         var varpositionX =e.pageX-$(this).offset().left; //获取当前鼠标相对img的X坐标  
//         var varpositionY =e.pageY-$(this).offset().top; //获取当前鼠标相对img的Y坐标
//         var nx = (varpositionX - lx).toFixed(2);
//         var ny = (varpositionY - ly).toFixed(2);
//         $(list).css({
//         'left' : nx +'px',
//         'top' : ny +'px',
//         });
//         $('.gettext .xt').val(nx);
//         $('.gettext .yt').val(ny);

//      });
// }






$("[data-fancybox]").fancybox({
    buttons: [
        "zoom",
        "download",
        "close"
    ],
    animationEffect: "fade",
});

});