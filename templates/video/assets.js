 $(document).ready(function(){
        $(".turnoff").click(function () {
        $(".lightsout").css({'background-color' : '#000','display' : 'block'});
        });
      $(".soft").click(function () {
        $(".lightsout").css({'background-color' : '#4F4F4F','display' : 'block'});
        });
      $(".turnon").click(function () {
        $(".lightsout").css({'background-color' : 'transparent','display' : 'none'});
      });
    });




