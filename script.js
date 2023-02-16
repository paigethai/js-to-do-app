// Psuedo code for our To Do App: 


// 1) Save the values / DOM elements we will need to interact with 

    // let's query the DOM for the form element and save it within a variable
    const formElement = document.querySelector('form');

        // double check whether anything was saved (AKA returned) in your variable
        // console.log(formElement);

    // let's query the DOM for the input element and save it within the variable
    const inputElement = document.querySelector('input')
    // OR can use getElementById
    // const inputElement = document.getElementById('#todoItem')

    // let's query the DOM for the ul element and save it within a variable
    const ulElement = document.querySelector('ul');


// 2) Attach an event to the form element 
    // pass in 2 arguments the event listener method
        // a) the event you are listening for
        // b) the callback function which will hold the logic we wish to run ONCE the event "is heard" (AKA occurs in the page)
                // everytime an event occurs, an event object is generated (we're going to pass that object into the scope of the callbak func)
    formElement.addEventListener('submit', function(event){
        // this line of code prevents the page from refreshing
        event.preventDefault();
        // the default behaviour of a form is to refresh the page -- SO we need to tell it to NOT carry out it's default behaviour
        console.log(event);
        // console.log('form has been submitted!');

        // save the entered text value from the input within a variable
        // NOTE: any info entered into an input element will always be avaiable at the value property 
        console.log(inputElement);
        // through the inputElement object we found .value
        const userToDo = inputElement.value;

    // Conditional Statements Time
    // IF the user submits a to-do then (check whether the value of the input is NOT empty) then:
    // STRETCH ERROR-HANDLING GOAL. How do we avoid adding empty strings with multiple space characters (probably RegEx)
        if(userToDo !== ""){

            console.log(userToDo);

        // create a li element
        const liElement = document.createElement('li');
        console.log(liElement);

            // add a FA icon to the li
            liElement.innerHTML = '<i class="fa-regular fa-square"></i>';
            console.log(liElement);
            // add the text from the todo that the user enetered to the li

        // append the li elememnt to the ul element
        // because it is text content, we need to specifically create a text NODE and THEN append it
        const toDoText = document.createTextNode(userToDo);
        liElement.appendChild(toDoText);

        // append the li to the ul element
        ulElement.appendChild(liElement);

        // clear the input (value) once the form is submitted
        inputElement.value = "";

    // ELSE alert the user to please submit a valid to do 
        } else {
            alert('Please enter a valid task! Do not leave the input empty.')
        }

    });
