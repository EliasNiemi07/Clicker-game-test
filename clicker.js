const count = document.querySelector("#counter");
const button = document.querySelector("#button");
const cost = document.querySelector("#cost")
const upgrade = document.querySelector("#upgrade")
count.textContent = "0";
cost.textContent = "Cost: 20";
let counter = 0;
let costnum = 20;
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
        costnum *= 1.2;
        cost.textContent = "Cost: " + Math.floor(costnum)
    }
});