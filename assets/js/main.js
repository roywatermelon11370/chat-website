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

});