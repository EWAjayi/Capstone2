//*Mountain stuff


// async function getSunsetForMountain(lat, lng) {
//   let response = await fetch(
//     `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`
//   );
//   let data = await response.json();
//   return data;
// }
// let mySunrise = getSunsetForMountain(`${mountain.coords.lat},${mountain.coords.lng}`);
// document.getElementById("mountainOutput").innerHTML = `
//   <h1 class="app-title"> ${mountainsArray.length} Mountains to climb</h1>
//   ${mountainsArray.map(mountainTemplate).join("")}
//   <p class="footer">These ${
//     mountainsArray.length
//   } mountants were added recently. Check back soon for updates.</p>
// `;

//*National stuff
    // Adding OnClick action
    // function searchLocation() {
    //     let message = `${nationalParksArray.length} National Parks to visit</h1><br><br>`;
    //     message += nationalParksArray.map(parkTemplate).join("");
    //     document.getElementById("myParks").innerHTML = message;
    // }
    
    
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

// function searchLocation() {
//   let message = `${nationalParksArray.length} National Parks to visit</h1><br><br>`;

//   message += nationalParksArray.map(parkTemplate).join("");

//   document.getElementById("myParks").innerHTML = message;
// }

// function parkTemplate(park) {
//   return `
//         <div class="card" style="width: 18rem;">
//         <img src="${park.Image}" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">${park.LocationName}</h5>
//             <p class="card-text">${park.State}.</p>
//             <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//         </div>`;
// }