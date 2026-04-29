let data;
async function init(){

let link = "collision.json"
info = await fetch(link);
data = await info.json();

let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
     build += `<div class="fitted card">
                 <h3>${collision.collision_type}</h3>
                 <hr>
                 <p>$collision.borough}</p>
                 <p>${collision.incident_zip}</p>
                 <p>$collision.descriptor}</p>
                 <hr>
                 <p>${collision.created_date}</p>
                 <hr>
                 <p>${collision.agency}</p>
              </div>`    
  }
  output.innerHTML = build;
}

function filterByBorough(){
  let output = document.getElementById("output");
  let borough = document.getElementById("borough").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i``];
    if(collision.borough == borough){
      build += `<div class="fitted card">
                    <h3>${collision.collision_type}</h3>
                    <hr>
                    <p>${collision.borough}</p>
                    <p>${collision.incident_zip}</p>
                    <p>${collision.descriptor}</p>
                    <hr>
                    <p>$collision.created_date}</p>
                    <hr>
                    <p>${collision.agency}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}
