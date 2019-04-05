$(document).ready(function(){
      $("#pincode").mouseenter(function(){
        $('#pincode').html("xxxx");
      });

      $("#pincode").mouseleave(function(){
        $('#pincode').html("pincode");
      });

      $("#zipper").mouseenter(function(){
        $("#z").animate({top:"8px"}, "slow");
        $("#i").animate({top:"-8px"}, "slow");
        $("#p1").animate({top:"15px"}, "slow");
        $("#p2").animate({top:"-15px"}, "slow");
        $("#e").animate({top:"20px"}, "slow");
        $("#r").animate({top:"-20px"}, "slow");
      });

      $("#zipper").mouseleave(function(){
        $("#z").animate({top:"0px"}, "500");
        $("#i").animate({top:"0px"}, "500");
        $("#p1").animate({top:"0px"}, "500");
        $("#p2").animate({top:"0px"}, "500");
        $("#e").animate({top:"0px"}, "500");
        $("#r").animate({top:"0px"}, "500");
      });
       var sw=false;
      $("#switch").click(function(){
         if(sw==false){
          $(this).css("transform","skewX(-20deg)");
          sw=true;
        }else{

          $(this).css("transform","skewX(20deg)");
          sw=false;
        }

      });

      $("#sound").mouseenter(function(){

       $("#ss").animate({"font-size":"40%"}, "400");
       $("#so").animate({"font-size":"60%"}, "900");
       $("#su").animate({"font-size":"80%"}, "1000");
       $("#sn").animate({"font-size":"100%"}, "1300");
       $("#sd").animate({"font-size":"120%"}, "1600");
      });

      $("#sound").mouseleave(function(){

       $("#ss").animate({"font-size":"100%"}, "400");
       $("#so").animate({"font-size":"100%"}, "900");
       $("#su").animate({"font-size":"100%"}, "1000");
       $("#sn").animate({"font-size":"100%"}, "1300");
       $("#sd").animate({"font-size":"100%"}, "1600");
      });

     $("#touch").mouseenter(function(){

       $("#to").animate({"font-size": "80%"}, "400");
       $("#tu").animate({"font-size": "60%"}, "400");
       $("#tc").animate({"font-size": "80%"}, "400");
     });

     $("#touch").mouseleave(function(){

       $("#to").animate({"font-size": "100%"}, "400");
       $("#tu").animate({"font-size": "100%"}, "400");
       $("#tc").animate({"font-size": "100%"}, "400");
     });

     $(".wort").eq("0").click(function(){
        $("#wort2").css("border-width","3px");
        $("#wort2").html('"push & pull, doorknop , cardoor up, safe, key, automatic, revolving, eyescan, push-button,pin, sensor, fingerprint, ID-Card, pawl, facescan"');
     });

     $(".wort").eq("1").click(function(){
       $("#wort2").css("border-width","3px");
        $("#wort2").html('"clasp, zipper, button, velcro fastener, lacing, shank button"');
     });

     $(".wort").eq("2").click(function(){
       $("#wort2").css("border-width","3px");
        $("#wort2").html('"vacuum, cover, clip, sticky tape, hook sth., magnetic catch"');
     });

     $(".wort").eq("3").click(function(){
       $("#wort2").css("border-width","3px");
        $("#wort2").html('"pull, press, soundsensor, rotary switch, sensor"');
     });
    $(".wort").eq("4").click(function(){
      $("#wort2").css("border-width","3px");
        $("#wort2").html('"childlock, cover, lid, cork, lock, screw cap, clip"');
    });
    $(".wort").eq("5").click(function(){
      $("#wort2").css("border-width","3px");
        $("#wort2").html('"recognition of speechfingerprint, facescan, fold it open, pin"');
    });


    $(".box").eq(0).mouseenter(function(){
      var oldSrc = 'gif/bag.png';
      var newSrc = 'gif/bag.gif';
      $('img[src="' + oldSrc + '"]').attr('src', newSrc);
    });

    $(".box").eq(0).mouseleave(function(){
      var newSrc = 'gif/bag.png';
      var oldSrc = 'gif/bag.gif';
      $('img[src="' + oldSrc + '"]').attr('src', newSrc);
    });

    $(".box").eq(1).mouseenter(function(){
      var oldSrc = 'gif/bottle.png';
      var newSrc = 'gif/bottle.gif';
      $('img[src="' + oldSrc + '"]').attr('src', newSrc);
    });

    $(".box").eq(1).mouseleave(function(){
      var newSrc = 'gif/bottle.png';
      var oldSrc = 'gif/bottle.gif';
      $('img[src="' + oldSrc + '"]').attr('src', newSrc);
    });

    $(".box").eq(2).mouseenter(function(){
      var oldSrc = 'gif/window.png';
      var newSrc = 'gif/window.gif';
      $('img[src="' + oldSrc + '"]').attr('src', newSrc);
    });

    $(".box").eq(2).mouseleave(function(){
      var newSrc = 'gif/window.png';
      var oldSrc = 'gif/window.gif';
      $('img[src="' + oldSrc + '"]').attr('src', newSrc);
    });

    $(".box").eq(3).mouseenter(function(){
      var oldSrc = 'gif/door.png';
      var newSrc = 'gif/door.gif';
      $('img[src="' + oldSrc + '"]').attr('src', newSrc);
    });

    $(".box").eq(3).mouseleave(function(){
      var newSrc = 'gif/door.png';
      var oldSrc = 'gif/door.gif';
      $('img[src="' + oldSrc + '"]').attr('src', newSrc);
    });

    $("#box3").mouseenter(function(){
      var oldSrc = 'gif/chips.png';
      var newSrc = 'gif/chips.gif';
      $('img[src="' + oldSrc + '"]').attr('src', newSrc);
    });

    $("#box3").mouseleave(function(){
      var newSrc = 'gif/chips.png';
      var oldSrc = 'gif/chips.gif';
      $('img[src="' + oldSrc + '"]').attr('src', newSrc);
    });

