const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// my code for submiting form by Enter Key(13)
let enterKey = document.querySelector("#input-box");
enterKey.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    addTask();
  }
});

function addTask() {
  if (inputBox.value === "") {
    alert("You must write somthing!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  inputBox.focus();
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
