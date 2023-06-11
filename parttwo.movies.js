$(document).ready(function() {
    /* Capture form submission */
    $("form").submit(function(event) { 
        /* Prevent default form submission behavior */
        event.preventDefault(); 
        /* Get values from input fields */
        var title = $("#movie-title").val(); 
        var rating = $("#movie-rating").val();
        /* Append values to the DOM */
        var movieEntry = $("<div></div>");
        movieEntry.append("<p>Title: " + title + "</p>");
        movieEntry.append("<p>Rating: " + rating + "</p>");
        /* Create remove button for each title and rating */ 
        var removeButton = $("<button>Remove</button>");
        removeButton.click(function() {
            movieEntry.remove(); /* Remove the title and rating entry when the button is clicked */
        });
        movieEntry.append(removeButton);
      
        $("body").append(movieEntry); /* Append the title, rating, and remove button to the body */
      
        /* Reset the form inputs */
        $("#movie-title").val("");
        $("#movie-rating").val("");
    });
});