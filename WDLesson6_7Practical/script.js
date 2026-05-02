let data;

async function init() {
  let link = "collision.json";
  let info = await fetch(link);
  data = await info.json();

  let output = document.getElementById("output");
  let result = document.getElementById("result");

  let build = "";
  let ct = 0;

  for (let i = 0; i < data.length; i++) {
    let collision = data[i];

    build += `<div class="fitted card">
                <h3>${collision.collision_type}</h3>
                <hr>
                <p>${collision.borough}</p>
                <p>${collision.incident_zip}</p>
                <p>${collision.descriptor}</p>
                <hr>
                <p>${collision.created_date}</p>
                <hr>
                <p>${collision.agency}</p>
              </div>`;

    ct++;
  }

  result.innerHTML = `${ct} Results found.`;
  output.innerHTML = build;

  let boroughs = fillDropDown("borough");
  document.getElementById("borough").innerHTML = boroughs;
}

function filterByBorough() {
  let borough = document.getElementById("borough").value;

  let output = document.getElementById("output");
  let result = document.getElementById("result");

  let build = "";
  let ct = 0;

  for (let i = 0; i < data.length; i++) {
    let collision = data[i];

    if (collision.borough == borough || borough == "") {
      build += `<div class="fitted card">
                  <h3>${collision.collision_type}</h3>
                  <hr>
                  <p>${collision.borough}</p>
                  <p>${collision.incident_zip}</p>
                  <p>${collision.descriptor}</p>
                  <hr>
                  <p>${collision.created_date}</p>
                  <hr>
                  <p>${collision.agency}</p>
                </div>`;

      ct++;
    }
  }

  result.innerHTML = `${ct} Results found.`;
  output.innerHTML = build;
}

init();