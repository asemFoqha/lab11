let gameStarted = false;

let boundary = $(".boundary");
$(".won").hide();
$(".lost").hide();

$(document).ready(() => {
  $("#start").on("click", () => {
    gameStarted = true;
    $("#status").html("Started");
    boundary.removeClass("lose-status");
    $(".lost").hide();
    $(".won").hide();
  });

  $(".boundary").on("mouseenter", () => {
    if (gameStarted) {
      $("#status").html('Click the "S" to begin.');
      gameStarted = false;
      boundary.addClass("lose-status");
      $(".lost").show();

      setTimeout(() => {
        alert("You Lost!!");
      }, 50);
    }
  });

  $("#maze").on("mouseleave", () => {
    if (gameStarted) {
      $("#status").html('Click the "S" to begin.');
      gameStarted = false;
      boundary.addClass("lose-status");
      $(".lost").show();
      setTimeout(() => {
        alert("You Lost!!");
      }, 50);
    }
  });

  $("#end").on("mouseenter", () => {
    if (gameStarted) {
      $("#status").html('Click the "S" to begin.');
      gameStarted = false;
      $(".won").show();
      setTimeout(() => {
        alert("You Won");
      }, 50);
    }
  });
});
