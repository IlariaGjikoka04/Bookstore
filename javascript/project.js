 $(document).ready(function() {
        let slideIndex = 0;
        const slides = $(".photoSlides");
        const dots = $(".photo-dot");
      
        function showSlides() {
          slides.hide();
          dots.removeClass("photo-active");
          slideIndex = (slideIndex + 1) % slides.length;
          slides.eq(slideIndex).show();
          dots.eq(slideIndex).addClass("photo-active");
        }
      
        dots.click(function() {
          slideIndex = $(this).index();
          showSlides();
        });
      
        showSlides(); // Initial call to display the first slide
        setInterval(showSlides, 10000); // Change image every 5 seconds
      });
      $(document).ready(function(){
            $('.card').click(function(event) {
                event.stopPropagation();
            });
        });


$(document).ready(function() {
    $('#buyBtn').on('click', function() {
      $('#buyMessage').show();
    });

    $('#bookModal').on('hidden.bs.modal', function () {
      $('#buyMessage').hide();
    });
  });
     document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        if (this.checkValidity()) {
            document.getElementById('successMessage').style.display = 'block';

        }
    }); 
    