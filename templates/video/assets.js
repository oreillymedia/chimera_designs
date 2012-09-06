 $(document).ready(function(){
      $('<p class="lightsout" />\
         <ul class="itemizedlist">\
           <li class="listitem"><p id="lights_out" class="turnoff">Lights Out</p></li>\
           <li class="listitem"><p id="soft_light" class="soft">Soft Light</p></li>\
           <li class="listitem"><p id="lights_on" class="turnon">Lights On</p></li>\
         </ul>').insertBefore('.informalfigure');
      
      $(".turnoff").click(function () {
        $(".lightsout").css({'display' : 'block'});
        $(".lightsout").fadeTo("slow",1);
        });
      $(".soft").click(function () {
        $(".lightsout").css({'display' : 'block'});
        $("#the_lights").fadeTo("slow",0.8);
        });
      $(".turnon").click(function () {
        $(".lightsout").css({'display' : 'none'});
      });
    });




