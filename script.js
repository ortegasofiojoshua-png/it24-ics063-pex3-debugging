let count = 0;

const countBtn = document.querySelector("#countBtn");
const countOutput = document.querySelector("#countOutput");
const resetBtn = document.querySelector("#resetBtn");
const statusMessage = document.querySelector("#statusMessage");

console.log("Count button: " + countBtn);
console.log("Count output: " + countOutput);
console.log("Reset button: " + resetBtn);

countBtn.addEventListener("click", function(event) {
    console.log("[Handler A] Event: ", event.type);
    console.log("[Handler A] Target: ", event.target);
    console.log("[Handler A] Count before: : ", count);

    count++;

    countOutput.textContent = count;
    statusMessage.textContent = 'Counter updated.';

    console.log("[Handler A] Count after: : ", count);
    console.log("[Handler A] Display: : ", countOutput.textContent);
});

countBtn.addEventListener("click", function(event) {
    console.warn("[Handler B] Second click handler executed.");
    console.log("[Handler B] Event: ", event.type);
    console.log("[Handler B] Count before: : ", count);

    count++;

    countOutput.textContent = count;
    console.log("[Handler A] Count after: : ", count);
    console.log("[Handler A] Display: : ", countOutput.textContent);
});

resetBtn.addEventListener("click", function(event){
    console.log("[Reset] Event: ", event.type);
    console.log("[Reset] Count before: : ", count);

    count = 0;

    countOutput.textContent = count;
    statusMessage.textContent = 'Counter reset to zero.';

    console.log("[Reset] Count after: : ", count);
    console.log("[Reset] Display: : ", countOutput.textContent);
});

console.log("Event listeners attached.");