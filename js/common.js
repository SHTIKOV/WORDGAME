(function() {

  function set_cookie( name, value, exp_y, exp_m, exp_d, path, domain, secure ) {
    var cookie_string = name + "=" + escape ( value );
   
    if ( exp_y )
    {
      var expires = new Date ( exp_y, exp_m, exp_d );
      cookie_string += "; expires=" + expires.toGMTString();
    }
   
    if ( path )
          cookie_string += "; path=" + escape ( path );
   
    if ( domain )
          cookie_string += "; domain=" + escape ( domain );
    
    if ( secure )
          cookie_string += "; secure";
    
    document.cookie = cookie_string;
  }
  function get_cookie( cookie_name ) {
    var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
   
    if ( results )
      return ( unescape ( results[2] ) );
    else
      return null;
  }
  /* -BEGIN- функция регистрации комманд */
  function register_teams() {
    $('.teams').show('slow');
    $('#name_first_team').append( $('#first_team').val() );
    $('#name_second_team').append( $('#second_team').val() );
    $('#name_first_team').show('slow');
    $('#name_second_team').show('slow');
    $('.parent').hide('slow');
    $('#hi_teams').show('slow');
    $('#begin_game').show('slow');
    $('#continue_game').hide('slow');
  }
  /* -END- функция регистрации комманд */

  /* -BEGIN- функция начала игры */
  function begin_first_team_game() {
    var time = 30;

    $('.word-item').removeAttr('style');
    $('.teams .second-team').removeClass('active-team');
    $('.teams .first-team').addClass('active-team');
    set_cookie('team', '1');
    get_random_word();
    $('#timer').show('slow');
    $('#game_body').show('slow');
    $('#begin_game').hide('slow');
    $('#continue_game').hide('slow');
    $('#hi_teams').hide('slow');
    
    var button = document.getElementById('timer');
    button.disabled = true;
    button.innerHTML = time;
    var interval_id = setInterval(function() {
      time--;
      if (time != -1) {
        button.innerHTML = time;
      } else {
        clearInterval(interval_id);
        button.disabled = false;
      }
      if (time == 0) {
        $('#game_body').hide('slow');
        $('#continue_game').show('slow');
        if (window.first_team.point >= 30) {
          $('body').html('<h1>Победила первая команда!</h1><button onclick="location.reload();">Играть снова</button>');
        }
        if (window.second_team.point >= 30) {
          $('body').html('<h1>Победила вторая команда!</h1><button onclick="location.reload();">Играть снова</button>');
        }
      }
    }, 1000);
  }
  function begin_second_team_game() {
    var time = 30;

    $('.word-item').removeAttr('style');
    $('.teams .first-team').removeClass('active-team');
    $('.teams .second-team').addClass('active-team');
    set_cookie('team', '2');
    get_random_word();
    $('#timer').show('slow');
    $('#game_body').show('slow');
    $('#begin_game').hide('slow');
    $('#continue_game').hide('slow');
    $('#hi_teams').hide('slow');

    var button = document.getElementById('timer');
    button.disabled = true;
    button.innerHTML = time;
    var interval_id = setInterval(function() {
      time--;
      if (time != -1) {
        button.innerHTML = time;
      } else {
        clearInterval(interval_id);
        button.disabled = false;
      }
      if (time == 0) {
        $('#game_body').hide('slow');
        $('#continue_game').show('slow');
        if (window.second_team.point >= 30) {
          $('body').html('<h1>Победила вторая команда!</h1><button onclick="location.reload();">Играть снова</button>')

        }
        if (window.first_team.point >= 30) {
          $('body').html('<h1>Победила первая команда!</h1><button onclick="location.reload();">Играть снова</button>')
        }
      }
    }, 1000);
  }
  /* -END- функция начала игры */

  /* -BEGIN- функция парсера файла */
  function getXmlHttp() {
    var xmlhttp;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
  }
  /* -END- функция парсера файла */

  /* -BEGIN- парсим базу слов из файла */
  var xmlhttp = getXmlHttp();
  xmlhttp.open('GET', 'word-base/word-base.json', false);
  xmlhttp.send(null);
  if (xmlhttp.status == 200) {
    var str = xmlhttp.responseText;
    var elm = str.replace (/\r/g, '').split ('\n');
    for (var W = new Array (), j = l = 0; j < elm.length; j++) {
      W [j] = new Array ();
      for (var k = 0; k < 10; k++) W [j] [k] = elm [l++];
    }
    //console.log(elm[Math.floor(Math.random() * elm.length)]);
  }
  /* -END- парсим базу слов из файла */

  /* -BEGIN- рандомное получение слов */
  function get_random_word() {
    $('#game_body>div').each(function() {
      $(this).removeAttr("style");
    });
    $('#item-1').text(elm[Math.floor(Math.random() * elm.length)]);
    $('#item-2').text(elm[Math.floor(Math.random() * elm.length)]);
    $('#item-3').text(elm[Math.floor(Math.random() * elm.length)]);
    $('#item-4').text(elm[Math.floor(Math.random() * elm.length)]);
    $('#item-5').text(elm[Math.floor(Math.random() * elm.length)]);
    $('#item-6').text(elm[Math.floor(Math.random() * elm.length)]);
    $('#item-7').text(elm[Math.floor(Math.random() * elm.length)]);
    $('#item-8').text(elm[Math.floor(Math.random() * elm.length)]);
    $('#item-9').text(elm[Math.floor(Math.random() * elm.length)]);
    $('#item-10').text(elm[Math.floor(Math.random() * elm.length)]);
    $('#item-11').text(elm[Math.floor(Math.random() * elm.length)]);
    $('#item-12').text(elm[Math.floor(Math.random() * elm.length)]);
    $('#item-13').text(elm[Math.floor(Math.random() * elm.length)]);
    $('#item-14').text(elm[Math.floor(Math.random() * elm.length)]);
    $('#item-15').text(elm[Math.floor(Math.random() * elm.length)]);
    $('#item-16').text(elm[Math.floor(Math.random() * elm.length)]);
    $('#item-17').text(elm[Math.floor(Math.random() * elm.length)]);
    $('#item-18').text(elm[Math.floor(Math.random() * elm.length)]);
    $('#item-19').text(elm[Math.floor(Math.random() * elm.length)]);
    $('#item-20').text(elm[Math.floor(Math.random() * elm.length)]);
  }
  /* -END- рандомное получение слов */

  $( document ).ready(function() {
    /* -BEGIN- скрываем все не нужные элементы при загрузке страницы */
    $('.teams').hide();
    $('#hi_teams').hide();
    $('#name_first_team').hide();
    $('#name_second_team').hide();
    $('#begin_game').hide();
    $('#continue_game').hide();
    $('#game_body').hide();

    /* -END- скрываем все не нужные элементы при загрузке страницы */

    /* -BEGIN- при клике на кнопку регистрации комманд */
    $( "#register_teams" ).click(function() {
      register_teams();
      window.first_team = {
        name: $('#first_team').val(),
        point: 0,
      }
      window.second_team = {
        name: $('#second_team').val(),
        point: 0,
      }
      $('#point_first_team').text(window.first_team.point);
      $('#point_second_team').text(window.second_team.point);
    });
    /* -END- при клике на кнопку регистрации комманд */

    /* -BEGIN- при клике на кнопку начало игры */
    $( "#begin_game" ).click(function() {
      begin_first_team_game();
    });
    $( "#continue_game" ).click(function() {
      if (get_cookie('team') == '2') {
        begin_first_team_game();
      } else if (get_cookie('team') == '1') {
        begin_second_team_game();
      } else {
        begin_first_team_game();
      }
    });
    $( ".word-item" ).click(function() {
      $(this).css({
        'opacity': '0',
      });
      $(this).prop('disabled',true);
      if (get_cookie('team') == '2') {
        window.second_team.point = window.second_team.point + 1;
        $('#point_second_team').text(window.second_team.point);
      }
      if (get_cookie('team') == '1') {
        window.first_team.point = window.first_team.point + 1;
        $('#point_first_team').text(window.first_team.point);
      }
    });
    /* -END- при клике на кнопку начало игры */
  });
})();
