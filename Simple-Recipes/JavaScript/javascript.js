// RECIPE POP UP MODAL SECTION 

//sets up the button that will open the recipe modal. targets all
// input elements with modal-button class & stores them in array
var btns = document.querySelectorAll("input.modal-button"); 

//Defines all models for each recipe
//contains any html element that has the recipe-modal class
var modals = document.querySelectorAll(".recipe-modal");

//Gets the span element that closes the modal
var closeBtn = document.getElementsByClassName("close-btn");

//When the user clicks recipe button- open the modal
for(var i = 0; i < btns.length; i++) {
    //Onclick Event determines which of the elements w/ modal-button class was clicked
    btns[i].onclick = function (event) {
        modal = document.querySelector(event.target.getAttribute("href"));
        // Modify the element's display from "none" (in CSS) to "block"
        modal.style.display = "block";
        const autoClose = setTimeout(closeModal, 1000);
    }
   
}

//Closes the modal
for(var i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function () {                                       
        for(var index in modals) {
            if(modals[index].style) {
                modals[index].style.display = "none";
            }
        }            
    }
}



//automatically closes modal after 10 seconds
function closeModal() {
    for (var index in modals){
        //modals[i].style.display = 'none';
        if(modals[index].style) {
            modals[index].style.display = "none";
        }
    }
}



//EMAIL VALIDATION

document.getElementById('contactForm').addEventListener('submit', 
    function (event) {
    //overrides the default browser refresh when submit button is pressed
    event.preventDefault();


    //Variables to validate each field is filled out
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    //Email pattern checks for all symbols that would be needed
    // for an email address such as @ and . & the text that comes before & after
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    //use this var to display messages if fields are filled
    //out or thank you message
    const valMsg = document.getElementById('validateMsg');

     //checks if fields have been filled out
    if(!firstName || !lastName || !phone || !message) {
    valMsg.innerHTML = '<p style="color: red; font-size: 50px;">Please fill out required fields!</p>'

    //Checks if there is a valid email using the test method
    } else if(!emailPattern.test(email)) {
    valMsg.innerHTML = '<p style="color: red;">Please enter a valid email</p>'

    // if all fields are filled out correctly display confirmation message
    } else {
      valMsg.innerHTML = '<p style="color:red;">Thanks for your submission!</p>'
    }

    // Capture data that was input & display in console
    //create dictionary obj to store data in input fields
    const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        message: message,
        subscribe: document.getElementById('subscription').checked // the checked property verifies if checkbox was clicked (boolean)

    }

    // Displays what user wrote in console
    //json is format for storing & sending data
    //stringify takes a JS object & converts to a json string do data can be displayed in console
    console.log(JSON.stringify(formData));

}

)