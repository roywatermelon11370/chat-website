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
  sidebar = function() {
    $('#sidebar').toggleClass('sidebar-active').toggleClass('sidebar-hide');
    $('#bg-dark').toggleClass('hidden').toggleClass('block');
  }
  window.onclick = function (event) {
    if (!event.target.matches('#sidebar')) {
      var sidebar = $("#sidebar");
      var i;
      for (i = 0; i < sidebar.length; i++) {
        if ($('#sidebar').hasClass('sidebar-active')) {
          $('#sidebar').removeClass('sidebar-active');
          $('#bg-dark').removeClass('block')
          $('#sidebar').addClass('sidebar-hide');
          $('#bg-dark').addClass('hidden')
        }
      }
    }
  }

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