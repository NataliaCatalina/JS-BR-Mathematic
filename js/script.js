$(document).ready(function(){
    $('#circle').click(function(){
    //  $('#leftPane').text("Area");
      $('#leftPane').html('<button class="btn btn-lg btn-primary m-3 text-light" id="area">Area</button>'+
      '<button class="btn btn-lg btn-primary m-3 text-light" id="circum"> Circumference </button>');

          // calcualting area of a circle
          // html will replace existing content
          // append will add to existing content
          $('#area').click(function(){
          console.log('area');
          $('#rightPane').html('<h1 class="text-danger">Circle </h1>')
          .append('<form>' +
          '<svg height="100" width="100">' +
          '<circle cx="50" cy="50" r="40" stroke="black" stroke-width="5" fill="#9E4EF5" />' +
          '</svg> <br> '+
          '<label class="mr-3 bg-secondary text-light p-2 h4" for="radiusInput">Enter radius of the circle:</label>'+
          '<input class="p-2 h4 border border-danger" id="radiusInput" type="number" > <br>' +
          '<button type="button" id="areaBtn" class="btn btn-lg p-2 bg-danger text-light font-weight-bold" > Area </button> ' +
          '</form>');

          $('#areaBtn').click(function(){
            var result = (parseInt($('#radiusInput').val())* parseInt($('#radiusInput').val())* 3.14).toFixed(2) ;

            console.log(result);
            $('#rightPane').html('<br> <h2 class="text-primary">Area of circle :' + result + ' </h2>')
          });

          });

        // calculating circumference of a circle
        $('#circum').click(function(){
          $('#rightPane').html('<h1>Circumference </h1>')
          .append('<form>' +
          '<svg height="100" width="100">' +
          '<circle cx="50" cy="50" r="40" stroke="black" stroke-width="5" fill="#9E4EF5" />' +
          '</svg> <br> '+
          '<label class="mr-3 bg-secondary text-light p-2 h4" for="radius2">Enter radius of the circle:</label>'+
          '<input class="p-2 h4 border border-danger" id="radius2" type="number" > <br>' +
          '<button type="button" id="circumBtn" class="btn btn-lg p-2 bg-danger text-light font-weight-bold" > Circumference</button> ' +
          '</form>');

          $('#circumBtn').click(function(){
            var result = (parseInt($('#radius2').val())* 2 * 3.14).toFixed(2) ;

            console.log(result);
            $('#rightPane').html('<br> <h2 class="text-primary">Circumference of circle :' + result + ' </h2>')
          });
        });
    });


}); //end of document.ready()
