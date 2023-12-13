/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
// Get all the day elements by their IDs
let daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday"];
let dayCounter = 0;


daysOfWeek.forEach(function(day) {
    var currentDay = document.getElementById(day);
    currentDay.addEventListener("click", function() {
        if (!currentDay.classList.contains("clicked")) {
            dayCounter += 1;
            currentDay.classList.add("clicked");
            calculateWeeklyCost();
        }
    });
});

function calculateWeeklyCost() {
    
    let costPerDay = 20;
    let totalCost = dayCounter * costPerDay;

    
    let calculatedCostElement = document.getElementById("calculated-cost");
    calculatedCostElement.textContent = totalCost;
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
let clearButton = document.getElementById("clear-button");
let weeklyCost = document.getElementById("calculated-cost");

clearButton.addEventListener("click", clearDays);


function clearDays () {
    let resetDays = document.querySelectorAll("#weekday");
    dayCounter = 0;
    resetDays.className = "blue-hover";
    weeklyCost.innerHTML = 0;
    location.reload();
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
let halfButton = document.getElementById("half");
let dailyRate = 35;

halfButton.addEventListener("click", half);


function half() {
    dailyRate = 20;
    halfButton.className = "clicked small-button";
    fullButton.className = "small-button";
    calculateWeeklyCost();
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
let fullButton = document.getElementById("full");

fullButton.addEventListener("click", full);

function full() {
    dailyRate = 35;
    fullButton.className = "clicked small-button";
    halfButton.className = "small-button";
    calculateWeeklyCost();
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculateWeeklyCost() {
    let cost = dailyRate * dayCounter;
    weeklyCost.innerHTML = cost;
}

