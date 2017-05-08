



$(document).ready(function() {


  $(document).on('click', 'a', function(event){
      event.preventDefault();
      $('html, body').animate({ //Smooth scroll to anchor link
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
  });


    //Show info on click
    $("#pcbutton").click(function(){
      $("#age_text").text("The avarage gamer is 35 years old.");
      $("#age_text").css({color: '#662d91'});
      $("#agegraph").animate({
          height: 'toggle'
      });
    });

    $("#timebutton").click(function(){
      $("#time_text").text("Action is the most popular genre.");
      $("#time_text").css({color: '#92278f'});
      $("#timegraph").animate({
            height: 'toggle'
          });
          $("#timegraph2").animate({
            height: 'toggle'
          });
      });

  $("#genderbutton").click(function() {
    $("#gender_text").text("The gamer is slightly more male.");
    $("#gender_text").css({color: '#ec008c'});
    $("#gender_img").attr('src',"img/gender2.png");
    $("#gender_male").animate({
          height: 'toggle',
        });
    $("#gender_female").animate({
          height: 'toggle',
        });

  });

  $("#likesbutton").click(function() {
    $("#like_text").text("Top 10 best selling games of all time.");
    $("#like_text").css({color: '#ec008c'});
    $("#top_10").animate({
          height: 'toggle'
        });

  });

});
