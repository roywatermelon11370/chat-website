$(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(window).scrollTop()) {
      $('#navbar').addClass('border-b').addClass('border-gray-200');
    } else {
      $('#navbar').removeClass('border-b').removeClass('border-gray-200');
    }
  });

  // navbtn 
  $('#backToTop').click(function (e) {
    e.preventDefault();
    let target = $(this).attr('href');
    let position = $(target).offset().top;
    $('html,body').stop().animate({
      scrollTop: position
    }, 500, 'swing')
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