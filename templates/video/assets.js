 $(document).ready(function(){
      
      $(".chapter").fadeTo(1,0);
      document.getElementsByClassName(".chapter").style.display="none";

      $("#turnoff").click(function () {
        $(".chapter").css({'display' : 'block'});
        $(".chapter").fadeTo("slow",1);
        $(".informalfigure").fadeTo("slow",1);
        });
      $("#soft").click(function () {
        document.getElementByClassName(".chapter").style.display="block";
        $(".chapter").fadeTo("slow",0.8);
        $(".informalfigure").fadeTo("slow",0.8);
        });
      $("#turnon").click(function () {
        document.getElementByClassName(".chapter").style.display="block";
        $(".chapter").fadeTo("slow",0,function() {
        document.getElementByClassName(".chapter").style.display="none";
        });
      $(".informalfigure").fadeTo("slow",0);
      });
    });

