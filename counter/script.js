const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');
const incrementBtn = document.getElementById('incrementBtn');
const countLabel = document.getElementById('countLabel');

let count = 0;

incrementBtn.onclick = function() {
    count++;
    countLabel.textContent = `Count: ${count}`;
}

decrementBtn.onclick = function() {
    count--;
    countLabel.textContent = `Count: ${count}`;
}

resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = `Count: ${count}`;
}
