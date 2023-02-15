// Psuedo code for our To Do App: 


// 1) Save the values / DOM elements we will need to interact with 

    // lets query the DOM for the form element and save it within a variable

    // let query the DOM for the input element and save it within the variable


// 2) Attach an event to the form element 
    // pass in 2 arguments the event listener method
        // a) the event you are listening for
        // b) the callback function which will hold the logic we wish to run ONCE the event "is heard" (AKA occurs in the page)

    // save the text value from the input within a variable

    // Conditional Statements Time
    // IF the user submits a to-do then (check whether the value of the input is NOT empty) then:
        // create a li element  
            // add a FA icon to the li 
            // add the text from the todo that the user enetered to the li

        // append the li elememnt to the ul element 
    // ELSE alert the user to please submit a valid to do 
