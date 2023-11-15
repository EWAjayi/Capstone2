
loadData();

function loadData() {
  let down = document.getElementById("mountains");
  for (let i = 0; i < mountainsArray.length; i++) {
    let optn = mountainsArray[i];
    let el = document.createElement("option");
    el.textContent = optn.name;
    el.value = optn.name;
    down.appendChild(el);
  }
}
const submitButton = document.getElementById("mountainButton");
submitButton.addEventListener('click', mountainTemplate);

function mountainTemplate(mountain) {
  let mountainValue = document.getElementById("mountains").value;
  let matchingInfo = mountainsArray.find(mountainName => mountainName.name == mountainValue);

  let message = `
  <div class="mountain">
  <img class="mountain-photo" src="images/${matchingInfo.img}">
  <h2 class="mountain-name">${matchingInfo.name} <span class="species">(${matchingInfo.elevation} feet)</span></h2>
  <h4 class="mountain-desc">${matchingInfo.desc} </h4>
  <p><strong>Effort:</strong> ${matchingInfo.effort}</p>
  </div>
  `;

  document.getElementById("mountainOutput").innerHTML = message;
}



