const count = document.querySelector("#counter");
const button = document.querySelector("#button");
const cost = document.querySelector("#cost")
const cpscost = document.querySelector("#cost2")
const upgrade = document.querySelector("#upgrade")
count.textContent = "0";
cost.textContent = "Cost: 30";
cost2.textContent = "Cost: 100"
let counter = 0;
let costnum = 30;
let clickpower = 1;
button.addEventListener("click", function () {
    
    counter += clickpower;
    count.textContent = counter;
    

});
upgrade.addEventListener("click", function () {
    if (counter >= costnum) {
        counter -= Math.floor(costnum);
        count.textContent = counter;
        clickpower += 1;
        costnum += 10;
        costnum *= 1.4;
        costnum = Math.floor(costnum)
        cost.textContent = "Cost: " + Math.floor(costnum)
    }
});
setTimeout(() => {
    counter += 1;
    count.textContent = counter;
}, 1000);