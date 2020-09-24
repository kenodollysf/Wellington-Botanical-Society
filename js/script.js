console.log('js');
  $('#events-page, #articles-page, #identify-page, #membership-page').hide();

  $(document).ready(function(){

    $('#home').click(function(){
      $('#home-page').show();
      $('#events-page').hide();
      $('#articles-page').hide();
      $('#identify-page').hide();
      $('#membership-page').hide();
    });
    
    $('#events').click(function(){
      $('#events-page').show();
      $('#home-page').hide();
      $('#articles-page').hide();
      $('#identify-page').hide();
      $('#membership-page').hide();
    });

    $('#articles').click(function(){
      $('#articles-page').show();
      $('#home-page').hide();
      $('#events-page').hide();
      $('#identify-page').hide();
      $('#membership-page').hide();
    });

    $('#identify').click(function(){
      $('#identify-page').show();
      $('#home-page').hide();
      $('#events-page').hide();
      $('#articles-page').hide();
      $('#membership-page').hide();
    });

    $('#membership').click(function(){
      $('#membership-page').show();
      $('#home-page').hide();
      $('#events-page').hide();
      $('#articles-page').hide();
      $('#identify-page').hide();
    });



  });
