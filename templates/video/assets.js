 $(document).ready(function(){
      $('<p id="the_lights" />\
         <ul id="switches">\
           <li><p id="turnoff">Lights Out</p></li>\
           <li><p id="soft">Soft Light</p></li>\
           <li><p id="turnon">Lights On</p></li>\
         </ul>').insertBefore('.informalfigure');

      $("#the_lights").fadeTo(1,0);
      document.getElementById("the_lights").style.display="none";

      $("#turnoff").click(function () {
      $("#the_lights").css({'display' : 'block'});
      $("#the_lights").fadeTo("slow",1);
      $(".informalfigure").fadeTo("slow",1);
      });
      $("#soft").click(function () {
      document.getElementById("the_lights").style.display="block";
      $("#the_lights").fadeTo("slow",0.8);
      $(".informalfigure").fadeTo("slow",0.8);
      });
      $("#turnon").click(function () {
      document.getElementById("the_lights").style.display="block";
      $("#the_lights").fadeTo("slow",0,function() {
      document.getElementById("the_lights").style.display="none";
      });
      $(".informalfigure").fadeTo("slow",1);
      });
      });
  
