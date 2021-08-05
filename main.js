// let incrementedEl = document.getElementById("incremented-count");
// let incrementBtn = document.getElementById("increment");
// let saveBtn = document.getElementById("save");
// let savedCount = document.getElementById("saved-count");
// let incrementedBtn = incrementBtn;

let count = 0;

let incrementedEl = document.getElementById("incremented-count");

function incrementCount() {
  count += count;
  incrementedEl.innerText = count;
  //   console.log(count);
}

let savedCount = document.getElementById("saved-count");

function save() {
  count += count;
  savedCount.innerText = count;
  //   console.log(count);
}
