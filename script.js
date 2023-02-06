// Your code here
const table = document.getElementsByTagName("table")[0];

function makeRow() {
  const row = document.createElement("tr");
  for (let i = 0; i < 20; i++) {
    const td = document.createElement("td");
    row.appendChild(td);
  }
  table.appendChild(row);
}

const button = document.getElementById("add-row");
button.addEventListener("click", makeRow);

table.addEventListener("click", colorize);

select = document.getElementsByTagName("select")[0];

let chosenColor = "red";

select.addEventListener("change", function (event) {
  chosenColor = event.target.value;
});

function colorize(event) {
  const target = event.target;
  if (target.tagName === "TD") {
    if (target.className.length) {
      target.className = "";
    } else {
      target.className = chosenColor;
    }
  }
}

// function dragColor(event) {
//     let mouseIsDown = false;
// table.addEventListener("mousedown", (event) => {
//   mouseIsDown = true;
//   event.target.classList.add("colorFill");
// });

// table.addEventListener("mouseup", (event) => {
//   mouseIsDown = false;
// });

// table.addEventListener("mouseover", (event) => {
//   if (mouseIsDown) {
//     event.target.classList.add("colorFill");
//   }
// });
// }

