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

//JQUERY

//Shrinks header size when the document is scrolled down by 80 pixels */
$(document).on("scroll", function() {
    //When the webpage is scrolled down from the top by 50 pixels
    // this if statement will trigger
    if($(document).scrollTop() > 50) {
        //Once the 50px requirement has been met add the
        // nav-shrink class selector to the same html element
        // that has the nav class
        $("nav").addClass("nav-shrink");
        //Adjust the position of the mobile drop menu
        //To accomodate the new height decrease
        $("div.navbar-collapse").css("margin-top", "-6px")
    } else {
        //if the webpage has not been scrolled down
        // or is back at the top the nav-shrink class selector
        // is removed from the html element with the nav class
        $("nav").removeClass("nav-shrink");
        //The margin for the drop down menu is now
        // returned to it's original amount
        $("div.navbar-collapse").css("margin-top", "14px");
    }
});

//close mobile menu when a navigation link is clicked
$(document).ready(function () {
    // on click when an element contains just the nav-link class & not the dropdown-toggle & then
    // also close when an elemnt w/ the class .dropdown-item (each movie link) has been clicked
    $(".navbar-nav").on('click', '.nav-link:not(".dropdown-toggle"), .dropdown-item', function() {
        //collapse navbar when link or dropdown item gets clicked
        $(".navbar-collapse").collapse('hide');
    });
});