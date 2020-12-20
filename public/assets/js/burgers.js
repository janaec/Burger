$(document).ready(function () {

    $.ajax("/burgers").then(function (data) {

        var burgers = data.burgers;
        var ready = $("#ready");
        var devoured = $("#devoured");

            for(var i = 0; i < burgers.length; i++){
            if(burgers[i].devoured) {
                devouredEl.append(`<p>${burgers[i].burger_name}<button data-burgerid='${burgers[i].id}' class='btn btn-danger deleteBtn'>I can't eat anymore</button></p>`)
            }
            else {
                ready.append(`<p>${burgers[i].burger_name}<button data-burgerid='${burgers[i].id}' class='btn btn-primary devourBtn'>Devour!</button></p>`)
            }
        }

    })

    $(document).on("click", ".delBtn", function (event) {
        // Get the ID from the button.
        // This is shorthand for $(this).attr("data-planid")
        var id = $(this).data("burgerid");

        // Send the DELETE request.
        $.ajax("/burger/" + id, {
            type: "DELETE"
        }).then(function () {
            console.log("deleted id ", id);
            // Reload the page to get the updated list
            location.reload();
        });
    });

    $("#addBurger").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        // [name=plan] will find an element with a "name" attribute equal to the string "plan"
        var newBurger = {
            burger_name: $("#newBurger").val().trim(),
                
         
        };

        // Send the POST request.
        $.ajax("/create", {
            type: "POST",
            data: newBurger,
            
        
        }).then(function () {
            console.log("New Burger Created");
            // Reload the page to get the updated list
            location.reload();
        });
    });
    $(document).on("click", ".devourBtn", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var id = $(this).data('burgerid')
        console.log(id);
    
        // Send the PUT request.
        $.ajax("/api/devour/" + id, {
          type: "PUT"
        }).then(
          function() {
            console.log("updated id ", id);
            // Reload the page to get the updated list
            location.reload();
    // $("#updateQuote").on("submit", function (event) {
    //     // Make sure to preventDefault on a submit event.
    //     event.preventDefault();

    //     var id = $("#quote_id")
    //         .val()
    //         .trim();

    //     var updatedquote = {
    //         quote: $("#updateQuote [name=quote]")
    //             .val()
    //             .trim(),
    //         author: $("#updateQuote [name=author]")
    //             .val()
    //             .trim()
    //     };

    //     // Send the PUT request.
    //     $.ajax("/quotes/" + id, {
    //         type: "PUT",
    //         data: JSON.stringify(updatedquote),
    //         dataType: "json",
    //         contentType: "application/json"
    //     }).then(function () {
    //         console.log("updated id ", id);
    //         // Reload the page to get the updated list
    //         location.reload();
        });
    });
});