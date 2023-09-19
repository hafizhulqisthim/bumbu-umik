// Load all sections
$(document).ready(function () {
  $("#header").load("partials/header.html");
  $("#main").load("partials/main.html");
  $("#footer").load("partials/footer.html");
});

// AOS Initialization
AOS.init({
  duration: 1200,
});
