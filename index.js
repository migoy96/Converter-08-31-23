function gTokg(){
    let num1 = Number(document.getElementById("num1").value);
    let result = (num1 / 1000);
    let num2 = document.getElementById("num2");
    num2.value = result;
}

function kgtopounds(){
    let num3 = Number(document.getElementById("num3").value);
    let result = (num3 * 2.205)
    let num4 = document.getElementById("num4");
    num4.value = result;
}

function gtoOz(){
    let num5 = Number(document.getElementById("num5").value);
    let result = (num5 / 28.35)
    let num6 = document.getElementById("num6");
    num6.value = result;
}

function oztopounds(){
    let num7 = Number(document.getElementById("num7").value);
    let result = (num7 / 16)
    let num8 = document.getElementById("num8");
    num8.value = result;
}

function reset(){
    let num1 = document.getElementById("num1");
    num1.value = "";
    let num2 = document.getElementById("num2");
    num2.value = "";
}

function reset2(){
    let num3 = document.getElementById("num3");
    num3.value = "";
    let num4 = document.getElementById("num4");
    num4.value = "";
}

function reset3(){
    let num5 = document.getElementById("num5");
    num5.value = "";
    let num6 = document.getElementById("num6");
    num6.value = "";
}

function reset4(){
    let num7 = document.getElementById("num7");
    num7.value = "";
    let num8 = document.getElementById("num8");
    num8.value = "";
}
    