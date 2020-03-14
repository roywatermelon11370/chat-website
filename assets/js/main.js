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

  // dropdown
  dropdown = function (x) {
    $(x).toggleClass('hidden');
    $(x).toggleClass('block');
    console.log('clicked');
  }
  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('block')) {
          openDropdown.classList.remove('block');
          openDropdown.classList.add('hidden');
        }
      }
    }
  }

});