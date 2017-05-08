$(document).ready(function() {


  $(document).on('click', 'a', function(event){
      event.preventDefault();
      $('html, body').animate({ //Smooth scroll to anchor link
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
  });


    //Show info on click
    $("#pcbutton").click(function(){
      $("#age_text").text("The avarage gamer is 35 years old."); //Change info text on click.
      $("#age_text").css({color: '#662d91'}); //Change info text color on click.
      $("#agegraph").animate({ //toggle info graph on click.
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
    $("ol").append("<li>Tetris</li>",
    "<li>Minecraft</li>",
    "<li>Wii Sports</li>",
    "<li>Grand Theft Auto V</li>",
    "<li>Super Mario Bros</li>",
    "<li>Mario Kart Wii</li>",
    "<li>Wii Sports Resorts</li>",
    "<li>Pokemon Red, Green & Blue</li>",
    "<li>New Super Mario Bros</li>",
    "<li>The Elder Scrolls V: Skyrim</li>");
    $("#top_10").animate({
          height: 'toggle'
        });

  });

});
