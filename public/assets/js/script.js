$(function() {
    
  $(".activate-form").on("submit", function(event) {
    event.preventDefault();

    var student_id = $(this).children(".student_id").val();
    console.log(student_id);
    $.ajax({
      method: "PUT",
      url: "/students/" + student_id
    }).then(function(data) {
      // reload page to display activated student in proper column
      location.reload();
    });

  });


});
