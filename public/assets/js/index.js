$(function() {
  //on click event to do a put request so that devour can be updated to true
  $(".devoured").on("click", function(event) {
    let id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
    }).then( function() {
      // Reload the page to get the updated list
      location.reload();
    });
  });
  //submit event so that a new burger can be created
  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    if ($("#ca").val().trim() != ''){
      let newBurger = {
        name: $("#ca").val().trim(),
      };    
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then( function() {
        // Reload the page to get the updated list
        location.reload();
      });
    }
  });
});
  