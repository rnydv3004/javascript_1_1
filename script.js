
const decrementBtn = document.getElementById("decrement-btn");
const incrementBtn = document.getElementById("increment-btn");
const resetBtn = document.getElementById("reset-btn");
const counter = document.getElementById("counter");

// decrement button 

decrementBtn.addEventListener("click",() => {
  counter.innerText = Number(counter.innerText) - 1;
});

// increment button

incrementBtn.addEventListener("click",() => {
  counter.innerText = Number(counter.innerText) + 1;
});

// reset button

resetBtn.addEventListener("click",() => {
  counter.innerText = 0;
});

