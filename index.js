var input = document.getElementById('tariff');

var ccenA = document.getElementById('tariff1');
var ccenB = document.getElementById('tariff2');
var ccenC = document.getElementById('tariff3');
var ccenD = document.getElementById('tariff4');
var ccenE = document.getElementById('tariff5');
    var outputtext = document.getElementById('status');
var person = document.getElementById('persons');

 input.addEventListener('change',function(){
        if(this.checked) {
            person.style.opacity = 0.5;
            // outputtext.innerHTML = "aktiv";
             ccenA.innerHTML = "5 140,20";
             ccenB.innerHTML = "3 386,70";
             ccenC.innerHTML = "2 990,30";
             ccenD.innerHTML = "3 372,40";
             ccenE.innerHTML = "8 221,90";
        } else {
            person.style.opacity = 1;
          //outputtext.innerHTML = "inaktiv";
          ccenA.innerHTML = "73,40";
          ccenB.innerHTML = "84,00";
          ccenC.innerHTML = "85,40";
          ccenD.innerHTML = "67,50";
          ccenE.innerHTML = "82.20";
        }
    });