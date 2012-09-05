 $(document).ready(function(){
        $(".turnoff").click(function () {
        $("body").css({'background-color' : 'black'});
        $("body").fadeTo("slow",1);
        });
      $(".soft").click(function () {
        $("body").css({'background-color' : 'black'});
        $("body").fadeTo("slow",0.8);
        });
      $(".turnon").click(function () {
        $("body").css({'background-color' : 'transparent'});
        $("body").fadeTo("slow",0);
      });
    });




