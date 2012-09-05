 $(document).ready(function(){
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




