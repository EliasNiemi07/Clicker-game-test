const count = document.querySelector("#counter");
const button = document.querySelector("#button");
const cost = document.querySelector("#cost")
const cpscost = document.querySelector("#cost2")
const upgrade = document.querySelector("#upgrade")
const upgrade2 = document.querySelector("#upgrade2")
const upgrade3 = document.querySelector("#upgrade3")
const upgrade3div = document.querySelector("#upgrade3div")
const upgrade4 = document.querySelector("#upgrade4")
const upgrade4div = document.querySelector("#upgrade4div")
const clickdisp = document.querySelector("#click")
const cpsdisp = document.querySelector("#cps")
upgrade.textContent = "Click +1";
upgrade2.textContent = "CPS +1";
count.textContent = "0";
cost.textContent = "Cost: 30";
cost2.textContent = "Cost: 50";
clickdisp.textContent = "Clickpower: 1";
cpsdisp.textContent = "CPS: 0"
let counter = 4000;
let costnum = 30; // click upgrade
let costnum2 = 50; // cps upgrade
let costnum3 = 200; // upgrade 1
let costnum4 = 400; // upgrade 2
let clickpower = 1;
let clickgiver = 1;
let cps = 0;
let cpsgiver = 0;

button.addEventListener("click", function () {
    
    counter += clickpower * clickgiver;
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
        clickdisp.textContent = "Clickpower: " + clickpower * clickgiver
    }
});
upgrade2.addEventListener("click", function () {
if (counter >= costnum2) {
    counter -= Math.floor(costnum2)
    count.textContent = counter.toFixed(1); 
    cpsgiver += 0;
    cps += 1 + cpsgiver;
    costnum2 += 30;
    costnum2 *= 1.1;
    costnum2 = Math.floor(costnum2);
    cost2.textContent = "Cost: " + costnum2;
    cpsdisp.textContent = "CPS: " + cps;
}});


setInterval(() => {
        counter += cps / 10;
        count.textContent = counter.toFixed(1);;
    }, 100);

upgrade3.addEventListener("click", function () {
    if (counter >= costnum3) {
    counter -= costnum3
    upgrade3div.classList.add("remove")
    cps *= 3;
    cpsgiver += 2;
    cpsdisp.textContent = "CPS " + cps;
    upgrade2.textContent = "CPS +3";
}});

upgrade4.addEventListener("click", function () {
    if (counter >= costnum4) {
        counter -= costnum4;
        upgrade4div.classList.add("remove")
        clickpower *2;
        clickgiver += 1;
        clickdisp.textContent = "Clickpower: " + clickpower * clickgiver
        upgrade4.textContent = "CPS +2"
        
}});
