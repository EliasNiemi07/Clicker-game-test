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
upgrade.textContent = "Click + 1";
upgrade2.textContent = "CPS + 1";
count.textContent = "0";
cost.textContent = "Cost: 30";
cost2.textContent = "Cost: 50";
clickdisp.textContent = "Clickpower: 1";
cpsdisp.textContent = "CPS: 0"
let counter = 5000;
let costnum = 30; // click upgrade
let costnum2 = 50; // cps upgrade
let costnum3 = 200; // upgrade 1
let costnum4 = 400; // upgrade 2
let clickpower = 1;
let clickbonus = 0;
let bonusinc = 0.1; // clickinc
let clickmult = 1;
let clicktotal = (clickpower + clickbonus) * clickmult;
let cps = 0;
let cpsbonus = 0;
let cpsmult = 1;
let cpstotal = (cps + cpsbonus) * cpsmult;
let bonusinc2 = 0.1; // cpsinc
let upgradescale = 1; // click
let upgradescale2 = 0; // cps
let clickscale = 1; 
let bonusdisp = 0;
button.addEventListener("click", function () {
    
    counter += clicktotal;
    count.textContent = counter.toFixed(1);
    

});
upgrade.addEventListener("click", function () {
    if (counter >= costnum) {
        counter -= Math.floor(costnum);
        count.textContent = counter.toFixed(1)
        clickpower += clickscale;
        clickscale += 1;
        clickbonus += bonusinc;
        bonusdisp += bonusinc;
        bonusinc += 0.1;
        clicktotal = (clickpower + clickbonus) * clickmult;
        upgradescale = (clickscale + bonusdisp) * clickmult;
        costnum += 10;
        costnum *= 1.2;
        costnum = Math.floor(costnum)
        cost.textContent = "Cost: " + costnum;
        clickdisp.textContent = "Clickpower: " + clicktotal.toFixed(1);
        upgrade.textContent = "Click + " + upgradescale.toFixed(1);
        console.log("upgradescale", upgradescale);
        console.log("clickbonus",clickbonus);
        console.log("clickmult", clickmult);
        console.log("clickpower", clickpower);
        console.log("bonusinc", bonusinc)
    }
});
upgrade2.addEventListener("click", function () {
if (counter >= costnum2) {
    counter -= Math.floor(costnum2)
    count.textContent = counter.toFixed(1); 
    cps += 1;
    cpsbonus += bonusinc2;
    bonusinc2 += 0.1;
    cpstotal = (cps + cpsbonus) * cpsmult;
    upgradescale2 = (1 + cpsbonus) * cpsmult;
    costnum2 += 30;
    costnum2 *= 1.1;
    costnum2 = Math.floor(costnum2);;
    cost2.textContent = "Cost: " + costnum2;
    cpsdisp.textContent = "CPS: " + cpstotal.toFixed(1);
    upgrade2.textContent = "Click + " + upgradescale2.toFixed(1);
}});


setInterval(() => {
    cpstotal = (cps + cpsbonus) * cpsmult;
        counter += cpstotal / 10;
        count.textContent = counter.toFixed(1);;
    }, 100);

upgrade3.addEventListener("click", function () {
    if (counter >= costnum3) {
    counter -= costnum3
    upgrade3div.classList.add("remove")
    cpstotal = (cps + cpsbonus) * cpsmult;
    cpsmult = 2;
    cpsdisp.textContent = "CPS " + c;
    upgrade2.textContent = "CPS + " + upgradescale2;
}});

upgrade4.addEventListener("click", function () {
    if (counter >= costnum4) {
        counter -= costnum4;
        upgrade4div.classList.add("remove")
        clickmult = 2;
        clicktotal = (clickpower + clickbonus) * clickmult;
        clickdisp.textContent = "Clickpower: " + clicktotal;
        upgradescale = (1 + clickbonus) * clickmult;
        upgrade.textContent = "Click + " + upgradescale;
        
}});
