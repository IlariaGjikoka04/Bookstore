document.addEventListener("DOMContentLoaded", function() {
  const readMoreLinks = document.querySelectorAll(".read-more");

  readMoreLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const moreText = this.closest('.card-body').querySelector(".more-text");
      if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        this.textContent = "Read Less";
      } else {
        moreText.style.display = "none";
        this.textContent = "Read More";
      }
    });
  });
});
  $(document).ready(function () {
      $('#bookModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); 
        var title = button.data('title'); 
        var img = button.data('img');
        var price = button.data('price');
        
        var modal = $(this);
        modal.find('.modal-title').text(title);
        modal.find('#bookImage').attr('src', img);
        modal.find('#bookPrice').text('Çmimi: ' + price);
      });
    });
    $(document).ready(function() {
        $('#keepShoppingBtn').on('click', function() {
          $('.modal-header .close').click();
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