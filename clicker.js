const count = document.querySelector("#counter");
const button = document.querySelector("#button");
const cost = document.querySelector("#cost")
const cpscost = document.querySelector("#cost2")
const upgrade = document.querySelector("#upgrade")
const upgrade2 = document.querySelector("#upgrade2")
count.textContent = "0";
cost.textContent = "Cost: 30";
cost2.textContent = "Cost: 100"
let counter = 0;
let costnum = 30;
let costnum2 = 100;
let clickpower = 1;
let cps = 0;
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
upgrade2.addEventListener("click", function () {
if (counter >= costnum2) {
    setInterval(() => {
        counter -= Math.floor(costnum)
        cps += 1;
        counter += cps;
        count.textContent = counter;
    }, 1000);
}
}
);
