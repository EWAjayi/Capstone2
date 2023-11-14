"use strict"

window.onload = () => {
    // location to output display
    const states = document.getElementById("states");
    const parkType = document.getElementById("parkType");

    addLocationsToDropdown();
    addParkTypesToDropdown();
};

//TODO create first layer: Location dropdown and display onchange
function addLocationsToDropdown() {
    // Get the dropdown element by its ID
    
        // Use forEach to iterate over the array
        locationsArray.forEach(function (location) {
            // Create a new option element
            let option = document.createElement("option");
            
            // Set the value and text content for the new option
            option.value = location;
            option.textContent = location;
            
            // Add an event listener to the option
            //*Add event listener to the dropdown options
            option.addEventListener("click", function searchLocation() {
                // Call a function to display information based on the selected option
                displayLocationInfo(location);
            });
            
            // Add the new option to the dropdown
            states.appendChild(option);
        });
    }
    
    //*Display information based on the state chosen
    function displayLocationInfo(selectedLocation) {
        
        // Filter the nationalParksArray based on the selectedLocation
        let filteredParks = nationalParksArray.filter(function (park) {
            return park.State === selectedLocation;
        });
        
        // Display the filtered information
        let message = `${filteredParks.length} National Parks in ${selectedLocation}</h1><br><br>`;
        message += filteredParks.map(parkTemplate).join("");
        document.getElementById("myParks").innerHTML = message;
    }

//TODO create function for display after onclick
    // Adding OnClick action
    function searchLocation() {
        let message = `${nationalParksArray.length} National Parks to visit</h1><br><br>`;
        message += nationalParksArray.map(parkTemplate).join("");
        document.getElementById("myParks").innerHTML = message;
    }

    //* Template for display output
    function parkTemplate(park) {
        return `
            <div class="card" style="width: 18rem;">
                <img src="${park.Image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${park.LocationName}</h5>
                    <p class="card-text">${park.State}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>`;
    }
    
    //TODO create second layer: filter for park type of the displayed information onchange
    function addParkTypesToDropdown(){
        // Get the dropdown element by its ID
        
        // Use forEach to iterate over the array
        parkTypesArray.forEach(function (types) {
            // Create a new option element
            let option = document.createElement("option");
            
            // Set the value and text content for the new option
            option.value = types;
            option.textContent = types;
            
            // Add the new option to the dropdown
            parkType.appendChild(option);
        });
        
        //*Display information based on the type of park chosen

        //*Add event listener to change display with chosen type
    }
    
    
    
    
    
    //     // Perform an action based on the selected filter type and value
    //     if (parkFilter === "parkLocation") {
        //         console.log("Filtering by Park Location: " + filterValue);
        
        
        //         // ! Add sort function here
        //     }
        //     else if (parkFilter === "parkType") {
            //       console.log("Filtering by Park Type: " + filterValue);
            //         // Modifying same code but filtered by type
            //         function searchType() {
                //             let message = `${nationalParksArray.length} National Parks to visit</h1><br><br>`;
                
//             message += nationalParksArray.map(parkTemplate).join("");
        
//             document.getElementById("myParks").innerHTML = message;
//         }
//     }
//   }
 
//   // Function to apply the selected filter
//   function applyFilter() {
//     const parkFilter = document.getElementById("parkFilter").value;
//     //const filterValue = document.getElementById("filterValue").value;
  
//     console.log("Filter Type: " + parkFilter);
//     //console.log("Filter Value: " + filterValue);
  
  // Event listener to update filterValue dropdown when parkFilter changes
  //document.getElementById("parkFilter").addEventListener("change", populateFilterValues);

// //!Collecting variables stored on other sheets
//     const parkData = {
//         locations: [],
//         types: []
//     }; 


// // Creating filter option UI
// function applyFilter() {
//     // Input selected value from the dropdown
//         const selectedParkFilter = document.getElementById("parkFilter").value;
//     // Clear existing options
//         filterValueDropdown.innerHTML = "";
//     // Populate options based on the selected filter type
//         const options = parkData[parkFilter].map(value => `<option value="${value}">${value}</option>`);
//         filterValueDropdown.innerHTML = options.join("");
// }

//     //Storing the value choice
//     console.log(`Selected Filter:  ${selectedParkFilter}`);

//     // Outputting an action based on the selected park filter type
//     if (selectedParkFilter === "parkLocation") {
//         console.log(`Filtering by Park Location: ${parkFilter}`);
//       } else if (selectedParkFilter === "parkType") {
//         console.log(`Filtering by Park Type: ${parkFilter}`);
//       }
//   }

// //adding event listener to update applyFilter button when type changes
// document.getElementById("parkFilter").addEventListener("change", applyFilter)



// //Grab the value of a selected value from a dropdown
// function getSelectedStateValue(){
//     const selectedValue = states.value;
// }