const button = document.getElementById("ThemeToggle");  //it targets the button with the id of ThemeToggle

button.addEventListener("click", function() { //if the user clicks on the button the website would execute its function

    document.body.classList.toggle("darkmode");

    if (document.body.classList.contains("darkmode")) { //checks if the class is in darkmode
        button.textContent = "Light mode";  //if the darkmode was on it changes the text to Light mode.
    } else {
        button.textContent = "Dark mode";  //then it would change the text to darkmode if Light mode was on.
    }
});

function searchbar() {
    let input = document.getElementById("searchbar").value //sees what texts the user have entered in the search bar
    input = input.toLowerCase(); //converts all input text into lower case letters

    let x = document.querySelectorAll(".placeboxes, .attractionbox"); //targets both specific classes

    for (i = 0; i < x.length; i++) { 
        let name = x[i].getElementsByTagName("h2")[0]; //h2 is picked inside the bar of code

        if (!name.innerHTML.toLowerCase().includes(input)) {  //checks if there anything in the bar
            x[i].style.display = "none"; //if the input if cannot be found then it hides the search boxes
        }
        else {
            x[i].style.display = "block"; //if there is box that matches the text then it shows to the user
        }
    }
}

let backtotopbutton = document.querySelector(".backtotopbutton"); //targets the class backtotopbutton
window.onscroll = function() {scrollFunction()}; //if the window has been scrolled then the website executes its function
function scrollFunction() { //the function of the website being scrolled
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { //checks is the user has scrolled 20 pixels from the website
    backtotopbutton.style.display = "block"; //if the user has scrolled 20 pixels then the backtotopbutton shows up
  } else {
    backtotopbutton.style.display = "none"; //if user has not scrolled 20 pixels then the backtotopbutton shows up does not show up
  }
}
function topfunction(){
    document.documentElement.scrollTop =0; //the function that makes the website scroll back to the top if the button was pressed
}