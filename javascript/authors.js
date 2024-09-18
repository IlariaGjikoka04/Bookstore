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
