
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
  <br>
  <div class="card text-bg-dark" style="width: 60%; padding: 15px; min-height: 450px;">
    <img src="images/${matchingInfo.img}" class="card-img-top" alt="A nice Tree"  style= "max-width:97%; margin: auto; margin-top: 4px;">
      <div class="card-img-overlay" style="padding: 5%; align-items: baseline;">
        <h2 class="mountain-name" style=" color: #6E581F;">${matchingInfo.name} <span class="species">(${matchingInfo.elevation} feet)</span></h2>
        <div>
        </div>
        <p class="card-subtitle text-body-secondary py-2"><strong>Effort:</strong> ${matchingInfo.effort}</p>
        </div>
        <div class="card-body text-center">
          <h4 class="mountain-desc" style=" color: #FFFFF;">${matchingInfo.desc}</h4>
        </div>
      </div>
  `;

  document.getElementById("mountainOutput").innerHTML = message;
}



