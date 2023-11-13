"use strict"

window.onload = () => {
    //
    const states = document.getElementById("states");
    const parktype = document.getElementById("parktype");
    applyFilter();
    addLocationsToDropdown();
    addNationalParksToDropdown();
};

// Creating filter option UI
function applyFilter() {
    // Input selected value from the dropdown
    var selectedParkFilter = document.getElementById("parkFilter").value;

    //Storing the value choice
    console.log(`Selected Filter:  ${selectedParkFilter}`);

    // Outputting an action based on the selected park filter type
    if (selectedParkFilter === "parkLocation") {
        // Perform action for park location filter
        console.log(`Filtering by Park Location: ${parkFilter}`);
        // Add your specific action for park location filter here
      } else if (filterType === "parkType") {
        // Perform action for park type filter
        console.log(`Filtering by Park Type: ${parkFilter}`);
        // Add your specific action for park type filter here
      }
  }


function addLocationsToDropdown() {
    // Get the dropdown element by its ID

    // Use forEach to iterate over the array
    locationsArray.forEach(function (location) {
    // Create a new option element
    let option = document.createElement("option");

    // Set the value and text content for the new option
    option.value = location;
    option.textContent = location;

    // Add the new option to the dropdown
    states.appendChild(option);
    });
}

function addNationalParksToDropdown(){
        // Get the dropdown element by its ID

    // Use forEach to iterate over the array
    locationsArray.forEach(function (park) {
        // Create a new option element
        let option = document.createElement("option");
    
        // Set the value and text content for the new option
        option.value = park.LocationName;
        option.textContent = park.LocationName;
    
        // Add the new option to the dropdown
        parktype.appendChild(option);
        });
}

//Grab the value of a selected value from a dropdown
function getSelectedStateValue(){
    const selectedValue = states.value;
}