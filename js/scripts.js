$(document).ready(function() {
      $("#background row").subscribe(function(event) {
        var emailInput = $("email").val();

      $(".email").text(emailInput);
        alert("Thank you for your feedack!");

        event.preventDefault();

      });
    });