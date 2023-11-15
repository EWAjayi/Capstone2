"use strict"

window.onload = () => {

    // location to output display
    const states = document.getElementById("states");
    const parkType = document.getElementById("parkType");
    // const mountains = document.getElementById("mountains");

    addLocationsToDropdown();
    sortByParkType();
};

//! National Park section
//TODO create first layer: Add informatin to dropdown menus
    function addLocationsToDropdown() {
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

    function addParkTypesToDropdown(){
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
    }

//TODO create function for display after onclick
    //*Display information based on the state chosen
        function displayLocationInfo() {
            let stateValue = document.getElementById("states").value
            console.log(stateValue);
            // Filter the nationalParksArray based on the selectedLocation
            let filteredParks = nationalParksArray.filter(function (park) {
                return park.State === stateValue;
            });
            
            //Function to display additional options
            function showTypeOptions() {
                // Get the second button element
                let parkType = document.getElementById("parkType");
                let parkTypeButton = document.getElementById("parkTypeButton");
                // Change the display style to block (show the button)
                parkType.style.display = "inline";
                parkTypeButton.style.display = "inline";
            }

            // Display the filtered information
            let message = `${filteredParks.length} National Parks in ${stateValue}</h1><br><br>`;
            message += filteredParks.map(parkTemplate).join("");
            addParkTypesToDropdown();
            showTypeOptions();
            document.getElementById("myParks").innerHTML = message;

            // Allow list to be used in other functions
            return filteredParks;
        }

    //* Template for location display output
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
    
//TODO create second layer: filter park types
    //Display information based on the park type chosen
    function sortByParkType() {

        let typeValue = document.getElementById("parkType").value
        console.log(parkType);

        // Filter the parkType based on pulling from Name
        function filterParkNames (typeValue) {
            let filteredType = filteredParks.filter(function (park) {
                return park.LocationName
            });

            return filteredType;
        }

        // Display the filtered information
        let message = `There are ${filteredType.length} ${parkType}s in ${stateValue}</h1><br><br>`;
        message += filteredType.map(filteredParkTemplate).join("");
        // addParkTypesToDropdown();
        // showTypeOptions();
        document.getElementById("myParks").innerHTML = message;
    }    

    //* Template for displaying filtered output
    function filteredParkTemplate(park) {
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
    

