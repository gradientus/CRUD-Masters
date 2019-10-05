// The API object contains methods for each kind of request we'll make

var API = {
  saveUser: function(userName, password) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/users", //NOTE: REPLACE THE ADD TASK ROUTE HERE
      data: JSON.stringify(userName, password)
    });
  }
};

// Add event listeners to the submit and delete buttons
$("#submit").on("click", function() {
  event.preventDefault();
  console.log("Ahhhhhh!");
  userName = $("#user-entry")
    .val()
    .trim();
  password = $("#user-password")
    .val()
    .trim();
  console.log(userName, password);
  //Show a modal if there is no info, but the Add Task button was clicked
  // if (userName === "") {
  //   $(".modal").modal("toggle");

  //   //add the task to the database
  // } else {

  //   });
  API.saveUser(userName, password).then(function() {
    console.log(userName, password);
  });
});
