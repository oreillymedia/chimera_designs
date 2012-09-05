 $(document).ready(function(){
      
      $("#lightsout").fadeTo(1,0);
      document.getElementById("lightsout").style.display="none";

      $("#turnoff").click(function () {
        $("#lightsout").css({'display' : 'block'});
        $("#lightsout").fadeTo("slow",1);
        $(".informalfigure").fadeTo("slow",1);
        });
      $("#soft").click(function () {
        document.getElementById("lightsout").style.display="block";
        $("#lightsout").fadeTo("slow",0.8);
        $(".informalfigure").fadeTo("slow",0.8);
        });
      $("#turnon").click(function () {
        document.getElementById("lightsout").style.display="block";
        $("#lightsout").fadeTo("slow",0,function() {
        document.getElementById("lightsout").style.display="none";
        });
      $(".informalfigure").fadeTo("slow",1);
      });
    });

