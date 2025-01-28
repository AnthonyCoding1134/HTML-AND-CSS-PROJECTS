const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-scrollspy'
  })

// inititialize bootstrap popovers
// targets all html elements that contain the attribute:  data-bs-toggle="popover"
// and turns them into a list
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
console.log(popoverTriggerList);

// Now we loop through the list to determine the star rating (data-bs-img attribute)
// for each list element


//element argument represents each item in the popoverTriggerList array
popoverTriggerList.forEach(function (element) {
    var imgSrc =element.getAttribute('data-bs-img');
    // inserts picture data into the content variable that holds the <img> tag
    // to insert when the popver is triggered
    //since img tag (stars) exists within the loop-this is where we apply css class
    var content = "<img class='star-rating' src='" + imgSrc +"'>";
    new bootstrap.Popover(element, {
        //sets content of the popover to content var which contains html string for img
        content: content,
        html: true,
        trigger: 'hover'
    });
});

//Initialize Toast

const toastElList = document.querySelectorAll('.toast')
//map function:  method that iterates over each array element- applies callback function on each element
// it then applies the results into a new array
const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl))

// Function to display toast w/ selected options
// Options property used to access list of selected options within html element
function displaySelectedMovieOptions(){
    var movie = document.getElementById('movieSelect').options[document.getElementById('movieSelect').selectedIndex].text;
    console.log(movie);
    
    
    var time = document.getElementById('timeSelect').options[document.getElementById('timeSelect').selectedIndex].text;
    console.log(time);
    var quantity = document.getElementById('quantity').value;

    var message = "Purchase confirmed for: " + movie + "\nTime: " + time + "\nTickets: " + quantity;

    //Display Toast
    var toastBody = document.getElementById('toastBody');
    toastBody.textContent = message;
    var toast = new bootstrap.Toast(document.getElementById('toastDisplay'));
    toast.show()

}

function buyTickets() {
    displaySelectedMovieOptions();
}
//console.log('movieselect').options;