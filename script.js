window.onload = function() { document.getElementById("feedbackForm").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent form from reloading the page

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      document.getElementById("feedbackMessage").textContent = `Thank you, ${name}, for your feedback!`;
      this.reset();
    } else {
      alert("Please fill out all fields.");
    }
  });
 };
