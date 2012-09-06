 $(document).ready(function(){
      $('<ul class="itemizedlist">\
           <li class="listitem"><p id="lights_out" class="turnoff">Lights Out</p></li>\
           <li class="listitem"><p id="soft_light" class="soft">Soft Light</p></li>\
           <li class="listitem"><p id="lights_on" class="turnon">Lights On</p></li>\
         </ul>').insertAfter('.lightsout');
      
      $(".turnoff").click(function () {
        $(".lightsout").css({'display' : 'block','background-color' : '#000'});
        });
      $(".soft").click(function () {
        $(".lightsout").css({'display' : 'block','background-color' : '#4F4F4F'});
        });
      $(".turnon").click(function () {
        $(".lightsout").css({'display' : 'none','background-color' : 'transparent'});
      });
    });




