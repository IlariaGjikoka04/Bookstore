document.addEventListener('DOMContentLoaded', function () {
  const searchForm = document.querySelector('form[role="search"]');
  

  const modals = document.querySelectorAll('#bookModal');

  const bookModals = {
      "Funny Story": {
          title: "Funny Story",
          img: "books/Funny Story.jpg",
          summary: "Emily Henry newest summer romance, is about two people -- Daphne and Miles -- who move in together after their childhood-best-friend exes, Peter and Petra, decide to dump them and marry each other instead.",
          price: "$10"
      },
      
  };

  searchForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const searchInput = searchForm.querySelector('input[type="search"]').value;
      
      if (bookModals[searchInput]) {

          const book = bookModals[searchInput];
          document.getElementById('bookImage').src = book.img;
          document.getElementById('bookSummary').textContent = book.summary;
          document.getElementById('bookPrice').textContent = `Price: ${book.price}`;
          
          new bootstrap.Modal(document.getElementById('bookModal')).show();
      } else {
          alert('No book found with that title.');
      }
  });
});

$('#bookModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); 
    var title = button.data('title');
    var img = button.data('img');
    var summary = button.data('summary');
    var price = button.data('price');
    
    var modal = $(this);
    modal.find('.modal-title').text(title);
    modal.find('#bookImage').attr('src', img);
    modal.find('#bookSummary').text(summary);
    modal.find('#bookPrice').text('Price: ' + price);
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
