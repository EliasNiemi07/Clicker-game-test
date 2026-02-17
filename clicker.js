const count = document.querySelector("#counter");
const button = document.querySelector("#button");
const cost = document.querySelector("#cost")
const cpscost = document.querySelector("#cost2")
const upgrade = document.querySelector("#upgrade")
const upgrade2 = document.querySelector("#upgrade2")
const upgrade3 = document.querySelector("#upgrade3")
const upgrade3div = document.querySelector("#upgrade3div")
const clickdisp = document.querySelector("#click")
const cpsdisp = document.querySelector("#cps")
count.textContent = "0";
cost.textContent = "Cost: 30";
cost2.textContent = "Cost: 100";
clickdisp.textContent = "Clickpower: 1";
cpsdisp.textContent = "CPS: 0"
let counter = 0;
let costnum = 30;
let costnum2 = 100;
let clickpower = 1;
let cps = 0;

button.addEventListener("click", function () {
    
    counter += clickpower;
    count.textContent = counter.toFixed(1);
    

});
upgrade.addEventListener("click", function () {
    if (counter >= costnum) {
        counter -= Math.floor(costnum);
        count.textContent = counter.toFixed(1);
        clickpower += 1;
        costnum += 10;
        costnum *= 1.4;
        costnum = Math.floor(costnum)
        cost.textContent = "Cost: " + costnum
        clickdisp.textContent = "Clickpower: " + clickpower
        console.log(clickpower)
    }
});
upgrade2.addEventListener("click", function () {
if (counter >= costnum2) {
    counter -= Math.floor(costnum2)
    count.textContent = counter.toFixed(1); 
    cps += 1;
    costnum2 += 50;
    costnum2 *= 1.2;
    costnum2 = Math.floor(costnum2);
    cost2.textContent = "Cost: " + costnum2;
    cpsdisp.textContent = "CPS: " + cps;
}});


setInterval(() => {
        counter += cps / 10;
        count.textContent = counter.toFixed(1);;
    }, 100);

upgrade3.addEventListener("click", function () {
    upgrade3div.classList.add("remove")

});
