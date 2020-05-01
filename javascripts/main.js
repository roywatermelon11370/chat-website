$(document).ready(function () {
  // navbar
  $(window).on('scroll', function () {
    if ($(window).scrollTop()) {
      $('#navbar').addClass('shadow');
    } else {
      $('#navbar').removeClass('shadow');
    }
  });

  // backtotop
  $('#backToTop').click(function (e) {
    e.preventDefault();
    $('html,body').stop().animate({
      scrollTop: 0
    }, 300, 'swing')
  });

  // sidebar 
  sidebarToggle = function() {
    $('#sidebar').toggleClass('sidebar-active').toggleClass('sidebar-hide');
    $('#bg-dark').toggleClass('hidden').toggleClass('block');
  }

  $('#bg-dark').click(function() {
    sidebarToggle();
  });

  $('.h-screen-nav').css('height', function(){
    var win = $(window).height();
    var navv = $('#navbar').height();
    var siz = win - navv;
    return siz;
  });

});