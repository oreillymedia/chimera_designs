 $(document).ready(function(){
        $(".turnoff").click(function () {
        $(".lightsout").show();
        $(".lightsout").css({'background-color' : '#000'});
        });
      $(".soft").click(function () {
        $(".lightsout").show();
        $(".lightsout").css({'background-color' : '#4F4F4F'});
        });
      $(".turnon").click(function () {
        $(".lightsout").css({'background-color' : 'transparent'});
        $(".lightsout").hide();
      });
    });




