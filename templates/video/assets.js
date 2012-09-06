 $(document).ready(function(){
      $('<p class="lightsout" />\
         <ul>\
           <li><p class="turnoff">Lights Out</p></li>\
           <li><p class="soft">Soft Light</p></li>\
           <li><p class="turnon">Lights On</p></li>\
         </ul>').insertBefore('.informalfigure');
      
      $(".turnoff").click(function () {
        $(".lightsout").css({'display' : 'block', 'background-color' : '#000', 'opacity' : '1', '-webkit-transition' : 'background-color 0.5s'});
        });
      $(".soft").click(function () {
        $(".lightsout").css({'display' : 'block', 'background-color' : '#000', 'opacity' : '0.85'});
        });
      $(".turnon").click(function () {
        $(".lightsout").css({'display' : 'none', 'background-color' : 'transparent'});
      });
    });




