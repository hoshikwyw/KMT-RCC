document.addEventListener("DOMContentLoaded", function () {
  const reviewForm = document.getElementById("review-form");
  const reviewList = document.getElementById("review-list");

  reviewForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = reviewForm.elements["first-name"].value;
    const lastName = reviewForm.elements["last-name"].value;
    const productSelect = reviewForm.elements["product"].value;
    const rating = reviewForm.elements["rating"].value;
    const comments = reviewForm.elements["comments"].value;

    const reviewElement = document.createElement("li");
    reviewElement.innerHTML = `<li class="review-sample">
        <div class="">
            <h3>Name</h3>
            <p>${firstName} ${lastName}</p>
        </div>
        <div>
            <h3>Product</h3>
            <p>${productSelect}</p>
        </div>
        <div>
            <h3>Rating</h3>
            <p>${rating}</p>
        </div>
        <div>
            <h3>Comment</h3>
            <p>${comments}</p>
        </div>
      </li>`;

    reviewList.appendChild(reviewElement);

    reviewForm.reset();
  });
});
function redirectPage(selectedValue) {
  if (selectedValue) {
      window.location.href = selectedValue;
  }
}