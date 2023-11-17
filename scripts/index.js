"use strict"

window.onload = () => {

    // location to output display
    const states = document.getElementById("states");
    const parkType = document.getElementById("parkType");
    // const mountains = document.getElementById("mountains");

    addLocationsToDropdown();
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

//TODO create function for display after onclick "search by location"
    //*Display information based on the state chosen
        function displayLocationInfo() {
            //define value by grabbing id
            let stateValue = document.getElementById("states").value
            console.log(stateValue);
            // Filter the nationalParksArray based on the selected location
            let filteredParks = nationalParksArray.filter(function (park) {
                return park.State === stateValue;
            });

            // Display the filtered information
            let message = `There are ${filteredParks.length} Parks in ${stateValue}</h1><br><br>`;
            message += filteredParks.map(parkTemplate).join("");
            addParkTypesToDropdown();
            showTypeOptions();
            document.getElementById("myParks").innerHTML = message;
            
            //Function to display additional options
            function showTypeOptions() {
                // Get the second dropdown element
                let parkType = document.getElementById("parkType");
                //Get the second button element
                let parkTypeButton = document.getElementById("parkTypeButton");
                // Change the display style to reveal them
                parkType.style.display = "inline";
                parkTypeButton.style.display = "inline";

                return parkType;
            }

            //TODO create second layer: filter park types using conditional
            const submitButton = document.getElementById("parkTypeButton");
            submitButton.addEventListener('click', sortByParkType);

            function sortByParkType() {
                //define value by grabbing id
                let typeValue = parkType.value;
                    console.log(typeValue);
                let filteredParks = nationalParksArray.filter(function (park) {
                    return park.State === stateValue;
                });
        
                // Filter the parkType based on filtering from LocationName
                let filteredType = filteredParks.filter(function (park) {
                    return park.LocationName.includes(typeValue);
                });
        
                // Display the filtered information
                let message = `There are ${filteredType.length} ${typeValue}s in ${stateValue}</h1><br>`;
                message += filteredType.map(parkTemplate).join("");
                document.getElementById("myParks").innerHTML = message;
        
                //Allow elements to be used in other functions
                return filteredType;
        
            } 

        }

    //* Template for location display output
        function parkTemplate(park) {
            return `
                <br>
                <div class="card" style="width: 18rem; margin: 20px; min-height: 450px;">
                    <img src="images/nice_tree.gif" class="card-img-top" alt="A nice Tree"  style= "max-width:97%; margin: auto; margin-top: 4px;">
                    <div class="card-body">
                        <div>
                            <h4 class="card-title text-center">${park.LocationName}</h4>
                        </div>
                        <div>
                            <h5 class="card-subtitle text-center text-body-secondary py-2">A lovely place to visit while you're in ${park.City}!</h5>
                            <h6><a href="#" class="card-link"> Visit their Local Website</a></h6>
                        </div>
                    </div>
                </div>
        `;}

    

