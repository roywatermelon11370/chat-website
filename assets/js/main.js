$(document).ready(function() {
    $(window).on('scroll', function() {
        if($(window).scrollTop()) {
            $('#index-navbar').addClass('bg-gray-800');
        } else {
            $('#index-navbar').removeClass('bg-gray-800');
        }
    });

    //sidebar
    $("#sidebar > a").click(function(event) {
      event.preventDefault(); 
      $("#sidebar a").removeClass('text-gray-900');
      $(this).addClass('text-gray-900');
        

      $("#content").load(this.href, function() {});
    });

    // dropdown
    dropdown = function(x) {
        $(x).toggleClass('hidden');
        $(x).toggleClass('block');
        console.log('clicked');
    }
    window.onclick = function(event) {
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



      // bom remove 
      
});